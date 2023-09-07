import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  DriversTypes,
  ChangeDriversInfoProps,
  GetNextDriversProps,
  GetDriversProps,
} from './types';
import {
  changeDriversInfo,
  setDriversInfo,
  getDrivers,
  getNextDrivers,
  refreshDrivers,
} from './actions';
import { AsyncStatus, DriversRSPT } from 'types';

const initialState: DriversTypes = {
  data: [],
  offset: 0,

  stopPagination: false,
  isPaginationLoader: false,

  getDriversReqStat: AsyncStatus.LOADING,
  getNextDriversReqStat: AsyncStatus.NONE,
  refreshDriversReqStat: AsyncStatus.NONE,
};

const driversSlice = createSlice({
  name: 'drivers',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      setDriversInfo.type,
      (state: DriversTypes, { payload }: PayloadAction<DriversTypes>) => ({
        ...state,
        ...payload,
      }),
    );
    builder.addCase(
      changeDriversInfo.type,
      (state: DriversTypes, { payload }: PayloadAction<ChangeDriversInfoProps>) => ({
        ...state,
        [payload.key]: payload.value,
      }),
    );

    builder.addCase(
      getDrivers.success.type,
      (state: DriversTypes, { payload }: PayloadAction<GetDriversProps>) => ({
        ...state,
        data: payload.data,
        offset: payload.offset,
        getDriversReqStat: AsyncStatus.SUCCESS,
      }),
    );
    builder.addCase(getDrivers.fail.type, (state: DriversTypes) => ({
      ...state,
      getDriversReqStat: AsyncStatus.FAIL,
    }));

    builder.addCase(getNextDrivers.request.type, (state: DriversTypes) => ({
      ...state,
      isPaginationLoader: true,
      getNextDriversReqStat: AsyncStatus.LOADING,
    }));
    builder.addCase(
      getNextDrivers.success.type,
      (state: DriversTypes, { payload }: PayloadAction<GetNextDriversProps>) => ({
        ...state,
        data: payload.data,
        offset: payload.offset,
        stopPagination: payload.stopPagination,
        isPaginationLoader: false,
        getNextDriversReqStat: AsyncStatus.SUCCESS,
      }),
    );
    builder.addCase(getNextDrivers.fail.type, (state: DriversTypes) => ({
      ...state,
      getNextDriversReqStat: AsyncStatus.FAIL,
    }));

    builder.addCase(refreshDrivers.request.type, (state: DriversTypes) => ({
      ...state,
      refreshDriversReqStat: AsyncStatus.LOADING,
    }));
    builder.addCase(
      refreshDrivers.success.type,
      (state: DriversTypes, { payload }: PayloadAction<DriversRSPT[]>) => ({
        ...state,
        data: payload,
        refreshDriversReqStat: AsyncStatus.SUCCESS,
      }),
    );
    builder.addCase(refreshDrivers.fail.type, (state: DriversTypes) => ({
      ...state,
      refreshDriversReqStat: AsyncStatus.FAIL,
    }));
  },
});

export const driversReducer = driversSlice.reducer;
