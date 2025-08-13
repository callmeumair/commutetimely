import { eq } from 'drizzle-orm';
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { earlyAccessUsers, type EarlyAccessUser, type NewEarlyAccessUser } from './schema';

// Lazy database connection - only connect when needed
let db: ReturnType<typeof drizzle> | null = null;

const getDb = () => {
  if (!db) {
    if (!process.env.DATABASE_URL) {
      throw new Error('DATABASE_URL environment variable is not set');
    }
    const sql = neon(process.env.DATABASE_URL);
    db = drizzle(sql);
  }
  return db;
};

export class DatabaseOperations {
  // Check if user exists
  static async checkUserExists(email: string): Promise<{ exists: boolean; error?: string }> {
    try {
      const database = getDb();
      const result = await database
        .select({ email: earlyAccessUsers.email })
        .from(earlyAccessUsers)
        .where(eq(earlyAccessUsers.email, email))
        .limit(1);

      return { exists: result.length > 0 };
    } catch (error) {
      console.error('Database error in checkUserExists:', error);
      return { exists: false, error: String(error) };
    }
  }

  // Insert new user
  static async insertUser(userData: NewEarlyAccessUser): Promise<{ user?: EarlyAccessUser; error?: string }> {
    try {
      const database = getDb();
      const result = await database
        .insert(earlyAccessUsers)
        .values(userData)
        .returning();

      return { user: result[0] };
    } catch (error) {
      console.error('Database error in insertUser:', error);
      return { error: String(error) };
    }
  }

  // Get all users
  static async getAllUsers(): Promise<{ users?: EarlyAccessUser[]; error?: string }> {
    try {
      const database = getDb();
      const result = await database
        .select()
        .from(earlyAccessUsers)
        .orderBy(earlyAccessUsers.createdAt);

      return { users: result };
    } catch (error) {
      console.error('Database error in getAllUsers:', error);
      return { error: String(error) };
    }
  }

  // Test database connection
  static async testConnection(): Promise<{ connected: boolean; error?: string }> {
    try {
      const database = getDb();
      const sql = neon(process.env.DATABASE_URL!);
      const result = await sql`SELECT NOW() as current_time`;
      return { connected: true };
    } catch (error) {
      console.error('Database connection test failed:', error);
      return { connected: false, error: String(error) };
    }
  }

  // Initialize database (create tables if they don't exist)
  static async initializeDatabase(): Promise<{ success: boolean; error?: string }> {
    try {
      const sql = neon(process.env.DATABASE_URL!);
      
      // Check if table exists
      const tableExists = await sql`
        SELECT EXISTS (
          SELECT FROM information_schema.tables 
          WHERE table_schema = 'public' 
          AND table_name = 'early_access_users'
        );
      `;
      
      if (!tableExists[0]?.exists) {
        // Create table if it doesn't exist
        await sql`
          CREATE TABLE IF NOT EXISTS "early_access_users" (
            "id" serial PRIMARY KEY NOT NULL,
            "email" varchar(255) NOT NULL,
            "name" varchar(255),
            "use_case" text,
            "location" varchar(255),
            "commute_challenge" text,
            "device" varchar(100),
            "created_at" timestamp DEFAULT now() NOT NULL,
            "updated_at" timestamp DEFAULT now() NOT NULL,
            CONSTRAINT "early_access_users_email_unique" UNIQUE("email")
          );
        `;
        console.log('Database table created successfully');
      }
      
      return { success: true };
    } catch (error) {
      console.error('Database initialization failed:', error);
      return { success: false, error: String(error) };
    }
  }
}
