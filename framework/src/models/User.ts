import { Model } from './Model';
import { Eventing } from './Eventing';
import { Fetcher } from './Fetcher';
import { Collection } from './Collection';

export type UserProps = {
  name?: string,
  age?: number,
  id?: number,
}

const baseUrl = 'http://localhost:3000';

export class User extends Model<UserProps>{
  static build(attrs: UserProps): User {
    return new User(
      attrs,
      new Eventing(),
      new Fetcher<UserProps>(baseUrl, '/users'),
    )
  }

  static buildCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(`${baseUrl}/users`, User.build);
  }

  setRandomAge(): void {
    const age = Math.round(Math.random() * 100);
    this.set({ age });
  }
}
