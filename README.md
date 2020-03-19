# Class Validator Callback

<a href="https://www.npmjs.com/package/class-validator-callback"><img src="https://img.shields.io/npm/v/class-validator-callback.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/package/class-validator-callback"><img src="https://img.shields.io/npm/l/class-validator-callback.svg" alt="Package License" /></a>

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Examples](#examples)
- [License](#license)

## Description

ValidateCallback decorator for class-validator

## Installation

```bash
npm install class-validator class-validator-callback
```

## Examples

```ts
  import { validate } from 'class-validator';
  import { ValidateCallback } from 'class-validator-callback';

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

  (async() => {
    const password = new Password();
    password.password = 'passW0rd';
    password.passwordConfirmation = 'passW0rd';
    const validatePassword = await validate(password);
    console.log(validatePassword);
  })();
```

## License

MIT
