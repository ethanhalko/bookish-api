import type { Knex } from 'knex';


export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('books_authors', (table) => {
    table.increments('id');
    table.integer('book_id').unsigned().notNullable().references('id').inTable('books');
    table.integer('author_id').unsigned().notNullable().references('id').inTable('authors');
    table.timestamps(true, true);
  });
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('books_authors');
}

