import 'reflect-metadata';
import { Method, MetadataKey } from '../constants/enums';

function createMethodDecorator(methodName: Method) {
  return function(path: string): MethodDecorator {
    return function (target: Object, key: string|symbol, descriptor: PropertyDescriptor): void {
      Reflect.defineMetadata(MetadataKey.PATH, path, target, key);
      Reflect.defineMetadata(MetadataKey.METHOD, methodName, target, key);
    }
  }
}

export const get = createMethodDecorator(Method.GET);
export const post = createMethodDecorator(Method.POST);
