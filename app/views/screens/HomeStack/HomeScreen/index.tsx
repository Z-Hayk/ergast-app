import React, { FunctionComponent, useEffect } from 'react';
import { createSelector } from '@reduxjs/toolkit';
import { GeneralView, PageLoader, DriversList } from 'components';
import * as DriversActions from 'modules/drivers/actions';
import * as UserActions from 'modules/user/actions';
import { AsyncStatus, RootState } from 'types';
import { useAction, useSelector } from 'utils';

const selectDrivers = (state: RootState): RootState['drivers'] => state.drivers;
const driversState = createSelector([selectDrivers], (drivers: RootState['drivers']) => {
  return {
    data: drivers.data,
    stopPagination: drivers.stopPagination,
    getDriversReqStat: drivers.getDriversReqStat,
    isPaginationLoader: drivers.isPaginationLoader,
    refreshDriversReqStat: drivers.refreshDriversReqStat,
  };
});

export const HomeScreen: FunctionComponent = () => {
  const drivers = useSelector(driversState);

  const getDrivers = useAction(DriversActions.getDrivers.request);
  const getNextDrivers = useAction(DriversActions.getNextDrivers.request);
  const refreshDrivers = useAction(DriversActions.refreshDrivers.request);
  const addFavorite = useAction(UserActions.addFavorite);

  useEffect(() => {
    getDrivers();
  }, []);

  return (
    <GeneralView>
      {drivers.getDriversReqStat === AsyncStatus.LOADING ? (
        <PageLoader />
      ) : (
        <DriversList
          onFavorite={addFavorite}
          data={drivers.data}
          stopPagination={drivers.stopPagination}
          isPaginationLoader={drivers.isPaginationLoader}
          isRefreshing={drivers.refreshDriversReqStat === AsyncStatus.LOADING}
          getNextPage={getNextDrivers}
          refreshPage={refreshDrivers}
        />
      )}
    </GeneralView>
  );
};
