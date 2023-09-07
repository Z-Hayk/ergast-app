import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserTypes } from './types';
import { setUserInfo, changeUserInfo } from './actions';

const initialState: UserTypes = {
  initialScreen: 'Auth',
  favorites: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      setUserInfo.type,
      (state: UserTypes, { payload }: PayloadAction<UserTypes>) => ({
        ...state,
        ...payload,
      }),
    );
    builder.addCase(
      changeUserInfo.type,
      (state: UserTypes, { payload }: PayloadAction<{ key: keyof UserTypes; value: string }>) => ({
        ...state,
        [payload.key]: payload.value,
      }),
    );
  },
});

export const userReducer = userSlice.reducer;
