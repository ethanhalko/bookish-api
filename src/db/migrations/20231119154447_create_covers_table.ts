import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('covers', (table) => {
    table.increments('id');
    table.string('url').notNullable();
    table.integer('book_id').unsigned().notNullable().references('id').inTable('books');
    table.timestamps(true, true);
  });
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('covers');
}

