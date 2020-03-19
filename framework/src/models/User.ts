import axios from 'axios';

export type UserProps = {
  name?: string,
  age?: number,
  id?: number,
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

  fetch() {
    axios.get(`http://localhost:3000/users/${this.get('id')}`).then((response) => {
      this.set(response.data);
    })
  }

  save() {
    const id = this.get('id');

    if (id) {
      axios.put(`http://localhost:3000/users/${this.get('id')}`, this.props);
    } else {
      axios.post('http://localhost:3000/users', this.props);
    }
  }
}
