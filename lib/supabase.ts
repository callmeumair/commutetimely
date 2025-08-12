import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Only create client if environment variables are available
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

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
