export async function up(knex){
  await knex.schema.createTable('authors', (table) => {
    table.increments('id');
    table.string('name').notNullable();
    table.string('bio');
    table.timestamps(true, true);
  });
}


export async function down(knex){
  await knex.schema.dropTable('authors');
}

