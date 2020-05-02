import { User } from '../models/User';

export class UserForm {
  constructor(private parent: Element, private model: User) {
    this.bindModel();
  }

  private eventsMap(): Record<string, (event: Event) => void> {
    return {
      'submit:.user-form__form': this.onSubmit.bind(this),
      'click:.user-form__random-age-button': this.onRandomAgeButtonClick.bind(this),
      'click:.user-form__name-button': this.onChangeNameClick.bind(this),
    };
  }

  private onSubmit(event: Event): void {
    event.preventDefault();
    console.log('Submit form');
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

  private template(): string {
    return `
<div class="user-form">
    <h1 class="user-form__title">User form</h1>
    <p>User name: ${this.model.get('name')}</p>
    <p>User age: ${this.model.get('age')}</p>
    <form action="" class="user-form__form">
      <p class="user-form__form-field">
        <label class="user-form__label">
          username:
          <input type="text" class="user-form__input">
        </label>
        <button type="button" class="user-form__name-button">Change name</button>
      </p>
      <p class="user-form__form-field">
        <button type="button" class="user-form__random-age-button">Set random age</button>
      </p>
      <p class="user-form__form-field">
        <button type="submit" class="user-form__submit-button">Submit</button>
      </p>
    </form>
</div>
    `;
  }

  private bindModel(): void {
    this.model.on('change', () => {
      this.render();
    });
  }

  private bindEvents(fragment: DocumentFragment) {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');

      fragment.querySelectorAll(selector).forEach(element => {
        element.addEventListener(eventName, (event) => eventsMap[eventKey](event));
      });
    }
  }

  render(): void {
    this.parent.innerHTML = '';

    const templateEl = document.createElement('template');
    templateEl.innerHTML = this.template();

    this.bindEvents(templateEl.content);

    this.parent.append(templateEl.content);
  }
}
