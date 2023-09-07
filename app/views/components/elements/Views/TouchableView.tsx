import React, { Fragment, FunctionComponent } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { ViewProps } from './types';
import { renderStyle } from './styles';

interface TouchableViewProps extends TouchableOpacityProps {
  onPress: () => void;
}

export const TouchableView: FunctionComponent<ViewProps & TouchableViewProps> = ({
  children,
  onPress,
  activeOpacity,
  disabled,
  style,
  ...props
}) => (
  <TouchableOpacity
    disabled={disabled}
    activeOpacity={activeOpacity}
    style={[renderStyle(props).view, style]}
    onPress={onPress}
  >
    <Fragment>{children}</Fragment>
  </TouchableOpacity>
);

TouchableView.defaultProps = {
  width: '100%',
  disabled: undefined,
  activeOpacity: 0.7,
};
