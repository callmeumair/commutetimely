import { NextResponse } from 'next/server';
import { DatabaseOperations } from '@/lib/db-operations';

export async function GET() {
  try {
    // Test database connection
    const dbTest = await DatabaseOperations.testConnection();
    
    const healthStatus = {
      status: dbTest.connected ? 'healthy' : 'degraded',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: process.env.NODE_ENV || 'unknown',
      version: process.env.npm_package_version || 'unknown',
      services: {
        api: 'operational',
        database: dbTest.connected ? 'operational' : 'error',
        ...(dbTest.error && { databaseError: dbTest.error })
      }
    };

    const statusCode = dbTest.connected ? 200 : 503;
    
    return NextResponse.json(healthStatus, {
      status: statusCode,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      }
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    
    return NextResponse.json(
      {
        status: 'unhealthy',
        timestamp: new Date().toISOString(),
        error: errorMessage,
        services: {
          api: 'error',
          database: 'unknown'
        }
      },
      { status: 500 }
    );
  }
}
