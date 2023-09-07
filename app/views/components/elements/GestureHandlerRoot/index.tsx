import React, { FunctionComponent } from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ReactChildren } from 'types';

export const GestureHandlerRoot: FunctionComponent<ReactChildren> = ({ children }) => (
  <GestureHandlerRootView style={styles.rootView}>{children}</GestureHandlerRootView>
);

const styles = StyleSheet.create({
  rootView: {
    flexGrow: 1,
  },
});
