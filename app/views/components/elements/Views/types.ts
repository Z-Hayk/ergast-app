import { ViewProps as BaseViewProps, DimensionValue, AnimatableNumericValue } from 'react-native';

export interface ViewProps extends BaseViewProps {
  pv?: DimensionValue; // paddingVertical
  ph?: DimensionValue; // paddingHorizontal
  pl?: DimensionValue; // paddingLeft
  pr?: DimensionValue; // paddingRight
  pt?: DimensionValue; // paddingTop
  pb?: DimensionValue; // paddingBottom

  mv?: DimensionValue; // marginVertical
  mh?: DimensionValue; // marginHorizontal
  ml?: DimensionValue; // marginLeft
  mr?: DimensionValue; // marginRight
  mt?: DimensionValue; // marginTop
  mb?: DimensionValue; // marginBottom

  bc?: string; // borderColor
  bw?: number; // borderWidth
  br?: number; // borderRadius
  gap?: number; // gap

  width?: DimensionValue; // width
  height?: DimensionValue; // height
  minHeight?: DimensionValue; // height

  top?: DimensionValue; // top
  bottom?: DimensionValue; // bottom
  left?: DimensionValue; // left
  right?: DimensionValue; // right

  bg?: string; // backgroundColor
  fd?: 'row' | 'column' | 'row-reverse' | 'column-reverse'; // flexDirection
  jc?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'; // justifyContent
  ai?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'; // alignItems
  ta?: 'auto' | 'left' | 'right' | 'center' | 'justify'; // textAlign
  fw?: 'wrap' | 'nowrap'; // flexWrap
  position?: 'absolute' | 'relative'; // position
  overflow?: 'hidden' | 'visible' | 'scroll'; // overflow
  flex?: number; // flex
  opacity?: AnimatableNumericValue; // opacity
  zi?: number; // zIndex
}

export interface ViewStyleProps {
  paddingVertical?: DimensionValue;
  paddingHorizontal?: DimensionValue;
  paddingLeft?: DimensionValue;
  paddingRight?: DimensionValue;
  paddingTop?: DimensionValue;
  paddingBottom?: DimensionValue;

  marginVertical?: DimensionValue;
  marginHorizontal?: DimensionValue;
  marginLeft?: DimensionValue;
  marginRight?: DimensionValue;
  marginTop?: DimensionValue;
  marginBottom?: DimensionValue;

  borderColor?: string;
  borderWidth?: number;
  borderRadius?: number;
  gap?: number;

  width?: DimensionValue;
  height?: DimensionValue;
  minHeight?: DimensionValue;

  top?: DimensionValue;
  bottom?: DimensionValue;
  left?: DimensionValue;
  right?: DimensionValue;

  backgroundColor?: string;
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  position?: 'absolute' | 'relative';
  overflow?: 'hidden' | 'visible' | 'scroll';
  flex?: number;
  opacity?: AnimatableNumericValue;
  zIndex?: number;
}
