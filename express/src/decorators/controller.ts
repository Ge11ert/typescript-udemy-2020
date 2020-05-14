import 'reflect-metadata';
import express from 'express';

export const router = express.Router();

export function controller(routePrefix: string = ''): ClassDecorator {
  return function (target: Function): void {
    Object.getOwnPropertyNames(target.prototype)
      .filter(notConstructor)
      .forEach((prop: string) => {
        const routeHandler = target.prototype[prop];

        const path = Reflect.getMetadata('path', target.prototype, prop);

        if (path) {
          router.get(`${routePrefix}${path}`, routeHandler);
        }
      });
  }
}

function notConstructor(propertyName: string): boolean {
  return propertyName !== 'constructor';
}
