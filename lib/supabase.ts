import { createClient } from '@supabase/supabase-js';
import { logger } from './logger';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Validate environment variables
if (!supabaseUrl || !supabaseAnonKey) {
  logger.critical('Missing Supabase environment variables', {
    hasUrl: !!supabaseUrl,
    hasKey: !!supabaseAnonKey,
    url: supabaseUrl ? 'present' : 'missing',
    key: supabaseAnonKey ? 'present' : 'missing'
  });
}

// Enhanced Supabase client with better error handling
export const supabase = supabaseUrl && supabaseAnonKey 
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

// Helper function to check if Supabase is properly configured
export const isSupabaseConfigured = (): boolean => {
  if (!supabase) {
    logger.error('Supabase client not configured');
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
  async checkUserExists(email: string): Promise<{ exists: boolean; error?: string }> {
    if (!isSupabaseConfigured()) {
      return { exists: false, error: 'Database not configured' };
    }

    try {
      const { data, error } = await supabase!
        .from('early_access_users')
        .select('email')
        .eq('email', email)
        .maybeSingle();

      if (error) {
        logger.databaseError(error, 'SELECT', 'early_access_users');
        return { exists: false, error: error.message };
      }

      return { exists: !!data };
    } catch (dbError) {
      logger.databaseError(dbError, 'SELECT', 'early_access_users');
      return { exists: false, error: 'Database operation failed' };
    }
  },

  // Insert new user
  async insertUser(userData: Omit<EarlyAccessUser, 'id' | 'created_at' | 'updated_at'>): Promise<{ user?: EarlyAccessUser; error?: string }> {
    if (!isSupabaseConfigured()) {
      return { error: 'Database not configured' };
    }

    try {
      const { data, error } = await supabase!
        .from('early_access_users')
        .insert([userData])
        .select()
        .single();

      if (error) {
        logger.databaseError(error, 'INSERT', 'early_access_users');
        return { error: error.message };
      }

      return { user: data };
    } catch (dbError) {
      logger.databaseError(dbError, 'INSERT', 'early_access_users');
      return { error: 'Database operation failed' };
    }
  },

  // Test database connectivity
  async testConnection(): Promise<{ connected: boolean; error?: string; latency?: number }> {
    if (!isSupabaseConfigured()) {
      return { connected: false, error: 'Database not configured' };
    }

    const startTime = Date.now();
    try {
      const { data, error } = await supabase!
        .from('early_access_users')
        .select('count')
        .limit(1);

      const latency = Date.now() - startTime;

      if (error) {
        return { connected: false, error: error.message, latency };
      }

      return { connected: true, latency };
    } catch (dbError) {
      const latency = Date.now() - startTime;
      return { connected: false, error: 'Database operation failed', latency };
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
