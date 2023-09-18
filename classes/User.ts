import type { User as UserType } from 'knex/types/tables';

export class User implements UserType {
  name: string;
  email: string;
  bio: string | undefined;
  location: string | undefined;
  created_at: string | undefined;
  updated_at: string | undefined;


  constructor(props: UserType) {
    this.name = props.name;
    this.email = props.email;
    this.location = props?.location;
    this.bio = props?.bio;
  }
}
