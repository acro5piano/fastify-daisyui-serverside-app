import type { Database } from './types' // this is the Database interface we defined earlier
import SQLite from 'better-sqlite3'
import { Kysely, sql, SqliteDialect } from 'kysely'

const dialect = new SqliteDialect({
  database: new SQLite('./local.db'),
})

export const db = new Kysely<Database>({
  dialect,
})

export async function migrateUp() {
  await db.schema
    .createTable('person')
    .ifNotExists()
    .addColumn('id', 'uuid', (col) =>
      col.notNull().defaultTo(sql`(lower(hex(randomblob(8))))`),
    )
    .addColumn('nickname', 'varchar', (col) => col.notNull().defaultTo(''))
    .addColumn('gender', 'varchar', (col) => col.notNull().defaultTo('OTHER'))
    .addColumn('createdAt', 'varchar', (col) =>
      col.notNull().defaultTo(sql`CURRENT_TIMESTAMP`),
    )
    .execute()
}
