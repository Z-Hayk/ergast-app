import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { tabBarOptions, TabBarCard } from 'components';
import { useSafeArea } from 'utils';
import { HomeScreen, FavoritesScreen } from 'views/screens/HomeStack';

const screenOptions = {
  headerShown: false,
  gestureEnabled: false,
} as const;

const options = {
  animation: 'none',
} as const;

const BottomTab = createBottomTabNavigator();
const BottomTabNavigator = (): React.ReactElement => {
  const { bottom } = useSafeArea();
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => <TabBarCard routeName={route.name} focused={focused} />,
        ...{
          ...tabBarOptions,
          tabBarStyle: { ...tabBarOptions.style, height: bottom ? 70 : 50 },
        },
        ...screenOptions,
      })}
      initialRouteName="HomeScreen"
    >
      <BottomTab.Screen name="HomeScreen" component={HomeScreen} />
      <BottomTab.Screen name="FavoritesScreen" component={FavoritesScreen} />
    </BottomTab.Navigator>
  );
};

const HomeStack = createNativeStackNavigator();
export const HomeScreens = (): React.ReactElement => (
  <HomeStack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
    <HomeStack.Screen options={options} name="Home" component={BottomTabNavigator} />
  </HomeStack.Navigator>
);
