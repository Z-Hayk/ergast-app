import { createAction } from '@reduxjs/toolkit';
import { UserTypes } from './types';
import { DriversRSPT } from 'types';

export const setUserInfo = createAction<UserTypes>('user/SET_USER_INFO');
export const changeUserInfo = createAction<{ key: keyof UserTypes; value: string | DriversRSPT[] }>(
  'user/CHANGE_USER_INFO',
);

export const addFavorite = createAction<DriversRSPT>('user/ADD_FAVORITE');
export const deleteFavorite = createAction<DriversRSPT>('user/DELETE_FAVORITE');
