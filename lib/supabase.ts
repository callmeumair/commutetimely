import { createClient } from '@supabase/supabase-js';
import { logger } from './logger';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Enhanced environment variable validation
const validateEnvironmentVariables = () => {
  const issues: string[] = [];
  
  if (!supabaseUrl) {
    issues.push('NEXT_PUBLIC_SUPABASE_URL is missing');
  } else if (!supabaseUrl.startsWith('https://') || !supabaseUrl.includes('.supabase.co')) {
    issues.push('NEXT_PUBLIC_SUPABASE_URL format is invalid (should be https://your-project.supabase.co)');
  }
  
  if (!supabaseAnonKey) {
    issues.push('NEXT_PUBLIC_SUPABASE_ANON_KEY is missing');
  } else if (!supabaseAnonKey.startsWith('eyJ')) {
    issues.push('NEXT_PUBLIC_SUPABASE_ANON_KEY format is invalid (should start with eyJ...)');
  } else if (supabaseAnonKey.length < 200) {
    issues.push('NEXT_PUBLIC_SUPABASE_ANON_KEY appears to be truncated (should be ~200+ characters)');
  }
  
  // Service role key is optional but recommended for server-side operations
  if (supabaseServiceKey && !supabaseServiceKey.startsWith('eyJ')) {
    issues.push('SUPABASE_SERVICE_ROLE_KEY format is invalid (should start with eyJ...)');
  } else if (supabaseServiceKey && supabaseServiceKey.length < 200) {
    issues.push('SUPABASE_SERVICE_ROLE_KEY appears to be truncated (should be ~200+ characters)');
  }
  
  if (issues.length > 0) {
    logger.critical('Supabase environment variable validation failed', {
      issues,
      hasUrl: !!supabaseUrl,
      hasKey: !!supabaseAnonKey,
      hasServiceKey: !!supabaseServiceKey,
      urlLength: supabaseUrl?.length || 0,
      keyLength: supabaseAnonKey?.length || 0,
      serviceKeyLength: supabaseServiceKey?.length || 0,
      urlStartsWithHttps: supabaseUrl?.startsWith('https://') || false,
      keyStartsWithEyJ: supabaseAnonKey?.startsWith('eyJ') || false,
      serviceKeyStartsWithEyJ: supabaseServiceKey?.startsWith('eyJ') || false
    });
    
    // In development, throw an error to make issues obvious
    if (process.env.NODE_ENV === 'development') {
      throw new Error(`Supabase configuration error: ${issues.join(', ')}`);
    }
  }
  
  return issues.length === 0;
};

// Validate environment variables on module load
const isEnvironmentValid = validateEnvironmentVariables();

// Enhanced Supabase client with better error handling (for client-side operations)
export const supabase = isEnvironmentValid && supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
        detectSessionInUrl: false
      },
      db: {
        schema: 'public'
      },
      global: {
        headers: {
          'X-Client-Info': 'commutetimely-web'
        }
      }
    })
  : null;

// Service role client for server-side operations with elevated privileges
export const supabaseAdmin = isEnvironmentValid && supabaseUrl && supabaseServiceKey
  ? createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
        detectSessionInUrl: false
      },
      db: {
        schema: 'public'
      },
      global: {
        headers: {
          'X-Client-Info': 'commutetimely-web-admin'
        }
      }
    })
  : null;

// Helper function to check if Supabase is properly configured
export const isSupabaseConfigured = (): boolean => {
  if (!isEnvironmentValid) {
    logger.error('Supabase environment validation failed');
    return false;
  }
  
  if (!supabase) {
    logger.error('Supabase client not initialized');
    return false;
  }
  
  return true;
};

// Helper function to check if admin client is available
export const isSupabaseAdminConfigured = (): boolean => {
  if (!isEnvironmentValid) {
    logger.error('Supabase environment validation failed');
    return false;
  }
  
  if (!supabaseAdmin) {
    logger.warn('Supabase admin client not available (SUPABASE_SERVICE_ROLE_KEY not set)');
    return false;
  }
  
  return true;
};

// Enhanced database operation wrapper with guaranteed responses
export class DatabaseOperation<T> {
  private operation: string;
  private table: string;
  private timeout: number;

  constructor(operation: string, table: string, timeout: number = 10000) {
    this.operation = operation;
    this.table = table;
    this.timeout = timeout;
  }

