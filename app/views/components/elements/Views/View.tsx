import React, { Fragment, FunctionComponent } from 'react';
import { View as BaseView } from 'react-native';
import { ViewProps } from './types';
import { ReactChildren } from 'types';
import { renderStyle } from './styles';

export const View: FunctionComponent<ViewProps & ReactChildren> = ({
  children,
  style,
  ...props
}) => (
  <BaseView style={[renderStyle(props).view, style]}>
    <Fragment>{children}</Fragment>
  </BaseView>
);

View.defaultProps = {
  width: '100%',
};
