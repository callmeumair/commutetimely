// Simple logging utility for debugging and monitoring
export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
  CRITICAL = 4
}

interface LogContext {
  [key: string]: any;
}

class Logger {
  private level: LogLevel;
  private isDevelopment: boolean;

  constructor() {
    this.isDevelopment = process.env.NODE_ENV === 'development';
    this.level = this.isDevelopment ? LogLevel.DEBUG : LogLevel.INFO;
  }

  private formatMessage(level: string, message: string, context?: LogContext): string {
    const timestamp = new Date().toISOString();
    const contextStr = context ? ` | ${JSON.stringify(context)}` : '';
    return `[${timestamp}] ${level}: ${message}${contextStr}`;
  }

  private shouldLog(level: LogLevel): boolean {
    return level >= this.level;
  }

  debug(message: string, context?: LogContext): void {
    if (this.shouldLog(LogLevel.DEBUG)) {
      console.log(this.formatMessage('DEBUG', message, context));
    }
  }

  info(message: string, context?: LogContext): void {
    if (this.shouldLog(LogLevel.INFO)) {
      console.info(this.formatMessage('INFO', message, context));
    }
  }

  warn(message: string, context?: LogContext): void {
    if (this.shouldLog(LogLevel.WARN)) {
      console.warn(this.formatMessage('WARN', message, context));
    }
  }

  error(message: string, context?: LogContext): void {
    if (this.shouldLog(LogLevel.ERROR)) {
      console.error(this.formatMessage('ERROR', message, context));
    }
  }

  critical(message: string, context?: LogContext): void {
    if (this.shouldLog(LogLevel.CRITICAL)) {
      console.error(this.formatMessage('CRITICAL', message, context));
    }
  }

  // API-specific logging methods
  apiRequest(method: string, url: string, headers?: Record<string, string>, body?: any): void {
    this.info('API Request', {
      method,
      url,
      headers: headers ? Object.keys(headers) : undefined,
      bodySize: body ? JSON.stringify(body).length : 0,
      timestamp: new Date().toISOString()
    });
  }

  apiResponse(status: number, responseTime: number, body?: any): void {
    this.info('API Response', {
      status,
      responseTimeMs: responseTime,
      bodySize: body ? JSON.stringify(body).length : 0,
      timestamp: new Date().toISOString()
    });
  }

  apiError(error: Error | string, context?: LogContext): void {
    this.error('API Error', {
      error: error instanceof Error ? error.message : error,
      stack: error instanceof Error ? error.stack : undefined,
      ...context
    });
  }

  databaseOperation(operation: string, table: string, context?: LogContext): void {
    this.debug('Database Operation', {
      operation,
      table,
      ...context
    });
  }

  databaseError(error: any, operation: string, table: string): void {
    this.error('Database Error', {
      operation,
      table,
      error: error?.message || error,
      code: error?.code,
      details: error
    });
  }

  // Performance monitoring
  performance(operation: string, duration: number, context?: LogContext): void {
    this.info('Performance', {
      operation,
      durationMs: duration,
      ...context
    });
  }
}

// Export singleton instance
export const logger = new Logger();

// Export individual methods for convenience
export const { debug, info, warn, error, critical, apiRequest, apiResponse, apiError, databaseOperation, databaseError, performance } = logger;
