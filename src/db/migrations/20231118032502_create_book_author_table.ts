import type { Knex } from 'knex';


export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('book_author', (table) => {
    table.increments('id');
    table.integer('book_id').unsigned().references('id').inTable('books');
    table.integer('author_id').unsigned().references('id').inTable('authors');
    table.timestamps(true, true);
  });
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('book_author');
}

