import { NextRequest, NextResponse } from 'next/server';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { logger } from '@/lib/logger';

// Request timeout in milliseconds
const REQUEST_TIMEOUT = 30000; // 30 seconds

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
    
    // Check if Supabase is configured
    if (!isSupabaseConfigured()) {
      return createErrorResponse(
        'Database not configured. Please contact support.',
        500,
        { errorCode: 'SUPABASE_NOT_CONFIGURED' }
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
      name: name && typeof name === 'string' ? name.trim() : null,
      useCase: useCase && typeof useCase === 'string' ? useCase.trim() : null,
      location: location && typeof location === 'string' ? location.trim() : null,
      commuteChallenge: commuteChallenge && typeof commuteChallenge === 'string' ? commuteChallenge.trim() : null,
      device: device && typeof device === 'string' ? device.trim() : null,
    };

    logger.debug('Sanitized data', { email: sanitizedData.email, hasOptionalFields: !!sanitizedData.name || !!sanitizedData.useCase });

    // Check for existing user
    logger.databaseOperation('SELECT', 'early_access_users', { email: sanitizedData.email });
    let existingUser;
    try {
      const { data, error } = await supabase!
        .from('early_access_users')
        .select('email')
        .eq('email', sanitizedData.email)
        .single();

      if (error && error.code !== 'PGRST116') { // PGRST116 = no rows returned
        logger.databaseError(error, 'SELECT', 'early_access_users');
        return createErrorResponse(
          'Failed to check existing user',
          500,
          { 
            errorCode: 'DB_CHECK_ERROR',
            dbError: error.message,
            dbCode: error.code
          }
        );
      }

      existingUser = data;
    } catch (dbError) {
      logger.databaseError(dbError, 'SELECT', 'early_access_users');
      return createErrorResponse(
        'Database operation failed while checking existing user',
        500,
        { 
          errorCode: 'DB_UNEXPECTED_ERROR',
          dbError: dbError instanceof Error ? dbError.message : 'Unknown database error'
        }
      );
    }

    if (existingUser) {
      logger.info('User already exists', { email: sanitizedData.email });
      return createErrorResponse(
        'Email already registered for early access',
        409,
        { errorCode: 'USER_ALREADY_EXISTS' }
      );
    }

    // Insert new user
    logger.databaseOperation('INSERT', 'early_access_users', { email: sanitizedData.email });
    let newUser;
    try {
      const { data, error } = await supabase!
        .from('early_access_users')
        .insert([{
          email: sanitizedData.email,
          name: sanitizedData.name,
          use_case: sanitizedData.useCase,
          location: sanitizedData.location,
          commute_challenge: sanitizedData.commuteChallenge,
          device: sanitizedData.device,
        }])
        .select()
        .single();

      if (error) {
        logger.databaseError(error, 'INSERT', 'early_access_users');
        return createErrorResponse(
          'Failed to save user data',
          500,
          { 
            errorCode: 'DB_INSERT_ERROR',
            dbError: error.message,
            dbCode: error.code
          }
        );
      }

      newUser = data;
    } catch (dbError) {
      logger.databaseError(dbError, 'INSERT', 'early_access_users');
      return createErrorResponse(
        'Database operation failed while inserting user',
        500,
        { 
          errorCode: 'DB_UNEXPECTED_ERROR',
          dbError: dbError instanceof Error ? dbError.message : 'Unknown database error'
        }
      );
    }

    // Log successful submission
    const processingTime = Date.now() - startTime;
    logger.performance('Early Access API', processingTime, { 
      operation: 'user_registration',
      userId: newUser.id,
      email: newUser.email
    });

    const response = createSuccessResponse({
      message: 'Thank you for joining our early access list!',
      userId: newUser.id,
      processingTimeMs: processingTime
    });

    logger.apiResponse(200, processingTime, { userId: newUser.id, email: newUser.email });
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
