type Callback = () => void;

export class Eventing {
  events: Record<string, Callback[]> = {};

  on = (eventName: string, callback: Callback): void => {
    const handlers = this.events[eventName] || [];
    this.events[eventName] = handlers.concat([callback]);
  };

  trigger = (eventName: string): void => {
    const handlers = this.events[eventName];

    if (Array.isArray(handlers) && handlers.length > 0) {
      handlers.forEach(callback => {
        callback();
      })
    }
  };
}
