import type { Knex } from 'knex';

export async function up(knex: Knex) {
  await knex.schema.createTable('books', (table) => {
    table.increments('id');
    table.string('title').notNullable();
    table.integer('author_id').unsigned().notNullable();
    table.integer('page_count').notNullable();
    table.string('description');
    table.string('cover_url');
    table.foreign('author_id').references('authors.id');
    table.timestamps(true, true);
  });
}


export async function down(knex: Knex) {
  await knex.schema.dropTable('books');
}

