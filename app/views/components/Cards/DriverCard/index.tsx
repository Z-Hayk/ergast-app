import React, { FunctionComponent } from 'react';
import { View, Text, TouchableView, ViewProps } from '../../elements';
import { DriversRSPT } from 'types';
import { DeleteIcon, FavoriteIcon } from 'assets/icons';
import { theme } from 'styles';

interface DriverCardProps extends ViewProps {
  item: DriversRSPT;
  onFavorite?: (arg: DriversRSPT) => void;
  onDelete?: (arg: DriversRSPT) => void;
}

export const DriverCard: FunctionComponent<DriverCardProps> = ({
  item,
  onFavorite,
  onDelete,
  ...props
}) => (
  <View ph={20} {...props}>
    <View br={8} pv={10} ph={10} bg={theme.colors.alto} gap={10}>
      <View fd="row" ai="center">
        <View width="auto" mr={10}>
          <Text fs={25}>{item.familyName}</Text>
        </View>
        <Text fs={25}>{item.givenName}</Text>
        <View fd="row" width="auto" flex={1} jc="flex-end">
          {item.isFavorite ? (
            <TouchableView width="auto" onPress={() => onDelete && onDelete(item)}>
              <DeleteIcon />
            </TouchableView>
          ) : (
            <TouchableView width="auto" onPress={() => onFavorite && onFavorite(item)}>
              <FavoriteIcon />
            </TouchableView>
          )}
        </View>
      </View>

      <Text>{item.nationality}</Text>
      <Text>{item.dateOfBirth}</Text>
      <Text>{item.driverId}</Text>
    </View>
  </View>
);
