import { pgTable, serial, varchar, text, timestamp } from 'drizzle-orm/pg-core';

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
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Export types
export type EarlyAccessUser = typeof earlyAccessUsers.$inferSelect;
export type NewEarlyAccessUser = typeof earlyAccessUsers.$inferInsert;
