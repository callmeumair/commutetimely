# Neon Database Setup Guide

This guide will help you set up Neon (PostgreSQL) as your database for the CommuteTimely project.

## What is Neon?

Neon is a serverless PostgreSQL service that offers:
- **Serverless**: Auto-scaling based on demand
- **Branching**: Create database branches like Git branches
- **PostgreSQL**: Full PostgreSQL compatibility
- **Free tier**: Generous free plan for development

## Step 1: Create Neon Account

1. Go to [Neon Console](https://console.neon.tech/)
2. Sign up with GitHub, Google, or email
3. Create a new project

## Step 2: Get Database Credentials

1. **Project Dashboard**: Note your project ID
2. **Connection Details**: Copy the connection string
3. **API Keys**: Save your API key for management

### Connection String Format
```
postgresql://username:password@ep-example.us-east-1.aws.neon.tech/database?sslmode=require
```

## Step 3: Install Dependencies

```bash
npm install @neondatabase/serverless drizzle-orm
npm install drizzle-kit --save-dev
```

## Step 4: Configure Environment

Create `.env.local` with your Neon credentials:

```bash
# Neon Database Configuration
DATABASE_URL="postgresql://username:password@ep-example.us-east-1.aws.neon.tech/database?sslmode=require"

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development
```

## Step 5: Create Database Schema

Create `lib/schema.ts`:

```typescript
import { pgTable, serial, varchar, text, timestamp, boolean } from 'drizzle-orm/pg-core';

// Early access users table
export const earlyAccessUsers = pgTable('early_access_users', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  name: varchar('name', { length: 255 }),
  useCase: text('use_case'),
  location: varchar('location', { length: 255 }),
  commuteChallenge: text('commute_challenge'),
  device: varchar('device', { length: 100 }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow().notNull(),
});

// Export types
export type EarlyAccessUser = typeof earlyAccessUsers.$inferSelect;
export type NewEarlyAccessUser = typeof earlyAccessUsers.$inferInsert;
```

## Step 6: Configure Drizzle

Create `drizzle.config.ts`:

```typescript
import type { Config } from 'drizzle-kit';

export default {
  schema: './lib/schema.ts',
  out: './drizzle',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
  verbose: true,
  strict: true,
} satisfies Config;
```

## Step 7: Database Operations

Create `lib/db-operations.ts`:

```typescript
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
}
```

## Step 8: Generate and Run Migrations

```bash
# Generate migration files
npm run db:generate

# Push schema to database
npm run db:push

# View database in Drizzle Studio
npm run db:studio
```

## Step 9: Test Connection

Create a simple test script `scripts/test-db.js`:

```javascript
const { neon } = require('@neondatabase/serverless');

async function testConnection() {
  try {
    const sql = neon(process.env.DATABASE_URL);
    const result = await sql`SELECT NOW() as current_time`;
    console.log('✅ Database connection successful:', result[0]);
  } catch (error) {
    console.error('❌ Database connection failed:', error);
  }
}

testConnection();
```

Run the test:
```bash
node scripts/test-db.js
```

## Step 10: Create API Routes

When you're ready to add APIs back, create them using the database operations:

```typescript
// app/api/early-access/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { DatabaseOperations } from '@/lib/db-operations';

export async function POST(request: NextRequest) {
  try {
    const { email, name } = await request.json();
    
    // Check if user exists
    const exists = await DatabaseOperations.checkUserExists(email);
    if (exists.exists) {
      return NextResponse.json({ error: 'User already exists' }, { status: 409 });
    }
    
    // Insert user
    const result = await DatabaseOperations.insertUser({ email, name });
    if (result.error) {
      return NextResponse.json({ error: result.error }, { status: 500 });
    }
    
    return NextResponse.json({ success: true, user: result.user });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
```

## Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_URL` | Neon connection string | `postgresql://user:pass@host/db?sslmode=require` |
| `NEXT_PUBLIC_APP_URL` | Your app URL | `http://localhost:3000` |
| `NODE_ENV` | Environment | `development` |

## Troubleshooting

### Connection Issues
- Verify `DATABASE_URL` is correct
- Check if Neon project is active
- Ensure SSL mode is set to `require`

### Migration Issues
- Run `npm run db:generate` first
- Check schema syntax
- Verify table permissions

### Performance Issues
- Use connection pooling for production
- Monitor query performance
- Enable Neon's query analysis

## Next Steps

1. **Set up your Neon database** following this guide
2. **Test the connection** using the test script
3. **Create your schema** and run migrations
4. **Add API routes** when ready
5. **Deploy to production** with proper environment variables

## Resources

- [Neon Documentation](https://neon.tech/docs)
- [Drizzle ORM](https://orm.drizzle.team/)
- [PostgreSQL Reference](https://www.postgresql.org/docs/)
