import React, { FunctionComponent } from 'react';
import { View } from '../elements';
import { BottomTabs } from 'types';
import { useSafeArea } from 'utils';
import { HomeIcon, FavoriteIcon } from 'assets/icons';
import { theme } from 'styles';

export interface TabBarIconProps {
  focused: boolean;
  routeName: string;
}

export const TabBarCard: FunctionComponent<TabBarIconProps> = ({ focused, routeName }) => {
  const { bottom } = useSafeArea();
  const color = focused ? theme.colors.pomegranate : theme.colors.alto;

  return (
    <View height="100%" jc="center" ai="center" pt={bottom ? 10 : 0}>
      {routeName === BottomTabs.Home && <HomeIcon color={color} />}
      {routeName === BottomTabs.Favorites && <FavoriteIcon color={color} />}
    </View>
  );
};

export const tabBarOptions = {
  tabBarShowLabel: false,
  keyboardHidesTabBar: false,
  tabBarHideOnKeyboard: false,
  style: {
    elevation: 0,
    backgroundColor: theme.colors.white,
    borderTopWidth: 1,
    borderTopColor: theme.colors.alto,
  },
};
