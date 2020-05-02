import { View } from './View';
import { User } from '../models/User';

export class UserShow extends View<User> {
  eventsMap(): Record<string, (event: Event) => void> {
    return {};
  }

  template(): string {
    return `
<div class="user-info">
  <h1 class="user-info__title">User detail</h1>
  <p>User name: ${this.model.get('name')}</p>
  <p>User age: ${this.model.get('age')}</p>
</div>
`;
  }
}
