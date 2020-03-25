import axios, { AxiosPromise, AxiosResponse } from "axios";

interface HasId {
  id?: number;
}

export class Fetcher<T extends HasId> {
  constructor(
    public baseUrl: string,
    public endpoint: string
  ) {}

  fetch(id: number): Promise<T> {
    const url = `${this.baseUrl}${this.endpoint}/${id}`;
    return axios.get(url).then((response: AxiosResponse): T => {
      return response.data;
    });
  }

  update(id: number, data: T): AxiosPromise {
    const url = `${this.baseUrl}${this.endpoint}/${id}`;
    return axios.put(url, data);
  }

  save(data: T): AxiosPromise {
    const url = `${this.baseUrl}${this.endpoint}`;
    return axios.post(url, data);
  }
}