  async execute<R>(queryFn: () => any): Promise<{ data: R | null; error: any; success: boolean }> {
    const startTime = Date.now();
    
    try {
      logger.databaseOperation(this.operation, this.table, { startTime: new Date().toISOString() });
      
      // Execute query with timeout protection
      const queryResult = queryFn();
      const result = await Promise.race([
        queryResult,
        new Promise<{ data: null; error: any }>((_, reject) => 
          setTimeout(() => reject(new Error('Database operation timeout')), this.timeout)
        )
      ]);

      const processingTime = Date.now() - startTime;
      
      if (result.error) {
        logger.databaseError(result.error, this.operation, this.table);
        return {
          data: null,
          error: result.error,
          success: false
        };
      }

      logger.performance(`Database ${this.operation}`, processingTime, { 
        table: this.table, 
        success: true 
      });

      return {
        data: result.data,
        error: null,
        success: true
      };

    } catch (error) {
      const processingTime = Date.now() - startTime;
      logger.databaseError(error, this.operation, this.table);
      
      return {
        data: null,
        error: error instanceof Error ? error.message : 'Unknown database error',
        success: false
      };
    }
  }
}

// Helper functions for common database operations
export const dbOperations = {
  // Check if user exists
  async checkUserExists(email: string): Promise<{ exists: boolean; error?: string; details?: any }> {
    if (!isSupabaseConfigured()) {
      return { exists: false, error: 'Database not configured' };
    }

    try {
      logger.debug('Checking if user exists', { email, timestamp: new Date().toISOString() });
      
      // Try with regular client first, fallback to admin client if needed
      let client = supabase;
      let useAdminClient = false;
      
      const { data, error } = await client!
        .from('early_access_users')
        .select('email')
        .eq('email', email)
        .maybeSingle();

      if (error) {
        // If we get a permission error, try with admin client
        if (error.message.includes('permission denied') || error.message.includes('RLS')) {
          if (isSupabaseAdminConfigured()) {
            logger.debug('Permission denied, retrying with admin client', { email });
            useAdminClient = true;
            client = supabaseAdmin;
            
            const { data: adminData, error: adminError } = await client!
              .from('early_access_users')
              .select('email')
              .eq('email', email)
              .maybeSingle();
              
            if (adminError) {
              logger.databaseError(adminError, 'SELECT (admin)', 'early_access_users');
              return { 
                exists: false, 
                error: adminError.message,
                details: {
                  errorCode: adminError.code,
                  errorDetails: adminError.details,
                  errorHint: adminError.hint,
                  usedAdminClient: true
                }
              };
            }
            
            const exists = !!adminData;
            logger.debug('User existence check result (admin client)', { 
              email, 
              exists, 
              timestamp: new Date().toISOString(),
              usedAdminClient: true
            });
            
            return { exists };
          } else {
            logger.error('Permission denied and admin client not available', { email, error: error.message });
            return { 
              exists: false, 
              error: 'Permission denied and admin access not available',
              details: {
                errorCode: 'PERMISSION_DENIED',
                errorMessage: error.message,
                adminClientAvailable: false
              }
            };
          }
        }
        
        logger.databaseError(error, 'SELECT', 'early_access_users');
        return { 
          exists: false, 
          error: error.message,
          details: {
            errorCode: error.code,
            errorDetails: error.details,
            errorHint: error.hint,
            usedAdminClient: false
          }
        };
      }

      const exists = !!data;
      logger.debug('User existence check result', { 
        email, 
        exists, 
        timestamp: new Date().toISOString(),
        usedAdminClient: false
      });
      
      return { exists };
    } catch (dbError) {
      logger.databaseError(dbError, 'SELECT', 'early_access_users');
      return { 
        exists: false, 
        error: 'Database operation failed',
        details: {
          errorType: dbError instanceof Error ? dbError.constructor.name : 'Unknown',
          errorMessage: dbError instanceof Error ? dbError.message : String(dbError)
        }
      };
    }
  },

  // Insert new user
  async insertUser(userData: Omit<EarlyAccessUser, 'id' | 'created_at' | 'updated_at'>): Promise<{ user?: EarlyAccessUser; error?: string; details?: any }> {
    if (!isSupabaseConfigured()) {
      return { error: 'Database not configured' };
    }

    try {
      logger.debug('Inserting new user', { 
        email: userData.email, 
        hasOptionalFields: !!userData.name || !!userData.use_case,
        timestamp: new Date().toISOString() 
      });
      
      // Try with regular client first, fallback to admin client if needed
      let client = supabase;
      let useAdminClient = false;
      
      const { data, error } = await client!
        .from('early_access_users')
        .insert([userData])
        .select()
        .single();

      if (error) {
        // If we get a permission error, try with admin client
        if (error.message.includes('permission denied') || error.message.includes('RLS')) {
          if (isSupabaseAdminConfigured()) {
            logger.debug('Permission denied, retrying with admin client', { email: userData.email });
            useAdminClient = true;
            client = supabaseAdmin;
            
            const { data: adminData, error: adminError } = await client!
              .from('early_access_users')
              .insert([userData])
              .select()
              .single();
              
            if (adminError) {
              logger.databaseError(adminError, 'INSERT (admin)', 'early_access_users');
              return { 
                error: adminError.message,
                details: {
                  errorCode: adminError.code,
                  errorDetails: adminError.details,
                  errorHint: adminError.hint,
                  attemptedData: { email: userData.email },
                  usedAdminClient: true
                }
              };
            }
            
            logger.info('User successfully inserted (admin client)', { 
              userId: adminData.id, 
              email: adminData.email,
              timestamp: new Date().toISOString(),
              usedAdminClient: true
            });
            
            return { user: adminData };
          } else {
            logger.error('Permission denied and admin client not available', { email: userData.email, error: error.message });
            return { 
              error: 'Permission denied and admin access not available',
              details: {
                errorCode: 'PERMISSION_DENIED',
                errorMessage: error.message,
                adminClientAvailable: false,
                attemptedData: { email: userData.email }
              }
            };
          }
        }
        
        logger.databaseError(error, 'INSERT', 'early_access_users');
        return { 
          error: error.message,
          details: {
            errorCode: error.code,
            errorDetails: error.details,
            errorHint: error.hint,
            attemptedData: { email: userData.email },
            usedAdminClient: false
          }
        };
      }

      logger.info('User successfully inserted', { 
        userId: data.id, 
        email: data.email,
        timestamp: new Date().toISOString(),
        usedAdminClient: false
      });
      
      return { user: data };
    } catch (dbError) {
      logger.databaseError(dbError, 'INSERT', 'early_access_users');
      return { 
        error: 'Database operation failed',
        details: {
          errorType: dbError instanceof Error ? dbError.constructor.name : 'Unknown',
          errorMessage: dbError instanceof Error ? dbError.message : String(dbError),
          attemptedData: { email: userData.email }
        }
      };
    }
  },

  // Test database connectivity
  async testConnection(): Promise<{ connected: boolean; error?: string; latency?: number; details?: any }> {
    if (!isSupabaseConfigured()) {
      return { connected: false, error: 'Database not configured' };
    }

    const startTime = Date.now();
    try {
      logger.debug('Testing database connection', { timestamp: new Date().toISOString() });
      
      const { data, error } = await supabase!
        .from('early_access_users')
        .select('count')
        .limit(1);

      const latency = Date.now() - startTime;

      if (error) {
        logger.error('Database connection test failed', {
          error: error.message,
          errorCode: error.code,
          latency,
          timestamp: new Date().toISOString()
        });
        
        return { 
          connected: false, 
          error: error.message, 
          latency,
          details: {
            errorCode: error.code,
            errorDetails: error.details,
            errorHint: error.hint
          }
        };
      }

      logger.info('Database connection test successful', { 
        latency, 
        timestamp: new Date().toISOString() 
      });
      
      return { connected: true, latency };
    } catch (dbError) {
      const latency = Date.now() - startTime;
      logger.error('Database connection test exception', {
        error: dbError instanceof Error ? dbError.message : String(dbError),
        errorType: dbError instanceof Error ? dbError.constructor.name : 'Unknown',
        latency,
        timestamp: new Date().toISOString()
      });
      
      return { 
        connected: false, 
        error: 'Database operation failed', 
        latency,
        details: {
          errorType: dbError instanceof Error ? dbError.constructor.name : 'Unknown',
          errorMessage: dbError instanceof Error ? dbError.message : String(dbError)
        }
      };
    }
  }
};

// Database types for TypeScript support
export interface EarlyAccessUser {
  id?: string;
  email: string;
  name?: string;
  use_case?: string;
  location?: string;
  commute_challenge?: string;
  device?: string;
  created_at?: string;
  updated_at?: string;
}

export interface Database {
  public: {
    Tables: {
      early_access_users: {
        Row: EarlyAccessUser;
        Insert: Omit<EarlyAccessUser, 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Omit<EarlyAccessUser, 'id' | 'created_at' | 'updated_at'>>;
      };
    };
  };
}
