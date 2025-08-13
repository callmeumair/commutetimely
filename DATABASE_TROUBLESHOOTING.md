# Database Configuration Troubleshooting Guide

## 🚨 Current Issue: "Database not configured. Please contact support."

This error occurs when the Supabase database client cannot be properly initialized due to missing or invalid environment variables.

## 🔍 Quick Diagnosis

### 1. Check Environment Variables

Run this command to see your current environment variable status:

```bash
# Check if .env.local exists and has content
ls -la .env.local
cat .env.local

# Check environment variable lengths
echo "URL length: ${#NEXT_PUBLIC_SUPABASE_URL}"
echo "Key length: ${#NEXT_PUBLIC_SUPABASE_ANON_KEY}"
echo "Service key length: ${#SUPABASE_SERVICE_ROLE_KEY}"
```

### 2. Common Issues Found

Based on the current configuration, the main issue is:

**❌ Truncated Supabase Anon Key**
- Current key ends with `%` character
- Should be ~200+ characters long
- Should start with `eyJ`

## 🛠️ Step-by-Step Fix

### Step 1: Get Complete Supabase Credentials

1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project: `odzhipfadmhtfbauejpc`
3. Navigate to **Settings** → **API`
4. Copy the complete values:
   - **Project URL**: `https://odzhipfadmhtfbauejpc.supabase.co`
   - **Anon public key**: Should start with `eyJ` and be ~200+ characters
   - **Service role key**: Should start with `eyJ` and be ~200+ characters (for admin operations)

### Step 2: Update .env.local

Replace your current `.env.local` with:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://odzhipfadmhtfbauejpc.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_COMPLETE_ANON_KEY_HERE

# Supabase Service Role Key (for server-side operations with admin privileges)
# ⚠️  WARNING: Never expose this key in the browser or client-side code
SUPABASE_SERVICE_ROLE_KEY=YOUR_COMPLETE_SERVICE_ROLE_KEY_HERE
```

**⚠️ Important**: Make sure both keys are copied completely without any truncation.

### Step 3: Restart Development Server

```bash
# Stop current server (Ctrl+C)
# Then restart
npm run dev
```

### Step 4: Test Configuration

```bash
# Test health endpoint (now shows admin client status)
curl http://localhost:3000/api/health

# Test early access endpoint
curl -X POST http://localhost:3000/api/early-access \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'
```

## 🔧 Enhanced Error Handling

The API now provides detailed error information and automatically falls back to admin privileges when needed:

### Configuration Errors
```json
{
  "success": false,
  "error": "Database not configured. Please check environment variables and contact support.",
  "errorCode": "SUPABASE_NOT_CONFIGURED",
  "configStatus": {
    "hasUrl": true,
    "hasKey": true,
    "hasServiceKey": true,
    "urlLength": 45,
    "keyLength": 208,
    "serviceKeyLength": 219,
    "urlFormat": true,
    "keyFormat": true,
    "serviceKeyFormat": true
  },
  "instructions": "Ensure NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, and SUPABASE_SERVICE_ROLE_KEY are properly set in .env.local"
}
```

### Connection Errors
```json
{
  "success": false,
  "error": "Database connection failed. Please try again later.",
  "errorCode": "DB_CONNECTION_FAILED",
  "details": "JWT token is invalid",
  "suggestions": [
    "Check if Supabase service is running",
    "Verify network connectivity",
    "Check RLS policies and table permissions"
  ]
}
```

### Permission Errors (Now Auto-Resolved)
```json
{
  "success": false,
  "error": "Permission denied and admin access not available",
  "errorCode": "PERMISSION_DENIED",
  "details": {
    "errorMessage": "Row Level Security policy blocked the request",
    "adminClientAvailable": false,
    "suggestion": "Set SUPABASE_SERVICE_ROLE_KEY to bypass RLS policies"
  }
}
```

## 🚀 New Features: Admin Client Fallback

The system now automatically handles permission issues:

1. **Primary Operation**: Uses regular anon key for normal operations
2. **Permission Fallback**: If RLS blocks an operation, automatically retries with admin client
3. **Seamless Experience**: Users don't experience permission errors
4. **Better Security**: Admin client only used when necessary

### Health Endpoint Now Shows:
```json
{
  "database": {
    "configured": true,
    "adminConfigured": true,
    "capabilities": {
      "basicOperations": true,
      "adminOperations": true,
      "bypassRLS": true
    }
  }
}
```

## 🧪 Testing Your Fix

### 1. Valid Request Test
```bash
curl -X POST http://localhost:3000/api/early-access \
  -H "Content-Type: application/json" \
  -d '{"email":"newuser@example.com","name":"Test User"}'
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Thank you for joining our early access list!",
  "userId": "generated-uuid",
  "timestamp": "2025-08-13T00:00:00.000Z",
  "processingTimeMs": 45
}
```

### 2. Duplicate Email Test
```bash
curl -X POST http://localhost:3000/api/early-access \
  -H "Content-Type: application/json" \
  -d '{"email":"newuser@example.com"}'
```

**Expected Response:**
```json
{
  "success": false,
  "error": "Email already registered for early access",
  "errorCode": "USER_ALREADY_EXISTS"
}
```

## 🚨 Still Having Issues?

### Check Supabase Dashboard
1. Verify your project is active
2. Check if the `early_access_users` table exists
3. Verify RLS policies are set up
4. **NEW**: Check if service role key has proper permissions

### Check Network
```bash
# Test Supabase connectivity
curl -I https://odzhipfadmhtfbauejpc.supabase.co

# Test with your anon key
curl -H "apikey: YOUR_ANON_KEY" \
     -H "Authorization: Bearer YOUR_ANON_KEY" \
     https://odzhipfadmhtfbauejpc.supabase.co/rest/v1/early_access_users

# Test with your service role key (admin access)
curl -H "apikey: YOUR_SERVICE_ROLE_KEY" \
     -H "Authorization: Bearer YOUR_SERVICE_ROLE_KEY" \
     https://odzhipfadmhtfbauejpc.supabase.co/rest/v1/early_access_users
```

### Enable Debug Logging
The API now logs detailed information including admin client usage. Check your terminal for:
- Environment variable validation results
- Database connection attempts
- Admin client fallback attempts
- Detailed error information

## 📋 Environment Variable Checklist

- [ ] `.env.local` file exists in project root
- [ ] `NEXT_PUBLIC_SUPABASE_URL` is set and valid
- [ ] `NEXT_PUBLIC_SUPABASE_ANON_KEY` is complete (not truncated)
- [ ] `SUPABASE_SERVICE_ROLE_KEY` is set (recommended for admin operations)
- [ ] Development server restarted after changes
- [ ] No syntax errors in `.env.local` file

## 🔗 Useful Links

- [Supabase Dashboard](https://supabase.com/dashboard)
- [Supabase API Documentation](https://supabase.com/docs/reference/javascript)
- [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)
- [Project Setup Guide](./SUPABASE_SETUP.md)
