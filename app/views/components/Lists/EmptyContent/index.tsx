import React, { FunctionComponent } from 'react';
import { View, Text } from '../../elements';

interface EmptyContentProps {
  title: string;
}

export const EmptyContent: FunctionComponent<EmptyContentProps> = ({ title }) => (
  <View flex={1} ai="center" mt={20}>
    <Text fs={32}>{title}</Text>
  </View>
);
