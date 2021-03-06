import 'reflect-metadata';
import AppRouter from '../app.router';
import { Method, MetadataKey } from '../constants/enums';
import { requestBodyValidator } from '../middlewares/body-validation-middleware';

export function controller(routePrefix: string = ''): ClassDecorator {
  return function (target: Function): void {
    const router = AppRouter.getInstance();

    Object.getOwnPropertyNames(target.prototype)
      .filter(notConstructor)
      .forEach((prop: string) => {
        const routeHandler = target.prototype[prop];

        const path = Reflect.getMetadata(MetadataKey.PATH, target.prototype, prop);
        const method: Method = Reflect.getMetadata(MetadataKey.METHOD, target.prototype, prop);
        const middlewares = Reflect.getMetadata(MetadataKey.MIDDLEWARE, target.prototype, prop) || [];
        const requiredBodyProps = Reflect.getMetadata(MetadataKey.VALIDATION, target.prototype, prop) || [];
        const validationMiddleware = requestBodyValidator(requiredBodyProps);

        if (isString(path) && isString(method)) {
          router[method](`${routePrefix}${path}`, ...middlewares, validationMiddleware ,routeHandler);
        }
      });
  }
}

function notConstructor(propertyName: string): boolean {
  return propertyName !== 'constructor';
}

function isString(value: any): value is string {
  return typeof value === 'string' || value instanceof String;
}
