import { Platform, Dimensions } from 'react-native';

export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';

export const ScreenWidth = Dimensions.get('window').width;
export const ScreenHeight = isIOS
  ? Dimensions.get('window').height
  : Dimensions.get('screen').height;
