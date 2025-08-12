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

-- Create a policy that allows inserting new users
CREATE POLICY "Allow users to insert their own data" ON public.early_access_users
    FOR INSERT WITH CHECK (true);

-- Create a policy that allows users to view their own data
CREATE POLICY "Allow users to view their own data" ON public.early_access_users
    FOR SELECT USING (true);

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

-- Grant necessary permissions
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT ALL ON public.early_access_users TO anon, authenticated;
GRANT USAGE, SELECT ON SEQUENCE public.early_access_users_id_seq TO anon, authenticated;
