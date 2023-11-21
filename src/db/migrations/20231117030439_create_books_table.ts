import type { Knex } from 'knex';

export async function up(knex: Knex) {
  await knex.schema.createTable('books', (table) => {
    table.increments('id');
    table.string('title').notNullable();
    table.integer('page_count').notNullable();
    table.string('description');
    table.string('olid').notNullable();
    table.string('isbn').notNullable();
    table.timestamps(true, true);
  });
}


export async function down(knex: Knex) {
  await knex.schema.dropTable('books');
}

