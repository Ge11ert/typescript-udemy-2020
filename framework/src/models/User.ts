export type UserProps = {
  name: string,
  age: number,
}

type Callback = () => void;

export class User {
  events: Record<string, Callback[]> = {};

  constructor(private props: UserProps) {}

  get(propName: keyof UserProps) {
    return this.props[propName];
  }

  set(newProps: Partial<UserProps>): void {
    Object.assign(this.props, newProps);
  }

  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || [];
    this.events[eventName] = handlers.concat([callback]);
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];

    if (Array.isArray(handlers) && handlers.length > 0) {
      handlers.forEach(callback => {
        callback();
      })
    }
  }
}
