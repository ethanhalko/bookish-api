export async function up(knex){
  await knex.schema.createTable('user_books', (table) => {
    table.increments('id');
    table.integer('user_id').unsigned().notNullable();
    table.integer('book_id').unsigned().notNullable();
    table.foreign('user_id').references('id').inTable('users');
    table.foreign('book_id').references('id').inTable('books');
    table.timestamps(true, true);
  });
}


export async function down(knex){
  await knex.schema.dropTable('user_books');
}

