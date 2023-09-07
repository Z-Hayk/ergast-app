import React, { useMemo } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Any, RootState } from 'types';
import { dispatch } from 'store';
import { ActionCreator, bindActionCreators } from '@reduxjs/toolkit';
import {
  useDispatch as baseUseDispatch,
  useSelector as useSelectorBase,
  TypedUseSelectorHook,
} from 'react-redux';

export const useDispatch: () => typeof dispatch = baseUseDispatch;
export const useAction = <T extends ActionCreator<Any>>(action: T): T => {
  const baseDispatch = useDispatch();
  return useMemo(() => bindActionCreators(action, baseDispatch), [baseDispatch]);
};
export const useSelector: TypedUseSelectorHook<RootState> = useSelectorBase;

export const navigationRef = React.createRef<Any>();

export const useSafeArea = useSafeAreaInsets;
