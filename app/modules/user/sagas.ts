import { PayloadAction } from '@reduxjs/toolkit';
import { SagaIterator } from 'redux-saga';
import { put, takeLatest, select, call } from 'redux-saga/effects';
import { ShowPopUpMessage } from 'services';
import cloneDeep from 'lodash/cloneDeep';
import { addFavorite, deleteFavorite, changeUserInfo } from './actions';
import { DriversRSPT, RootState } from 'types';

function* addFavoriteSaga({ payload }: PayloadAction<DriversRSPT>): SagaIterator {
  const favorites = yield select((state: RootState) => state.user.favorites);

  if (favorites.some((I: DriversRSPT) => payload.driverId === I.driverId)) {
    yield call(ShowPopUpMessage, 'The driver has already been added!', true);
  } else {
    const newDriver = cloneDeep(payload);
    newDriver.isFavorite = true;

    yield put(changeUserInfo({ key: 'favorites', value: [...favorites, newDriver] }));
    yield call(ShowPopUpMessage, 'The driver added successfully!');
  }
}

function* deleteFavoriteSaga({ payload }: PayloadAction<DriversRSPT>): SagaIterator {
  const favorites = yield select((state: RootState) => state.user.favorites);
  const newFavorites = favorites.filter((I: DriversRSPT) => payload.driverId !== I.driverId);

  yield call(ShowPopUpMessage, 'The driver was successfully removed!');
  yield put(changeUserInfo({ key: 'favorites', value: newFavorites }));
}

export function* watchUser(): SagaIterator {
  yield takeLatest(addFavorite.type, addFavoriteSaga);
  yield takeLatest(deleteFavorite.type, deleteFavoriteSaga);
}
