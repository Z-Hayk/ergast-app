import React, { FunctionComponent } from 'react';
import { Svg, Path } from 'react-native-svg';
import { theme } from 'styles';

export const HomeIcon: FunctionComponent<{ color?: string }> = ({ color }) => (
  <Svg width="30" height="30" viewBox="0 0 24 24" fill="none">
    <Path d="M9.6 22.2V15H14.4V22.2H20.4V12.6H24L12 1.79999L0 12.6H3.6V22.2H9.6Z" fill={color} />
  </Svg>
);

HomeIcon.defaultProps = {
  color: theme.colors.alto,
};
