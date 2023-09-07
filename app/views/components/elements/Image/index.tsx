import React, { FunctionComponent } from 'react';
import {
  Image as BaseImage,
  ImageProps as ImagePropsBase,
  DimensionValue,
  StyleSheet,
} from 'react-native';
import { moderateScale } from 'styles';

interface ImageProps {
  style?: object;
  width?: DimensionValue;
  height?: DimensionValue;
  tintColor?: string;
}

export const Image: FunctionComponent<ImageProps & Omit<ImagePropsBase, 'width' | 'height'>> = ({
  width,
  style,
  height,
  tintColor,
  ...props
}) => {
  return <BaseImage style={[renderStyle({ width, height, tintColor }).image, style]} {...props} />;
};

const renderStyle = (props: ImageProps): { image: object } => {
  const imageStyle: ImageProps = {};
  props.tintColor && (imageStyle.tintColor = props.tintColor);

  if (props.width) {
    typeof props.width === 'string' && (imageStyle.width = props.width);
    typeof props.width === 'number' && (imageStyle.width = moderateScale(props.width));
  }
  if (props.height) {
    typeof props.height === 'string' && (imageStyle.height = props.height);
    typeof props.height === 'number' && (imageStyle.height = moderateScale(props.height));
  }

  return StyleSheet.create({
    image: {
      ...imageStyle,
    },
  });
};

Image.defaultProps = {
  width: '100%',
  height: '100%',
};
