declare module 'knex/types/tables' {
  interface Timestamps{
    created_at?: string;
    updated_at?: string;
  }

  interface User extends Timestamps {
    name: string;
    email: string;
    bio?: string;
    location?: string;
  }
}
