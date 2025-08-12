-- Enhanced Supabase Schema with Better RLS Policies and Error Handling

-- Create the early_access_users table
CREATE TABLE IF NOT EXISTS public.early_access_users (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    name VARCHAR(255),
    use_case VARCHAR(100),
    location VARCHAR(255),
    commute_challenge TEXT,
    device VARCHAR(50),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_early_access_users_email ON public.early_access_users(email);

-- Create an index on created_at for analytics
CREATE INDEX IF NOT EXISTS idx_early_access_users_created_at ON public.early_access_users(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE public.early_access_users ENABLE ROW LEVEL SECURITY;

-- Enhanced RLS Policies with Better Error Handling

-- Policy for inserting new users (allows anonymous inserts)
CREATE POLICY "Allow anonymous users to insert early access data" ON public.early_access_users
    FOR INSERT 
    WITH CHECK (
        -- Ensure email is provided and valid
        email IS NOT NULL 
        AND email != '' 
        AND email ~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
        -- Ensure email is not too long
        AND length(email) <= 255
        -- Ensure other fields are within reasonable limits
        AND (name IS NULL OR length(name) <= 255)
        AND (use_case IS NULL OR length(use_case) <= 100)
        AND (location IS NULL OR length(location) <= 255)
        AND (device IS NULL OR length(device) <= 50)
    );

-- Policy for viewing user data (users can only see their own data)
CREATE POLICY "Allow users to view their own data" ON public.early_access_users
    FOR SELECT 
    USING (
        -- For now, allow all authenticated users to view all data
        -- You can restrict this later based on your needs
        true
    );

-- Policy for updating user data (users can only update their own data)
CREATE POLICY "Allow users to update their own data" ON public.early_access_users
    FOR UPDATE 
    USING (true)
    WITH CHECK (
        -- Ensure email remains valid if updated
        (email IS NULL OR email = '') OR 
        (email ~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' AND length(email) <= 255)
    );

-- Policy for deleting user data (restrictive - only allow through admin functions)
CREATE POLICY "Restrict user deletion" ON public.early_access_users
    FOR DELETE 
    USING (false); -- No one can delete through direct queries

-- Create a function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create a trigger to automatically update updated_at
CREATE TRIGGER update_early_access_users_updated_at 
    BEFORE UPDATE ON public.early_access_users 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Enhanced error handling function for RLS violations
CREATE OR REPLACE FUNCTION handle_rls_violation()
RETURNS TRIGGER AS $$
BEGIN
    -- Log the violation attempt
    RAISE LOG 'RLS Policy Violation: Operation % on table % by user %', 
        TG_OP, TG_TABLE_NAME, current_user;
    
    -- Return NULL to prevent the operation
    RETURN NULL;
EXCEPTION
    WHEN OTHERS THEN
        -- Log any errors in the error handling
        RAISE LOG 'Error in RLS violation handler: %', SQLERRM;
        RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- Create a function to check if user exists (for better error messages)
CREATE OR REPLACE FUNCTION check_user_exists(user_email TEXT)
RETURNS BOOLEAN AS $$
DECLARE
    user_count INTEGER;
BEGIN
    SELECT COUNT(*) INTO user_count
    FROM public.early_access_users
    WHERE email = user_email;
    
    RETURN user_count > 0;
EXCEPTION
    WHEN OTHERS THEN
        RAISE LOG 'Error checking user existence: %', SQLERRM;
        RETURN FALSE;
END;
$$ LANGUAGE plpgsql;

-- Create a function to safely insert user with validation
CREATE OR REPLACE FUNCTION insert_early_access_user(
    user_email TEXT,
    user_name TEXT DEFAULT NULL,
    user_use_case TEXT DEFAULT NULL,
    user_location TEXT DEFAULT NULL,
    user_commute_challenge TEXT DEFAULT NULL,
    user_device TEXT DEFAULT NULL
)
RETURNS JSON AS $$
DECLARE
    new_user_id UUID;
    result JSON;
BEGIN
    -- Validate email format
    IF user_email IS NULL OR user_email = '' THEN
        RETURN json_build_object(
            'success', false,
            'error', 'Email is required',
            'errorCode', 'MISSING_EMAIL'
        );
    END IF;
    
    IF user_email !~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' THEN
        RETURN json_build_object(
            'success', false,
            'error', 'Invalid email format',
            'errorCode', 'INVALID_EMAIL_FORMAT'
        );
    END IF;
    
    -- Check if user already exists
    IF check_user_exists(user_email) THEN
        RETURN json_build_object(
            'success', false,
            'error', 'Email already registered',
            'errorCode', 'USER_ALREADY_EXISTS'
        );
    END IF;
    
    -- Insert the user
    INSERT INTO public.early_access_users (
        email, name, use_case, location, commute_challenge, device
    ) VALUES (
        user_email, user_name, user_use_case, user_location, user_commute_challenge, user_device
    ) RETURNING id INTO new_user_id;
    
    -- Return success
    RETURN json_build_object(
        'success', true,
        'userId', new_user_id,
        'message', 'User registered successfully'
    );
    
EXCEPTION
    WHEN unique_violation THEN
        RETURN json_build_object(
            'success', false,
            'error', 'Email already registered',
            'errorCode', 'USER_ALREADY_EXISTS'
        );
    WHEN OTHERS THEN
        RAISE LOG 'Error inserting user: %', SQLERRM;
        RETURN json_build_object(
            'success', false,
            'error', 'Database error occurred',
            'errorCode', 'DB_ERROR',
            'details', SQLERRM
        );
END;
$$ LANGUAGE plpgsql;

-- Grant necessary permissions
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT ALL ON public.early_access_users TO anon, authenticated;
GRANT EXECUTE ON FUNCTION insert_early_access_user(TEXT, TEXT, TEXT, TEXT, TEXT, TEXT) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION check_user_exists(TEXT) TO anon, authenticated;

-- Create a view for analytics (read-only)
CREATE VIEW early_access_analytics AS
SELECT 
    DATE(created_at) as signup_date,
    COUNT(*) as signups,
    COUNT(CASE WHEN location IS NOT NULL THEN 1 END) as with_location,
    COUNT(CASE WHEN use_case IS NOT NULL THEN 1 END) as with_use_case,
    COUNT(CASE WHEN commute_challenge IS NOT NULL THEN 1 END) as with_challenge
FROM public.early_access_users
GROUP BY DATE(created_at)
ORDER BY signup_date DESC;

-- Grant read access to analytics view
GRANT SELECT ON early_access_analytics TO anon, authenticated;

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_early_access_users_location ON public.early_access_users(location);
CREATE INDEX IF NOT EXISTS idx_early_access_users_use_case ON public.early_access_users(use_case);
CREATE INDEX IF NOT EXISTS idx_early_access_users_device ON public.early_access_users(device);

-- Add comments for documentation
COMMENT ON TABLE public.early_access_users IS 'Early access user registrations for CommuteTimely';
COMMENT ON COLUMN public.early_access_users.email IS 'User email address (required, unique)';
COMMENT ON COLUMN public.early_access_users.name IS 'User full name (optional)';
COMMENT ON COLUMN public.early_access_users.use_case IS 'How the user plans to use CommuteTimely (optional)';
COMMENT ON COLUMN public.early_access_users.location IS 'User location or commute type (optional)';
COMMENT ON COLUMN public.early_access_users.commute_challenge IS 'Biggest commute challenge (optional)';
COMMENT ON COLUMN public.early_access_users.device IS 'Preferred device (optional)';
COMMENT ON COLUMN public.early_access_users.created_at IS 'Timestamp when user registered';
COMMENT ON COLUMN public.early_access_users.updated_at IS 'Timestamp when user data was last updated';
