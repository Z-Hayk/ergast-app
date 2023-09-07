import Api from './Api';
import { AxiosPromise } from 'axios';
import { DriversRQST } from 'types';

export class Drivers {
  static getDriversReq = (data: DriversRQST): AxiosPromise =>
    Api.get(`/f1/drivers.json?limit=${data.limit}&offset=${data.offset}`);
}
