import React, { FunctionComponent } from 'react';
import { GeneralView, Text, View, Button } from 'components';
import * as UserActions from 'modules/user/actions';
import { useAction } from 'utils';

export const WelcomeScreen: FunctionComponent = () => {
  const changeUserInfo = useAction(UserActions.changeUserInfo);

  return (
    <GeneralView>
      <View flex={1} ph={21} jc="center" ai="center">
        <Text ta="center" bold fs={50}>
          Welcome
        </Text>
        <Button
          mb={100}
          mt={50}
          label="Start testing"
          onPress={() => changeUserInfo({ key: 'initialScreen', value: 'Home' })}
        />
      </View>
    </GeneralView>
  );
};
