interface ViewModel {
  on: (name: string, cb: () => void) => void,
}

export abstract class View<T extends ViewModel> {
  constructor(protected parent: Element, protected model: T) {
    this.bindModel();
  }

  abstract template(): string;

  abstract eventsMap(): Record<string, (event: Event) => void>;

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
