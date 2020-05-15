import 'reflect-metadata';
import AppRouter from '../app.router';

export function controller(routePrefix: string = ''): ClassDecorator {
  return function (target: Function): void {
    const router = AppRouter.getInstance();

    Object.getOwnPropertyNames(target.prototype)
      .filter(notConstructor)
      .forEach((prop: string) => {
        const routeHandler = target.prototype[prop];

        const path = Reflect.getMetadata('path', target.prototype, prop);

        if (path !== undefined && typeof path === 'string') {
          router.get(`${routePrefix}${path}`, routeHandler);
        }
      });
  }
}

function notConstructor(propertyName: string): boolean {
  return propertyName !== 'constructor';
}
