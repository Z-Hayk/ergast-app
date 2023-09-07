import { createAction } from '@reduxjs/toolkit';
import {
  DriversTypes,
  ChangeDriversInfoProps,
  GetNextDriversProps,
  GetDriversProps,
} from './types';
import { DriversRSPT } from 'types';

export const setDriversInfo = createAction<DriversTypes>('drivers/SET_DRIVERS_INFO');
export const changeDriversInfo = createAction<ChangeDriversInfoProps>(
  'drivers/CHANGE_DRIVERS_INFO',
);

export const getDrivers = {
  request: createAction('drivers/GET_DRIVERS_REQUEST'),
  success: createAction<GetDriversProps>('drivers/GET_DRIVERS_SUCCESS'),
  fail: createAction('drivers/GET_DRIVERS_FAIL'),
};

export const getNextDrivers = {
  request: createAction('drivers/GET_NEXT_DRIVERS_REQUEST'),
  success: createAction<GetNextDriversProps>('drivers/GET_NEXT_DRIVERS_SUCCESS'),
  fail: createAction('drivers/GET_NEXT_DRIVERS_FAIL'),
};

export const refreshDrivers = {
  request: createAction('drivers/REFRESH_DRIVERS_REQUEST'),
  success: createAction<DriversRSPT[]>('drivers/REFRESH_DRIVERS_SUCCESS'),
  fail: createAction('drivers/REFRESH_DRIVERS_FAIL'),
};
