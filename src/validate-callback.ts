import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function ValidateCallback(
  callback: (object: Record<string, any>, value: any) => Promise<boolean> | boolean,
  validationOptions?: ValidationOptions,
) {
  return (object: Record<string, any>, propertyName: string) => {
    registerDecorator({
      name: 'validateCallback',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [callback],
      options: validationOptions,
      validator: {
        async validate(value: any, args: ValidationArguments) {
          const [callback] = args.constraints;
          return Boolean(await callback(args.object, value));
        },
      },
    });
  };
}
