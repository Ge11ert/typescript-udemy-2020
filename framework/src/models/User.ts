import { Eventing } from './Eventing';
import { Fetcher } from './Fetcher';
import {type} from "os";

export type UserProps = {
  name?: string,
  age?: number,
  id?: number,
}

const baseUrl = 'http://localhost:3000';

export class User {
  public events: Eventing = new Eventing();
  public fetcher: Fetcher<UserProps> = new Fetcher<UserProps>(baseUrl);

  constructor(private props: UserProps) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get<K extends keyof UserProps>(propName: K): UserProps[K] {
    return this.props[propName];
  }

  set(newProps: Partial<UserProps>): void {
    Object.assign(this.props, newProps);
    this.events.trigger('change');
  }

  fetch(): void | never {
    const id = this.get('id');

    if (typeof id !== 'number') {
      throw new Error()
    }

    this.fetcher.fetch(`/users/${id}`).then((responseData: UserProps) => {
      this.set(responseData);
    });
  }

  save() {
    const id = this.get('id');
    const triggerSave = () => { this.events.trigger('save'); };
    const triggerError = () => { this.events.trigger('save_error'); };

    if (id) {
      this.fetcher.update(`/users/${id}`, this.props)
        .then(triggerSave)
        .catch(triggerError);
    } else {
      this.fetcher.save('/users', this.props)
        .then(triggerSave)
        .catch(triggerError);
    }
  }
}
