import { validate } from 'class-validator';
import { ValidateCallback } from '../src/index';

class Password {
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
    const password = new Password();
    password.password = 'passW0rd';
    password.passwordConfirmation = 'passW0rd';
    const validatePassword = await validate(password)
    console.log(validatePassword);
    expect(validatePassword).toEqual([]);
  });
});