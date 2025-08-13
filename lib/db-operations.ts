import { eq } from 'drizzle-orm';
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { earlyAccessUsers, type EarlyAccessUser, type NewEarlyAccessUser } from './schema';

// Create database connection
const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql);

export class DatabaseOperations {
  // Check if user exists
  static async checkUserExists(email: string): Promise<{ exists: boolean; error?: string }> {
    try {
      const result = await db
        .select({ email: earlyAccessUsers.email })
        .from(earlyAccessUsers)
        .where(eq(earlyAccessUsers.email, email))
        .limit(1);

      return { exists: result.length > 0 };
    } catch (error) {
      return { exists: false, error: String(error) };
    }
  }

  // Insert new user
  static async insertUser(userData: NewEarlyAccessUser): Promise<{ user?: EarlyAccessUser; error?: string }> {
    try {
      const result = await db
        .insert(earlyAccessUsers)
        .values(userData)
        .returning();

      return { user: result[0] };
    } catch (error) {
      return { error: String(error) };
    }
  }

  // Get all users
  static async getAllUsers(): Promise<{ users?: EarlyAccessUser[]; error?: string }> {
    try {
      const result = await db
        .select()
        .from(earlyAccessUsers)
        .orderBy(earlyAccessUsers.createdAt);

      return { users: result };
    } catch (error) {
      return { error: String(error) };
    }
  }

  // Test database connection
  static async testConnection(): Promise<{ connected: boolean; error?: string }> {
    try {
      const result = await sql`SELECT NOW() as current_time`;
      return { connected: true };
    } catch (error) {
      return { connected: false, error: String(error) };
    }
  }
}
