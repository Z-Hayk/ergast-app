import React, { FunctionComponent, useCallback } from 'react';
import { FlatList } from '../../elements';
import { DriverCard } from '../../Cards';
import { EmptyContent } from '../EmptyContent';
import { DriversRSPT } from 'types';

interface DriversListProps {
  data: DriversRSPT[];
  onDelete?: (arg: DriversRSPT) => void;
}

export const FavoritesList: FunctionComponent<DriversListProps> = ({ ...props }) => {
  const renderItem = useCallback(
    ({ item, index }: { item: DriversRSPT; index: number }) => (
      <DriverCard item={item} mb={20} mt={index === 0 ? 20 : 0} onDelete={props.onDelete} />
    ),
    [props.data, props.onDelete],
  );

  return (
    <FlatList
      ListEmptyComponent={<EmptyContent title="Here Empty" />}
      initialNumToRender={20}
      onEndReachedThreshold={1}
      extraData={props.data}
      data={props.data}
      keyExtractor={(item: DriversRSPT) => item.driverId}
      renderItem={renderItem}
    />
  );
};
