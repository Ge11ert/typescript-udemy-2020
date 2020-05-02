import { View } from './View';
import { UserForm } from './UserForm';
import { UserShow } from './UserShow';
import { User } from '../models/User';

export class UserEdit extends View<User> {
  regionsMap(): { [key: string]: string } {
    return {
      userShow: '.user-edit__details',
      userForm: '.user-edit__form',
    }
  }

  onRender() {
    const userShow = new UserShow(this.regions.userShow, this.model);
    userShow.render();

    const userForm = new UserForm(this.regions.userForm, this.model);
    userForm.render();
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
