interface ViewModel {
  on: (name: string, cb: () => void) => void,
}

export abstract class View<T extends ViewModel> {
  regions: Record<string, Element> = {};

  constructor(protected parent: Element, protected model: T) {
    this.bindModel();
  }

  abstract template(): string;

  eventsMap(): Record<string, (event: Event) => void> {
    return {};
  }

  regionsMap(): { [key: string]: string } {
    return {};
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

  private bindRegions(fragment: DocumentFragment): void {
    const regionsMap = this.regionsMap();

    for (let key in regionsMap) {
      const selector = regionsMap[key];
      const element = fragment.querySelector(selector);
      if (element) {
        this.regions[key] = element;
      }
    }
  }

  onRender(): void {}

  render(): void {
    this.parent.innerHTML = '';

    const templateEl = document.createElement('template');
    templateEl.innerHTML = this.template();

    this.bindEvents(templateEl.content);
    this.bindRegions(templateEl.content);

    this.onRender();

    this.parent.append(templateEl.content);
  }
}
