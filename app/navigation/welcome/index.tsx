import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WelcomeScreen } from 'views/screens/WelcomeStack';

const screenOptions = {
  headerShown: false,
  gestureEnabled: false,
} as const;

const options = {
  animation: 'none',
} as const;

const WelcomeStack = createNativeStackNavigator();
export const WelcomeScreens = (): React.ReactElement => (
  <WelcomeStack.Navigator initialRouteName="WelcomeScreen" screenOptions={screenOptions}>
    <WelcomeStack.Screen options={options} name="WelcomeScreen" component={WelcomeScreen} />
  </WelcomeStack.Navigator>
);
