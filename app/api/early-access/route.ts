import { NextRequest, NextResponse } from 'next/server';
import { DatabaseOperations } from '@/lib/db-operations';

// Helper function to create consistent response headers
const createResponseHeaders = () => ({
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS, GET',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json',
});

// Helper function to create error response
const createErrorResponse = (message: string, status: number = 500, details?: any) => {
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

// Check if database is available
const isDatabaseAvailable = () => {
  return !!process.env.DATABASE_URL;
};

// POST: Create new early access user
export async function POST(request: NextRequest) {
  try {
    // Check if database is available
    if (!isDatabaseAvailable()) {
      return createErrorResponse(
        'Database not available',
        503,
        { errorCode: 'DATABASE_UNAVAILABLE' }
      );
    }

    // Initialize database (create table if it doesn't exist)
    const initResult = await DatabaseOperations.initializeDatabase();
    if (!initResult.success) {
      return createErrorResponse(
        'Database initialization failed',
        500,
        { errorCode: 'DB_INIT_ERROR', details: initResult.error }
      );
    }

    // Parse request body
    const body = await request.json();
    const { email, name, useCase, location, commuteChallenge, device } = body;
    
    // Validate required fields
    if (!email || typeof email !== 'string' || email.trim() === '') {
      return createErrorResponse(
        'Email is required and must be a non-empty string',
        400,
        { errorCode: 'MISSING_EMAIL' }
      );
    }

    if (!email.includes('@') || email.length < 5) {
      return createErrorResponse(
        'Valid email format is required',
        400,
        { errorCode: 'INVALID_EMAIL_FORMAT' }
      );
    }

    // Sanitize and prepare data
    const userData = {
      email: email.trim().toLowerCase(),
      name: name && typeof name === 'string' ? name.trim() : undefined,
      useCase: useCase && typeof useCase === 'string' ? useCase.trim() : undefined,
      location: location && typeof location === 'string' ? location.trim() : undefined,
      commuteChallenge: commuteChallenge && typeof commuteChallenge === 'string' ? commuteChallenge.trim() : undefined,
      device: device && typeof device === 'string' ? device.trim() : undefined,
    };

    // Check if user already exists
    const exists = await DatabaseOperations.checkUserExists(userData.email);
    if (exists.error) {
      return createErrorResponse(
        'Failed to check existing user',
        500,
        { errorCode: 'DB_CHECK_ERROR', details: exists.error }
      );
    }

    if (exists.exists) {
      return createErrorResponse(
        'Email already registered for early access',
        409,
        { errorCode: 'USER_ALREADY_EXISTS' }
      );
    }

    // Insert new user
    const result = await DatabaseOperations.insertUser(userData);
    if (result.error) {
      return createErrorResponse(
        'Failed to save user data',
        500,
        { errorCode: 'DB_INSERT_ERROR', details: result.error }
      );
    }

    return createSuccessResponse({
      message: 'Thank you for joining our early access list!',
      user: {
        id: result.user!.id,
        email: result.user!.email,
        name: result.user!.name
      }
    });

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return createErrorResponse(
      'Internal server error',
      500,
      { errorCode: 'UNEXPECTED_ERROR', details: errorMessage }
    );
  }
}

// GET: Retrieve all early access users (for admin purposes)
export async function GET() {
  try {
    // Check if database is available
    if (!isDatabaseAvailable()) {
      return createErrorResponse(
        'Database not available',
        503,
        { errorCode: 'DATABASE_UNAVAILABLE' }
      );
    }

    const result = await DatabaseOperations.getAllUsers();
    
    if (result.error) {
      return createErrorResponse(
        'Failed to retrieve users',
        500,
        { errorCode: 'DB_QUERY_ERROR', details: result.error }
      );
    }

    return createSuccessResponse({
      users: result.users,
      count: result.users?.length || 0
    });

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return createErrorResponse(
      'Internal server error',
      500,
      { errorCode: 'UNEXPECTED_ERROR', details: errorMessage }
    );
  }
}

// OPTIONS: Handle CORS preflight
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: createResponseHeaders(),
  });
}
