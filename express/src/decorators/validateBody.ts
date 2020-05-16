import 'reflect-metadata';
import { MetadataKey } from '../constants/enums';

export function validateBody(...keys: string[]): MethodDecorator {
  return function (target: Object, key: string|symbol, descriptor: PropertyDescriptor) {
    Reflect.defineMetadata(MetadataKey.VALIDATION, keys, target, key);
  }
}
