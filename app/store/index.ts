import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import { persistStore } from 'redux-persist';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const index = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    }).prepend(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default index;
export const { dispatch } = index;
export const { getState } = index;
export const persistor = persistStore(index);
// persistor.purge();
