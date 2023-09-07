import { SagaIterator } from 'redux-saga';
import { Drivers } from 'services/api';
import { ShowPopUpMessage } from 'services';
import { put, takeLatest, call, select, delay } from 'redux-saga/effects';
import { getDrivers, getNextDrivers, refreshDrivers } from './actions';
import { GetDriversReqRSPT, RootState } from 'types';

const PAGINATION_OFFSET = 10;
const PAGINATION_LIMIT = 20;

/**
 * @param res
 * @desc This function is written so that you can view the response data
 */
const FOR_DEBUGGING = (res: GetDriversReqRSPT): void => {
  // eslint-disable-next-line no-console
  console.log('response data: ', res.data);
  // eslint-disable-next-line no-console
  console.log('response data length:', res.data.MRData.DriverTable.Drivers.length);
};

function* getDriversSaga(): SagaIterator {
  const limit = PAGINATION_OFFSET;

  try {
    const driversData: GetDriversReqRSPT = yield call(Drivers.getDriversReq, {
      limit,
      offset: 0,
    });

    FOR_DEBUGGING(driversData);

    yield put(
      getDrivers.success({ data: driversData.data.MRData.DriverTable.Drivers, offset: limit }),
    );
  } catch (error) {
    yield put(getDrivers.fail());
    yield call(ShowPopUpMessage, 'Error', true);
  }
}

function* getNextDriversSaga(): SagaIterator {
  const { offset, data } = yield select((state: RootState) => state.drivers);

  try {
    const driversData: GetDriversReqRSPT = yield call(Drivers.getDriversReq, {
      limit: PAGINATION_LIMIT,
      offset,
    });

    FOR_DEBUGGING(driversData);

    const newData = driversData.data.MRData.DriverTable.Drivers;
    const payloadObj = {
      data: [...data, ...(newData || [])],
      stopPagination: false,
      offset: offset + PAGINATION_LIMIT,
    };

    if (newData.length === PAGINATION_LIMIT) {
      yield put(getNextDrivers.success(payloadObj));
    } else {
      payloadObj.stopPagination = true;
      yield put(getNextDrivers.success(payloadObj));
    }
  } catch (error) {
    yield put(getNextDrivers.fail());
    yield call(ShowPopUpMessage, 'Error', true);
  }
}

function* refreshDriversSaga(): SagaIterator {
  const { offset } = yield select((state: RootState) => state.drivers);

  yield delay(500);

  try {
    const driversData: GetDriversReqRSPT = yield call(Drivers.getDriversReq, {
      limit: offset,
      offset: 0,
    });

    FOR_DEBUGGING(driversData);

    yield put(refreshDrivers.success(driversData.data.MRData.DriverTable.Drivers));
  } catch (error) {
    yield put(refreshDrivers.fail());
    yield call(ShowPopUpMessage, 'Error', true);
  }
}

export function* watchDrivers(): SagaIterator {
  yield takeLatest(getDrivers.request.type, getDriversSaga);
  yield takeLatest(getNextDrivers.request.type, getNextDriversSaga);
  yield takeLatest(refreshDrivers.request.type, refreshDriversSaga);
}
