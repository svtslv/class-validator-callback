import { validate } from 'class-validator';
import { ValidateCallback } from '../src/index';

class User {
  @ValidateCallback(
    (object, value) => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(value), 
    { message: 'Error message for password' }
  )
  password: string;

  @ValidateCallback(
    (object, value) => object.password === value, 
    { message: 'Error message for passwordConfirmation' }
  )
  passwordConfirmation: string;
}

describe('validate-callback', () => {
  test('should return empty array', async () => {
    const user = new User();
    user.password = 'passW0rd';
    user.passwordConfirmation = 'passW0rd';
    const errors = await validate(user);
    expect(errors).toEqual([]);
  });
});