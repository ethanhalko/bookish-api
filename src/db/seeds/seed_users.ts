import type { Knex } from 'knex';
import { faker } from '@faker-js/faker';


export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('users').del();

  const seedData = Array.from({ length: 10 }, () => {
    const name = faker.person.fullName();

    return {
      name,
      email: faker.internet.email({ firstName: name.split(' ')[0], lastName: name.split(' ')[1] }),
      bio: faker.person.bio(),
      location: faker.location.city()
    };
  });

  seedData.push({
    name: 'admin',
    email: process.env.ADMIN_EMAIL || 'admin@admin.admin',
    bio: 'I am the admin',
    location: 'Cyberspace'
  });

  // Inserts seed entries
  await knex('users').insert(seedData);
}
