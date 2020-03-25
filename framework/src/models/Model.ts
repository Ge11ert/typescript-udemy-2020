interface Fetcher<T> {
  fetch(id: number): Promise<T>;
  update(id: number, data: T): Promise<any>;
  save(data: T): Promise<any>;
}

interface Events {
  on(evtName: string, cb: () => void): void;
  trigger(evtName: string): void;
}

interface HasId {
  id?: number;
}

export class Model<T extends HasId> {
  constructor(
    private attributes: T,
    private events: Events,
    private fetcher: Fetcher<T>,
  ) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get<K extends keyof T>(attrName: K): T[K] {
    return this.attributes[attrName];
  }

  set(newAttributes: Partial<T>): void {
    this.attributes = {
      ...this.attributes,
      ...newAttributes,
    };
    this.events.trigger('change');
  }

  fetch(): void | never {
    const id = this.get('id');

    if (typeof id !== 'number') {
      throw new Error()
    }

    this.fetcher.fetch(id).then((responseData: T) => {
      this.set(responseData);
    });
  }

  save() {
    const id = this.get('id');
    const triggerSave = () => { this.events.trigger('save'); };
    const triggerError = () => { this.events.trigger('save_error'); };

    if (id) {
      this.fetcher.update(id, this.attributes)
        .then(triggerSave)
        .catch(triggerError);
    } else {
      this.fetcher.save(this.attributes)
        .then(triggerSave)
        .catch(triggerError);
    }
  }
}
