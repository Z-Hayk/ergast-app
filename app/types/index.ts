/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { ImageSourcePropType, RefreshControlProps as RefreshControlPropsBase } from 'react-native';

export * from './rootState';
export * from './responseData';
export * from './requestData';
export * from './enums';

export type ReactChildren = { children?: React.ReactNode };
export type Any = any;
export type ResourceType = ImageSourcePropType;
export type RefreshControlProps = React.ReactElement<RefreshControlPropsBase>;
