import { ViewProps, ViewStyleProps } from './types';
import { StyleSheet } from 'react-native';
import { moderateScale } from 'styles';

export const renderStyle = (props: ViewProps): { view: object } => {
  const viewStyle: ViewStyleProps = {};
  if (props.pv) {
    typeof props.pv === 'string' && (viewStyle.paddingVertical = props.pv);
    typeof props.pv === 'number' && (viewStyle.paddingVertical = moderateScale(props.pv));
  }
  if (props.ph) {
    typeof props.ph === 'string' && (viewStyle.paddingHorizontal = props.ph);
    typeof props.ph === 'number' && (viewStyle.paddingHorizontal = moderateScale(props.ph));
  }
  if (props.pb) {
    typeof props.pb === 'string' && (viewStyle.paddingBottom = props.pb);
    typeof props.pb === 'number' && (viewStyle.paddingBottom = moderateScale(props.pb));
  }
  if (props.pt) {
    typeof props.pt === 'string' && (viewStyle.paddingTop = props.pt);
    typeof props.pt === 'number' && (viewStyle.paddingTop = moderateScale(props.pt));
  }
  if (props.pl) {
    typeof props.pl === 'string' && (viewStyle.paddingLeft = props.pl);
    typeof props.pl === 'number' && (viewStyle.paddingLeft = moderateScale(props.pl));
  }
  if (props.pr) {
    typeof props.pr === 'string' && (viewStyle.paddingRight = props.pr);
    typeof props.pr === 'number' && (viewStyle.paddingRight = moderateScale(props.pr));
  }

  if (props.mv !== undefined) {
    typeof props.mv === 'string' && (viewStyle.marginVertical = props.mv);
    typeof props.mv === 'number' && (viewStyle.marginVertical = moderateScale(props.mv));
  }
  if (props.mh) {
    typeof props.mh === 'string' && (viewStyle.marginHorizontal = props.mh);
    typeof props.mh === 'number' && (viewStyle.marginHorizontal = moderateScale(props.mh));
  }
  if (props.mb) {
    typeof props.mb === 'string' && (viewStyle.marginBottom = props.mb);
    typeof props.mb === 'number' && (viewStyle.marginBottom = moderateScale(props.mb));
  }
  if (props.mt) {
    typeof props.mt === 'string' && (viewStyle.marginTop = props.mt);
    typeof props.mt === 'number' && (viewStyle.marginTop = moderateScale(props.mt));
  }
  if (props.ml) {
    typeof props.ml === 'string' && (viewStyle.marginLeft = props.ml);
    typeof props.ml === 'number' && (viewStyle.marginLeft = moderateScale(props.ml));
  }
  if (props.mr) {
    typeof props.mr === 'string' && (viewStyle.marginRight = props.mr);
    typeof props.mr === 'number' && (viewStyle.marginRight = moderateScale(props.mr));
  }

  props.bc && (viewStyle.borderColor = props.bc);
  props.bw && (viewStyle.borderWidth = moderateScale(props.bw));
  props.br && (viewStyle.borderRadius = moderateScale(props.br));
  props.gap && (viewStyle.gap = moderateScale(props.gap));

  if (props.width) {
    typeof props.width === 'string' && (viewStyle.width = props.width);
    typeof props.width === 'number' && (viewStyle.width = moderateScale(props.width));
  }
  if (props.height) {
    typeof props.height === 'string' && (viewStyle.height = props.height);
    typeof props.height === 'number' && (viewStyle.height = moderateScale(props.height));
  }
  if (props.minHeight) {
    typeof props.minHeight === 'string' && (viewStyle.minHeight = props.minHeight);
    typeof props.minHeight === 'number' && (viewStyle.minHeight = moderateScale(props.minHeight));
  }

  if (typeof props.top === 'number') {
    viewStyle.top = moderateScale(props.top);
  }
  if (typeof props.bottom === 'number') {
    viewStyle.bottom = moderateScale(props.bottom);
  }
  if (typeof props.left === 'number') {
    viewStyle.left = moderateScale(props.left);
  }
  if (typeof props.right === 'number') {
    viewStyle.right = moderateScale(props.right);
  }

  props.bg && (viewStyle.backgroundColor = props.bg);
  props.fd && (viewStyle.flexDirection = props.fd);
  props.jc && (viewStyle.justifyContent = props.jc);
  props.ai && (viewStyle.alignItems = props.ai);
  props.ta && (viewStyle.textAlign = props.ta);
  props.fw && (viewStyle.flexWrap = props.fw);
  props.position && (viewStyle.position = props.position);
  props.overflow && (viewStyle.overflow = props.overflow);
  props.flex && (viewStyle.flex = props.flex);
  props.opacity && (viewStyle.opacity = props.opacity);
  props.zi && (viewStyle.zIndex = props.zi);

  return StyleSheet.create({
    view: {
      ...viewStyle,
    },
  });
};
