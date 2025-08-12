import { NextRequest, NextResponse } from 'next/server';
import { isSupabaseConfigured, supabase } from '@/lib/supabase';
import { logger } from '@/lib/logger';

export async function GET(request: NextRequest) {
  const startTime = Date.now();
  
  try {
    logger.apiRequest('GET', request.url);
    
    const healthChecks = {
      server: {
        status: 'healthy',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        memory: process.memoryUsage(),
        nodeVersion: process.version,
        platform: process.platform,
        arch: process.arch
      },
      environment: {
        nodeEnv: process.env.NODE_ENV || 'undefined',
        hasSupabaseUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
        hasSupabaseKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        hasServiceKey: !!process.env.SUPABASE_SERVICE_ROLE_KEY
      },
      database: {
        configured: isSupabaseConfigured(),
        status: 'unknown' // Will be updated below if we can test connection
      }
    };

    // Test database connection if configured
    if (isSupabaseConfigured() && supabase) {
      try {
        // Simple query to test connection
        const { data, error } = await supabase
          .from('early_access_users')
          .select('count')
          .limit(1);
        
        if (error) {
          healthChecks.database.status = 'error';
          healthChecks.database.error = error.message;
          healthChecks.database.code = error.code;
        } else {
          healthChecks.database.status = 'healthy';
          healthChecks.database.connectionTest = 'success';
        }
      } catch (dbError) {
        healthChecks.database.status = 'error';
        healthChecks.database.error = dbError instanceof Error ? dbError.message : 'Unknown error';
      }
    } else {
      healthChecks.database.status = 'not_configured';
    }

    const processingTime = Date.now() - startTime;
    healthChecks.server.processingTimeMs = processingTime;

    // Determine overall health status
    const overallStatus = healthChecks.database.status === 'healthy' ? 200 : 503;
    
    logger.apiResponse(overallStatus, processingTime, healthChecks);
    
    return NextResponse.json(
      {
        success: overallStatus === 200,
        status: overallStatus === 200 ? 'healthy' : 'degraded',
        timestamp: new Date().toISOString(),
        processingTimeMs: processingTime,
        checks: healthChecks
      },
      { 
        status: overallStatus,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache, no-store, must-revalidate'
        }
      }
    );

  } catch (error) {
    const processingTime = Date.now() - startTime;
    logger.critical('Health Check Critical Error', {
      processingTimeMs: processingTime,
      error: error instanceof Error ? error.message : 'Unknown error'
    });

    return NextResponse.json(
      {
        success: false,
        status: 'unhealthy',
        error: 'Health check failed',
        timestamp: new Date().toISOString(),
        processingTimeMs: processingTime
      },
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache, no-store, must-revalidate'
        }
      }
    );
  }
}

// Handle other methods
export async function POST() {
  return NextResponse.json(
    { error: 'Method not allowed. Use GET for health check.' },
    { status: 405 }
  );
}

export async function PUT() {
  return NextResponse.json(
    { error: 'Method not allowed. Use GET for health check.' },
    { status: 405 }
  );
}

export async function DELETE() {
  return NextResponse.json(
    { error: 'Method not allowed. Use GET for health check.' },
    { status: 405 }
  );
}
