// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  index,
  integer,
  pgTableCreator,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `tripcheck_${name}`);

export const userTable = createTable(
  "user",
  {
    id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
    name: varchar("name", { length: 256 }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date(),
    ),
    email: varchar("email", { length: 256 }).unique().notNull(),
  },
  (example) => ({
    emailIndex: index("email_idx").on(example.email),
  }),
);

export const tripTable = createTable(
  "trip",
  {
    id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
    name: varchar("name", { length: 256 }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date(),
    ),
    createrId: integer("creater_id")
      .notNull()
      .references(() => userTable.id, {
        onDelete: "cascade",
      }),
    // trip will have more than one users, one creator and multiple participants
    participants: integer("participants").array().notNull(),
    // trip will have more than one expenses
    expenses: integer("expenses").array().notNull(),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.name),
  }),
);

export const expenseTable = createTable(
  "expense",
  {
    id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
    name: varchar("name", { length: 256 }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    // each expense will have a trip id
    tripId: integer("trip_id")
      .notNull()
      .references(() => tripTable.id, {
        onDelete: "cascade",
      }),
    // each expense will have a userid who has registered the expense
    userId: integer("user_id")
      .notNull()
      .references(() => userTable.id, {
        onDelete: "cascade",
      }),
    // each expense will have a amount
    amount: integer("amount").notNull(),
    // each expense will have a description
    description: varchar("description", { length: 256 }),
  },
  (example) => ({
    nameIndex: index("expense_idx").on(example.name),
  }),
);

export const insertUser = typeof userTable.$inferInsert;
export const insertTrip = typeof tripTable.$inferInsert;
export const insertExpense = typeof expenseTable.$inferInsert;
export const selectUser = typeof userTable.$inferSelect;
export const selectTrip = typeof tripTable.$inferSelect;
export const selectExpense = typeof expenseTable.$inferSelect;
