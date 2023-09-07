import React, { Fragment, FunctionComponent } from 'react';
import { Text as BaseText, TextProps as BaseTextProps } from 'react-native';
import { TextProps } from './types';
import { ReactChildren } from 'types';
import { renderStyle } from './styles';
import { theme } from 'styles';

export const Text: FunctionComponent<BaseTextProps & TextProps & ReactChildren> = ({
  children,
  style,
  ...props
}) => (
  <BaseText style={[renderStyle(props).text, style]}>
    <Fragment>{children}</Fragment>
  </BaseText>
);

Text.defaultProps = {
  regular: true,
  color: theme.colors.black,
};

export type { TextProps };
