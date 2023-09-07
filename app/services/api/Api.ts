import axios, { AxiosInstance, AxiosRequestConfig, AxiosPromise } from 'axios';
import { Any } from 'types';
import { config as baseConfig } from 'config';

export class Api {
  static instance: Api;
  axiosInstance: AxiosInstance;
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: baseConfig.API_URI,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  }

  static getInstance(): typeof Api.instance {
    if (!Api.instance) {
      Api.instance = new Api();
    }
    return Api.instance;
  }
  static getAxios(): AxiosInstance {
    return Api.getInstance().axiosInstance;
  }

  static setAuthToken(token: string | null): void {
    (Api.getAxios().defaults.headers as Any).token = token;
  }

  static clearAuthToken(): void {
    (Api.getAxios().defaults.headers as Any).token = null;
  }

  static get<T>(
    url: string,
    params: object = {},
    config: AxiosRequestConfig = {},
  ): AxiosPromise<T> {
    return Api.getAxios().get<T>(url, { params, ...config });
  }
  static post<T>(url: string, data?: object, config?: AxiosRequestConfig): AxiosPromise<T> {
    return Api.getAxios().post<T>(url, data, config);
  }
  static put<T>(url: string, data?: object, config?: AxiosRequestConfig): AxiosPromise<T> {
    return Api.getAxios().put<T>(url, data, config);
  }
  static delete<T>(url: string, data?: object): AxiosPromise<T> {
    return Api.getAxios().delete<T>(url, data);
  }
}

export default Api;
