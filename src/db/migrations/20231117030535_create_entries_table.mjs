export async function up(knex){
  await knex.schema.createTable('entries', (table) => {
    table.increments('id');
    table.integer('book_id').unsigned().notNullable();
    table.foreign('book_id').references('id').inTable('books');
    table.integer('page_count').notNullable();
    table.timestamps(true, true);
  });
}


export async function down(knex){
 await  knex.schema.dropTable('entries');
}

