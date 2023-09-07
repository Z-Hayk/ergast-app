import React, { useMemo, FunctionComponent } from 'react';
import { TouchableView, ViewProps } from '../Views';
import { Text, TextProps } from '../Text';
import { MiniLoader } from '../Loaders';
import { ReactChildren } from 'types';
import { theme, moderateScale } from 'styles';

interface ButtonProps extends ReactChildren {
  isLoader?: boolean;
  disabled?: boolean;
  label?: string;
  onPress: () => void;
}

interface ButtonStyleProps {
  view: ViewProps;
  text: TextProps;
  loaderColor: string;
  loaderSize: number;
}

export const Button: FunctionComponent<ButtonProps & ViewProps> = ({
  label,
  isLoader,
  children,
  disabled,
  onPress,
  ...props
}) => {
  const renderStyle = useMemo((): ButtonStyleProps => {
    const style: ButtonStyleProps = {
      view: {
        br: 8,
        height: 45,
        bw: 0,
        jc: 'center',
        ai: 'center',
        fd: 'row',
        bg: theme.colors.pomegranate,
      },
      text: {
        fs: 16,
        color: theme.colors.white,
        bold: true,
      },
      loaderColor: theme.colors.white,
      loaderSize: moderateScale(6),
    };

    // if (isLight) {
    //   style.view.bg = theme.colors.pomegranate;
    //   style.text.color = theme.colors.pomegranate;
    // }

    return style;
  }, [disabled]);

  return (
    <TouchableView
      disabled={isLoader || disabled}
      onPress={onPress}
      {...renderStyle.view}
      {...props}
    >
      {isLoader ? (
        <MiniLoader size={renderStyle.loaderSize} color={renderStyle.loaderColor} />
      ) : (
        children || <Text {...renderStyle.text}>{label}</Text>
      )}
    </TouchableView>
  );
};

Button.defaultProps = {
  label: '',
  disabled: false,
  isLoader: false,
};
