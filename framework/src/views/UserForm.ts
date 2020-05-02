import { User } from '../models/User';
import { View } from './View';

export class UserForm extends View<User> {
  eventsMap(): Record<string, (event: Event) => void> {
    return {
      'submit:.user-form': this.onSubmit.bind(this),
      'click:.user-form__random-age-button': this.onRandomAgeButtonClick.bind(this),
      'click:.user-form__name-button': this.onChangeNameClick.bind(this),
    };
  }

  private onSubmit(event: Event): void {
    event.preventDefault();
    this.model.save();
  }

  private onChangeNameClick(): void {
    const input: HTMLInputElement|null = this.parent.querySelector('.user-form__input');

    if (input) {
      this.model.set({ name: input.value })
    }
  }

  private onRandomAgeButtonClick(event: Event): void {
    console.log('random age');
    this.model.setRandomAge();
  }

  template(): string {
    return `
<form action="" class="user-form">
  <p class="user-form__form-field">
    <label class="user-form__label">
      username:
      <input type="text" placeholder="${this.model.get('name')}" class="user-form__input">
    </label>
    <button type="button" class="user-form__name-button">Change name</button>
  </p>
  <p class="user-form__form-field">
    <button type="button" class="user-form__random-age-button">Set random age</button>
  </p>
  <p class="user-form__form-field">
    <button type="submit" class="user-form__submit-button">Save</button>
  </p>
</form>
`;
  }
}
