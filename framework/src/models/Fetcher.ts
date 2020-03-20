import axios, { AxiosPromise, AxiosResponse } from "axios";

interface HasId {
  id?: number;
}

export class Fetcher<T extends HasId> {
  constructor(public baseUrl: string) {}

  fetch(endpoint: string): Promise<T> {
    return axios.get(`${this.baseUrl}${endpoint}`).then((response: AxiosResponse): T => {
      return response.data;
    });
  }

  update(endpoint: string, data: T): AxiosPromise {
    return axios.put(`${this.baseUrl}${endpoint}`, data);
  }

  save(endpoint: string, data: T): AxiosPromise {
    return axios.post(`${this.baseUrl}${endpoint}`, data);
  }
}
