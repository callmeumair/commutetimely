# Supabase Setup Guide for CommuteTimely

This guide will help you connect your CommuteTimely project to Supabase for database functionality.

## 🚀 Quick Start

### 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign up/login
2. Click "New Project"
3. Choose your organization
4. Enter project details:
   - **Name**: `commutetimely`
   - **Database Password**: Choose a strong password
   - **Region**: Select closest to your users
5. Click "Create new project"

### 2. Get Your Project Credentials

1. In your Supabase dashboard, go to **Settings** → **API**
2. Copy the following values:
   - **Project URL** (e.g., `https://your-project.supabase.co`)
   - **Anon public key** (starts with `eyJ...`)

### 3. Set Up Environment Variables

1. Create a `.env.local` file in your project root
2. Add your Supabase credentials:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

### 4. Set Up the Database

1. In your Supabase dashboard, go to **SQL Editor**
2. Copy the contents of `supabase-schema.sql`
3. Paste and run the SQL commands
4. Verify the table was created in **Table Editor**

### 5. Test the Integration

1. Start your development server: `npm run dev`
2. Click "Get Early Access" button
3. Fill out the form and submit
4. Check your Supabase dashboard → **Table Editor** → **early_access_users**

## 📊 Database Schema

The `early_access_users` table includes:

- **id**: Unique identifier (UUID)
- **email**: User's email address (required, unique)
- **name**: User's name (optional)
- **use_case**: How they'll use CommuteTimely (optional)
- **location**: User's location/commute type (optional)
- **commute_challenge**: Biggest commute challenge (optional)
- **device**: Preferred device (optional)
- **created_at**: When they joined (auto-generated)
- **updated_at**: Last update timestamp (auto-updated)

## 🔒 Security Features

- **Row Level Security (RLS)** enabled
- **Email uniqueness** enforced
- **Input validation** on both frontend and backend
- **Proper error handling** for duplicate emails

## 🚨 Troubleshooting

### Common Issues

1. **"Missing Supabase environment variables"**
   - Check your `.env.local` file exists
   - Verify variable names are correct
   - Restart your development server

2. **"Failed to save user data"**
   - Check Supabase table exists
   - Verify RLS policies are set up
   - Check browser console for detailed errors

3. **"Email already registered"**
   - This is expected behavior
   - Users can't register the same email twice

### Debug Mode

To see detailed logs, check:
- Browser console (frontend errors)
- Terminal/server logs (backend errors)
- Supabase dashboard → **Logs**

## 🔄 Next Steps

After setup, consider:

1. **Email Service Integration**
   - Connect to Mailchimp, ConvertKit, etc.
   - Send welcome emails
   - Set up email campaigns

2. **Analytics Dashboard**
   - Track signup trends
   - Monitor user demographics
   - Analyze commute challenges

3. **Admin Panel**
   - View all early access users
   - Export data for marketing
   - Manage user communications

## 📞 Support

If you encounter issues:
1. Check Supabase documentation
2. Review error logs
3. Verify environment variables
4. Test with a simple form submission

---

**Happy coding! 🚀**
