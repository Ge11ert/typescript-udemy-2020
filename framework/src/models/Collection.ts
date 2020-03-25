import axios, { AxiosResponse } from 'axios';
import { Eventing } from './Eventing';

export class Collection<Model, ModelProps> {
  models: Model[] = [];
  events: Eventing = new Eventing();

  constructor(
    private baseUrl: string,
    private modelFabric: (props: ModelProps) => Model,
  ) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.baseUrl).then((response: AxiosResponse) => {
      const modelInstances: Model[] = response.data.map(
        (item: ModelProps) => this.modelFabric(item)
      );
      this.models = this.models.concat(modelInstances);
      this.trigger('change');
    });
  }
}
