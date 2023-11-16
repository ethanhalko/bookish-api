import type { Knex } from 'knex';


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('user_books', (table) => {
    table.increments('id');
    table.foreign('user_id').references('id').inTable('users');
    table.foreign('book_id').references('id').inTable('books');
    table.timestamps(true, true);
  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('user_books');
}

