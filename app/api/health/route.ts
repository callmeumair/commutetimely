import { NextResponse } from 'next/server';
import { DatabaseOperations } from '@/lib/db-operations';

export async function GET() {
  try {
    let dbTest: { connected: boolean; error: string } = { connected: false, error: 'Database check skipped during build' };
    
    // Only test database connection if we're in runtime (not build time)
    if (process.env.DATABASE_URL) {
      try {
        const result = await DatabaseOperations.testConnection();
        dbTest = { connected: result.connected, error: result.error || 'Unknown error' };
      } catch (dbError) {
        dbTest = { connected: false, error: String(dbError) };
      }
    }
    
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
