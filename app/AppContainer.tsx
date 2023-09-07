import React, { FunctionComponent } from 'react';
import { StatusBar, UIManager } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { PopUpMessage } from 'components';
import { popUpMessageRef } from 'services';
import { WelcomeScreens, HomeScreens } from 'navigation';
import { isAndroid, navigationRef, useSelector } from 'utils';

if (isAndroid && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export const AppContainer: FunctionComponent = () => {
  const initialScreen = useSelector(state => state.user.initialScreen);

  let Navigation = WelcomeScreens;
  initialScreen === 'Home' && (Navigation = HomeScreens);

  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar backgroundColor="transparent" translucent={true} barStyle="dark-content" />
      <Navigation />

      <PopUpMessage ref={popUpMessageRef} />
    </NavigationContainer>
  );
};
