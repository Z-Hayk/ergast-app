import React, { FunctionComponent } from 'react';
import { Svg, Path } from 'react-native-svg';
import { theme } from 'styles';

export const FavoriteIcon: FunctionComponent<{ color?: string }> = ({ color }) => (
  <Svg width="27" height="27" viewBox="0 0 24 24" fill="none">
    <Path d="M3.09619 0V23.9774L12.1311 14.7497L20.9038 24V0H3.09619Z" fill={color} />
  </Svg>
);

FavoriteIcon.defaultProps = {
  color: theme.colors.pomegranate,
};
