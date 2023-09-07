import React, { FunctionComponent } from 'react';
import { DotIndicator, DotIndicatorProps } from 'react-native-indicators';
import { theme, moderateScale } from 'styles';
import { View } from '../Views';

export const PageLoader: FunctionComponent = () => (
  <View flex={1}>
    <MiniLoader />
  </View>
);

export const MiniLoader: FunctionComponent<DotIndicatorProps> = ({ ...props }) => {
  return <DotIndicator {...props} />;
};

MiniLoader.defaultProps = {
  color: theme.colors.black,
  count: 3,
  size: moderateScale(6),
};
