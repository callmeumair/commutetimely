# API Debugging Guide - Fixing "Empty Response from Server" Errors

## Overview

This guide documents the fixes implemented to resolve "Empty response from server" errors in your Next.js API routes. The main issues were:

1. **Silent failures** - API routes could fail without sending a response
2. **Missing error handling** - Unhandled exceptions caused requests to hang
3. **Database connection issues** - Supabase client could be null without proper validation
4. **Poor logging** - Difficult to debug when things went wrong

## What Was Fixed

### 1. Enhanced Error Handling

- **Guaranteed responses**: Every request now returns a valid JSON response
- **Comprehensive try-catch**: All operations are wrapped in error handling
- **Structured error responses**: Consistent error format with error codes and details
- **Method validation**: All HTTP methods are handled with appropriate responses

### 2. Database Connection Validation

- **Environment variable validation**: Checks for required Supabase configuration
- **Connection testing**: Health check endpoint to verify database connectivity
- **Graceful degradation**: Clear error messages when database is unavailable

### 3. Request Validation

- **Input sanitization**: All user inputs are validated and sanitized
- **JSON parsing safety**: Robust handling of malformed request bodies
- **Field validation**: Required fields are checked before processing

### 4. Enhanced Logging

- **Structured logging**: Consistent log format with context
- **Performance monitoring**: Request processing time tracking
- **Database operation logging**: All database queries are logged
- **Error categorization**: Different log levels for different types of issues

## New API Endpoints

### Health Check: `/api/health`

Use this endpoint to diagnose server and database issues:

```bash
curl http://localhost:3000/api/health
```

**Response examples:**

**Healthy server:**
```json
{
  "success": true,
  "status": "healthy",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "processingTimeMs": 45,
  "checks": {
    "server": { "status": "healthy", "uptime": 3600 },
    "database": { "status": "healthy", "connectionTest": "success" }
  }
}
```

**Database issues:**
```json
{
  "success": false,
  "status": "degraded",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "processingTimeMs": 120,
  "checks": {
    "server": { "status": "healthy" },
    "database": { 
      "status": "error", 
      "error": "Connection timeout",
      "code": "CONNECTION_ERROR"
    }
  }
}
```

## Debugging Steps

### 1. Check Server Logs

Look for structured log messages in your console:

```
[2024-01-01T00:00:00.000Z] INFO: API Request | {"method":"POST","url":"/api/early-access","bodySize":156}
[2024-01-01T00:00:00.000Z] DEBUG: Database Operation | {"operation":"SELECT","table":"early_access_users","email":"user@example.com"}
[2024-01-01T00:00:00.000Z] INFO: API Response | {"status":200,"responseTimeMs":45,"bodySize":89}
```

### 2. Test Health Endpoint

```bash
# Test server health
curl http://localhost:3000/api/health

# Test with verbose output
curl -v http://localhost:3000/api/health
```

### 3. Check Environment Variables

Ensure these are set in your `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Monitor Network Tab

In browser DevTools:
- Check if requests are being made
- Look for response status codes
- Verify response body content

### 5. Database Connection Test

```bash
# Test Supabase connection directly
curl -X POST https://your-project.supabase.co/rest/v1/early_access_users \
  -H "apikey: your_anon_key" \
  -H "Authorization: Bearer your_anon_key" \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'
```

## Common Error Codes

| Error Code | Description | Solution |
|------------|-------------|----------|
| `SUPABASE_NOT_CONFIGURED` | Missing environment variables | Check `.env.local` file |
| `EMPTY_BODY` | Request body is empty | Verify request payload |
| `INVALID_JSON` | Malformed JSON in request | Check request format |
| `MISSING_EMAIL` | Email field is missing | Ensure email is provided |
| `INVALID_EMAIL_FORMAT` | Invalid email format | Validate email format |
| `DB_CHECK_ERROR` | Database query failed | Check database connection |
| `DB_INSERT_ERROR` | Database insert failed | Verify table schema |
| `USER_ALREADY_EXISTS` | Email already registered | Handle duplicate gracefully |
| `METHOD_NOT_ALLOWED` | Wrong HTTP method | Use POST for early access |

## Performance Monitoring

The API now tracks:

- **Request processing time**: Total time from start to response
- **Database operation timing**: Individual query performance
- **Memory usage**: Server resource consumption
- **Uptime**: Server availability

## Testing the Fixes

### 1. Test Valid Request

```bash
curl -X POST http://localhost:3000/api/early-access \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","name":"Test User"}'
```

**Expected response:**
```json
{
  "success": true,
  "message": "Thank you for joining our early access list!",
  "userId": "generated-id",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "processingTimeMs": 45
}
```

### 2. Test Invalid Request

```bash
curl -X POST http://localhost:3000/api/early-access \
  -H "Content-Type: application/json" \
  -d '{"email":"invalid-email"}'
```

**Expected response:**
```json
{
  "success": false,
  "error": "Valid email format is required",
  "errorCode": "INVALID_EMAIL_FORMAT",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "details": {
    "errorCode": "INVALID_EMAIL_FORMAT",
    "receivedEmail": "invalid-email"
  }
}
```

### 3. Test Database Issues

Temporarily break your database connection and test:

```bash
curl -X POST http://localhost:3000/api/early-access \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'
```

**Expected response:**
```json
{
  "success": false,
  "error": "Database not configured. Please contact support.",
  "errorCode": "SUPABASE_NOT_CONFIGURED",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## Prevention Measures

### 1. Environment Validation

The API now validates environment variables on startup:

```typescript
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables');
}
```

### 2. Request Timeout Protection

While we removed the complex timeout wrapper due to TypeScript issues, the API still handles:

- JSON parsing timeouts
- Database operation failures
- Network connection issues

### 3. Comprehensive Error Handling

Every possible failure point now has:

- Specific error messages
- Error codes for debugging
- Timestamps for tracking
- Processing time metrics

## Monitoring and Alerts

### 1. Log Analysis

Monitor these log patterns:

- **High error rates**: Look for `ERROR` and `CRITICAL` logs
- **Slow responses**: Check `processingTimeMs` values
- **Database failures**: Monitor `databaseError` logs

### 2. Health Check Monitoring

Set up monitoring for `/api/health`:

- **Response time**: Should be < 100ms
- **Status**: Should return 200 for healthy
- **Database status**: Should show "healthy"

### 3. Performance Thresholds

Alert on:

- Response times > 5 seconds
- Error rates > 5%
- Database connection failures
- Memory usage > 80%

## Troubleshooting Checklist

- [ ] Check server logs for error messages
- [ ] Verify environment variables are set
- [ ] Test health endpoint for server status
- [ ] Confirm database connectivity
- [ ] Validate request payload format
- [ ] Check network connectivity
- [ ] Monitor server resources
- [ ] Review error codes and messages

## Support

If you continue to experience issues:

1. **Check logs first**: Look for structured error messages
2. **Test health endpoint**: Verify server and database status
3. **Validate environment**: Ensure all required variables are set
4. **Check database**: Verify Supabase project is active
5. **Review network**: Ensure no firewall or proxy issues

The enhanced logging should now provide clear information about what's failing and why.
