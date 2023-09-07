import { SagaIterator } from 'redux-saga';
import { Api } from 'services/api';
import { takeEvery, call } from 'redux-saga/effects';
import { resetApp } from './actions';

function* resetAppSaga(): SagaIterator {
  yield call(Api.clearAuthToken);
}

export function* watchApp(): SagaIterator {
  yield takeEvery(resetApp.type, resetAppSaga);
}
