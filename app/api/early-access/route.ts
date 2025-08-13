import { NextRequest, NextResponse } from 'next/server';
import { isSupabaseConfigured, dbOperations } from '@/lib/supabase';
import { logger } from '@/lib/logger';

// Helper function to create consistent response headers
const createResponseHeaders = () => ({
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json',
});

// Helper function to create error response
const createErrorResponse = (message: string, status: number = 500, details?: any) => {
  logger.error(`API Error [${status}]: ${message}`, details);
  return NextResponse.json(
    { 
      success: false,
      error: message,
      timestamp: new Date().toISOString(),
      ...(details && { details })
    },
    { 
      status,
      headers: createResponseHeaders()
    }
  );
};

// Helper function to create success response
const createSuccessResponse = (data: any, status: number = 200) => {
  logger.info('API Success', data);
  return NextResponse.json(
    { 
      success: true,
      ...data,
      timestamp: new Date().toISOString()
    },
    { 
      status,
      headers: createResponseHeaders()
    }
  );
};

export async function POST(request: NextRequest) {
  const startTime = Date.now();
  
  try {
    // Log the incoming request
    logger.apiRequest(request.method, request.url, Object.fromEntries(request.headers.entries()));
    
    // Check if Supabase is configured with enhanced error reporting
    if (!isSupabaseConfigured()) {
      // Get detailed configuration status
      const configStatus = {
        hasUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
        hasKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        urlLength: process.env.NEXT_PUBLIC_SUPABASE_URL?.length || 0,
        keyLength: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.length || 0,
        urlFormat: process.env.NEXT_PUBLIC_SUPABASE_URL?.startsWith('https://') && process.env.NEXT_PUBLIC_SUPABASE_URL?.includes('.supabase.co'),
        keyFormat: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.startsWith('eyJ')
      };
      
      logger.error('Supabase configuration check failed', configStatus);
      
      return createErrorResponse(
        'Database not configured. Please check environment variables and contact support.',
        500,
        { 
          errorCode: 'SUPABASE_NOT_CONFIGURED',
          configStatus,
          instructions: 'Ensure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are properly set in .env.local'
        }
      );
    }

    // Test database connectivity first with enhanced error reporting
    const connectionTest = await dbOperations.testConnection();
    if (!connectionTest.connected) {
      logger.error('Database connection test failed', {
        error: connectionTest.error,
        latency: connectionTest.latency,
        timestamp: new Date().toISOString()
      });
      
      return createErrorResponse(
        'Database connection failed. Please try again later.',
        503,
        { 
          errorCode: 'DB_CONNECTION_FAILED',
          details: connectionTest.error,
          latency: connectionTest.latency,
          suggestions: [
            'Check if Supabase service is running',
            'Verify network connectivity',
            'Check RLS policies and table permissions'
          ]
        }
      );
    }

    // Parse request body
    let requestBody;
    try {
      const bodyText = await request.text();
      
      if (!bodyText || bodyText.trim() === '') {
        return createErrorResponse(
          'Request body is empty or missing',
          400,
          { errorCode: 'EMPTY_BODY' }
        );
      }
      
      requestBody = JSON.parse(bodyText);
      logger.debug('Parsed request body', { bodySize: bodyText.length });
    } catch (parseError) {
      return createErrorResponse(
        'Invalid JSON in request body',
        400,
        { 
          errorCode: 'INVALID_JSON',
          parseError: parseError instanceof Error ? parseError.message : 'Unknown parse error'
        }
      );
    }

    // Validate required fields
    const { email, name, useCase, location, commuteChallenge, device } = requestBody;
    
    if (!email || typeof email !== 'string' || email.trim() === '') {
      return createErrorResponse(
        'Email is required and must be a non-empty string',
        400,
        { errorCode: 'MISSING_EMAIL', receivedEmail: email }
      );
    }

    if (!email.includes('@') || email.length < 5) {
      return createErrorResponse(
        'Valid email format is required',
        400,
        { errorCode: 'INVALID_EMAIL_FORMAT', receivedEmail: email }
      );
    }

    // Sanitize and validate optional fields
    const sanitizedData = {
      email: email.trim().toLowerCase(),
      name: name && typeof name === 'string' ? name.trim() : undefined,
      use_case: useCase && typeof useCase === 'string' ? useCase.trim() : undefined,
      location: location && typeof location === 'string' ? location.trim() : undefined,
      commute_challenge: commuteChallenge && typeof commuteChallenge === 'string' ? commuteChallenge.trim() : undefined,
      device: device && typeof device === 'string' ? device.trim() : undefined,
    };

    logger.debug('Sanitized data', { email: sanitizedData.email, hasOptionalFields: !!sanitizedData.name || !!sanitizedData.use_case });

    // Check for existing user using enhanced database operations
    logger.databaseOperation('SELECT', 'early_access_users', { email: sanitizedData.email });
    const userExistsCheck = await dbOperations.checkUserExists(sanitizedData.email);
    
    if (!userExistsCheck.exists && userExistsCheck.error) {
      // This could be an RLS policy issue or database error
      logger.error('Error checking existing user', userExistsCheck);
      
      // Check if it's an RLS policy issue
      if (userExistsCheck.error.includes('permission denied') || userExistsCheck.error.includes('RLS')) {
        return createErrorResponse(
          'Access denied. Please check your permissions.',
          403,
          { 
            errorCode: 'RLS_POLICY_DENIED',
            details: 'Row Level Security policy blocked the request'
          }
        );
      }
      
      return createErrorResponse(
        'Failed to check existing user',
        500,
        { 
          errorCode: 'DB_CHECK_ERROR',
          details: userExistsCheck.error
        }
      );
    }

    if (userExistsCheck.exists) {
      logger.info('User already exists', { email: sanitizedData.email });
      return createErrorResponse(
        'Email already registered for early access',
        409,
        { errorCode: 'USER_ALREADY_EXISTS' }
      );
    }

    // Insert new user using enhanced database operations
    logger.databaseOperation('INSERT', 'early_access_users', { email: sanitizedData.email });
    const insertResult = await dbOperations.insertUser(sanitizedData);
    
    if (!insertResult.user) {
      logger.error('Failed to insert user', insertResult);
      
      // Check for specific database errors
      if (insertResult.error?.includes('permission denied') || insertResult.error?.includes('RLS')) {
        return createErrorResponse(
          'Access denied. Please check your permissions.',
          403,
          { 
            errorCode: 'RLS_POLICY_DENIED',
            details: 'Row Level Security policy blocked the insert operation'
          }
        );
      }
      
      if (insertResult.error?.includes('duplicate key') || insertResult.error?.includes('unique constraint')) {
        return createErrorResponse(
          'Email already registered for early access',
          409,
          { 
            errorCode: 'USER_ALREADY_EXISTS',
            details: 'Duplicate email detected during insert'
          }
        );
      }
      
      return createErrorResponse(
        'Failed to save user data',
        500,
        { 
          errorCode: 'DB_INSERT_ERROR',
          details: insertResult.error
        }
      );
    }

    // Log successful submission
    const processingTime = Date.now() - startTime;
    logger.performance('Early Access API', processingTime, { 
      operation: 'user_registration',
      userId: insertResult.user.id,
      email: insertResult.user.email,
      dbLatency: connectionTest.latency
    });

    const response = createSuccessResponse({
      message: 'Thank you for joining our early access list!',
      userId: insertResult.user.id,
      processingTimeMs: processingTime,
      dbLatency: connectionTest.latency
    });

    logger.apiResponse(200, processingTime, { 
      userId: insertResult.user.id, 
      email: insertResult.user.email,
      dbLatency: connectionTest.latency
    });
    
    return response;

  } catch (error) {
    const processingTime = Date.now() - startTime;
    logger.critical('Early Access API Critical Error', {
      processingTimeMs: processingTime,
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : 'No stack trace'
    });
    
    // Always return a valid JSON response, never let the request hang
    const errorResponse = {
      success: false,
      error: 'Internal server error',
      errorCode: 'UNEXPECTED_ERROR',
      timestamp: new Date().toISOString(),
      processingTimeMs: processingTime,
      details: error instanceof Error ? error.message : 'Unknown error occurred'
    };
    
    logger.apiResponse(500, processingTime, errorResponse);
    return NextResponse.json(errorResponse, { 
      status: 500,
      headers: createResponseHeaders()
    });
  }
}

// Handle OPTIONS request for CORS preflight
export async function OPTIONS() {
  logger.info('CORS preflight request received');
  return new NextResponse(null, {
    status: 200,
    headers: createResponseHeaders(),
  });
}

// Handle unsupported methods
export async function GET() {
  return createErrorResponse(
    'Method not allowed. Use POST to submit early access request.',
    405,
    { errorCode: 'METHOD_NOT_ALLOWED' }
  );
}

export async function PUT() {
  return createErrorResponse(
    'Method not allowed. Use POST to submit early access request.',
    405,
    { errorCode: 'METHOD_NOT_ALLOWED' }
  );
}

export async function DELETE() {
  return createErrorResponse(
    'Method not allowed. Use POST to submit early access request.',
    405,
    { errorCode: 'METHOD_NOT_ALLOWED' }
  );
}
