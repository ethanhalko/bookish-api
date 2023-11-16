import type { Knex } from 'knex';


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('books', (table) => {
    table.increments('id');
    table.string('title').notNullable();
    table.string('author').notNullable();
    table.integer('page_count').notNullable();
    table.string('description');
    table.string('cover_url');
    table.foreign('author').references('name').inTable('authors');
    table.timestamps(true, true);
  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('books');
}

