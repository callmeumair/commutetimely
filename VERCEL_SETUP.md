# Vercel Environment Variables Setup Guide

## Issue Description
The "Database not available" error occurs because the `DATABASE_URL` environment variable is not set in the Vercel production environment. While it works locally (`.env.local`), Vercel needs these variables to be configured in their dashboard.

## Solution: Set Environment Variables in Vercel

### Step 1: Access Vercel Dashboard
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your `commutetimely` project
3. Click on the "Settings" tab

### Step 2: Configure Environment Variables
1. In the left sidebar, click "Environment Variables"
2. Add the following environment variables:

#### Required Variables:
| Name | Value | Environment |
|------|-------|-------------|
| `DATABASE_URL` | `postgresql://neondb_owner:npg_cFVvilzJ0E5s@ep-calm-art-a2bucst9-pooler.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require` | Production, Preview, Development |
| `NODE_ENV` | `production` | Production |
| `NEXT_PUBLIC_APP_URL` | `https://commutetimely.vercel.app` | Production, Preview, Development |

### Step 3: Redeploy
1. After adding environment variables, go to "Deployments"
2. Click "Redeploy" on your latest deployment
3. Or push a new commit to trigger automatic deployment

## Alternative: Use Vercel CLI

If you prefer command line:

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Add environment variables
vercel env add DATABASE_URL production
vercel env add NODE_ENV production
vercel env add NEXT_PUBLIC_APP_URL production

# Redeploy
vercel --prod
```

## Verification

After setting up environment variables:

1. **Check Health Endpoint**: Visit `/api/health` to see environment info
2. **Test Form Submission**: Try submitting the early access form again
3. **Check Vercel Logs**: Monitor function logs for any remaining errors

## Troubleshooting

### Common Issues:
1. **Environment Variable Not Set**: Ensure `DATABASE_URL` is set for all environments
2. **Wrong Environment**: Make sure variables are set for "Production" environment
3. **Redeploy Required**: Environment variable changes require redeployment
4. **Case Sensitivity**: Environment variable names are case-sensitive

### Debug Steps:
1. Check `/api/health` endpoint for environment info
2. Review Vercel function logs
3. Verify Neon database is active and accessible
4. Test database connection locally with `npm run db:test`

## Security Notes

- Never commit `.env.local` to version control
- Use Vercel's built-in environment variable management
- Consider using Vercel's integration with Neon for automatic setup
- Rotate database credentials regularly

## Next Steps

1. Set environment variables in Vercel dashboard
2. Redeploy the application
3. Test the early access form
4. Monitor logs for any remaining issues

## Support

If issues persist:
1. Check Vercel function logs
2. Verify Neon database status
3. Test database connection locally
4. Review this guide again
