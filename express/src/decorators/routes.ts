import 'reflect-metadata';

export function get(path: string): MethodDecorator {
  return function (target: Object, key: string|symbol, descriptor: PropertyDescriptor): void {
    Reflect.defineMetadata('path', path, target, key);
  }
}
