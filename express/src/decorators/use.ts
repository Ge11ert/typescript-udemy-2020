import 'reflect-metadata';
import { RequestHandler } from 'express';
import { MetadataKey } from '../constants/enums';

export function use(middleware: RequestHandler): MethodDecorator {
  return function (target: Object, key: string|symbol, descriptor: PropertyDescriptor) {
    const middlewares: RequestHandler[] = Reflect.getMetadata(MetadataKey.MIDDLEWARE, target, key) || [];

    Reflect.defineMetadata(MetadataKey.MIDDLEWARE, [...middlewares, middleware], target, key);
  }
}
