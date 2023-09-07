import { all, fork, AllEffect, ForkEffect } from 'redux-saga/effects';

import { watchApp } from 'modules/app/sagas';
import { watchUser } from 'modules/user/sagas';
import { watchDrivers } from 'modules/drivers/sagas';

export default function* rootSaga(): Generator<AllEffect<ForkEffect>> {
  yield all([fork(watchApp), fork(watchUser), fork(watchDrivers)]);
}
