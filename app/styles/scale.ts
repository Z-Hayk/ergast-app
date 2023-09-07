import { config } from 'config';
import { ScreenHeight, ScreenWidth } from 'utils';

const [shortDimension, longDimension] =
  ScreenWidth < ScreenHeight ? [ScreenWidth, ScreenHeight] : [ScreenHeight, ScreenWidth];

// react-native-size-matters
//Default guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = config.SIZE_MATTERS_BASE_WIDTH || 350;
const guidelineBaseHeight = config.SIZE_MATTERS_BASE_HEIGHT || 680;

export const scale = (size: number): number => (shortDimension / guidelineBaseWidth) * size;
export const verticalScale = (size: number): number => (longDimension / guidelineBaseHeight) * size;
export const moderateScale = (size: number, factor = 0.3): number =>
  size + (scale(size) - size) * factor;
export const moderateVerticalScale = (size: number, factor = 0.5): number =>
  size + (verticalScale(size) - size) * factor;

export const s = scale;
export const vs = verticalScale;
export const ms = moderateScale;
export const mvs = moderateVerticalScale;
