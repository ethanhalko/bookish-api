import { describe, it, expect } from 'vitest';
import { User } from '../classes/User';

describe('User model', () => {
  const userData = {
    name: 'Test User',
    email: 'test@test.test'
  };

  it('can be instantiated', () => {
    const user = new User(userData);

    expect(user).toBeTruthy();
  });

  it('can be instantiated with data', () => {
    const userData = {
      name: 'test name',
      email: 'test@bookish.dev',
      bio: 'lorem ipsum, etc'
    };

    const user = new User(userData);

    expect(user.name).toBe(userData.name);
    expect(user.email).toBe(userData.email);
    expect(user.bio).toBe(userData.bio);
  });
});
