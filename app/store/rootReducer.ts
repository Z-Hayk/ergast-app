import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';
import { combineReducers, Action } from '@reduxjs/toolkit';
import { RootState } from 'types';

import { resetApp } from 'modules/app/actions';
import { userReducer } from 'modules/user/slice';
import { driversReducer } from 'modules/drivers/slice';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user'],
};

const projectReducer = combineReducers<RootState>({
  user: userReducer,
  drivers: driversReducer,
});

const rootReducer = (
  state: RootState | undefined,
  action: Action,
): ReturnType<typeof projectReducer> => {
  if (action.type === resetApp.type) {
    state = {} as RootState;
  }

  return projectReducer(state, action);
};

export default persistReducer(rootPersistConfig, rootReducer);
