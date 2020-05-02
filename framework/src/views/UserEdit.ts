import { View } from './View';
import { User } from '../models/User';

class UserEdit extends View<User> {
  eventsMap(): Record<string, (event: Event) => void> {
    return {};
  }

  template(): string {
    return `
<div class="user-edit">
  <div class="user-edit__details"></div>
  <div class="user-edit__form"></div>
</div>
`;
  }
}
