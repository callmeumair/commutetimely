import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Validate environment variables
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables:', {
    hasUrl: !!supabaseUrl,
    hasKey: !!supabaseAnonKey,
    url: supabaseUrl ? 'present' : 'missing',
    key: supabaseAnonKey ? 'present' : 'missing'
  });
}

// Only create client if environment variables are available
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
        detectSessionInUrl: false
      },
      db: {
        schema: 'public'
      }
    })
  : null;

// Helper function to check if Supabase is properly configured
export const isSupabaseConfigured = (): boolean => {
  if (!supabase) {
    console.error('Supabase client not configured');
    return false;
  }
  return true;
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
