import { describe, it, expect } from 'vitest';
import { User } from '../classes/User';

describe('User model', () => {
    it('can be instantiated', () => {
        const user = new User();

        expect(user).toBeTruthy();
    });
});
