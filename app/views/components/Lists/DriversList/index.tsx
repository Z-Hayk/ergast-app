import React, { FunctionComponent, useMemo, useCallback } from 'react';
import { FlatList, View, MiniLoader, RefreshControl } from '../../elements';
import { DriverCard } from '../../Cards';
import { EmptyContent } from '../EmptyContent';
import { DriversRSPT } from 'types';
import { theme } from 'styles';

interface DriversListProps {
  data: DriversRSPT[];
  stopPagination: boolean;
  isPaginationLoader: boolean;
  isRefreshing: boolean;
  getNextPage: () => void;
  refreshPage: () => void;
  onFavorite?: (arg: DriversRSPT) => void;
}

export const DriversList: FunctionComponent<DriversListProps> = ({
  refreshPage,
  getNextPage,
  ...props
}) => {
  const renderItem = useCallback(
    ({ item, index }: { item: DriversRSPT; index: number }) => (
      <DriverCard item={item} mb={20} mt={index === 0 ? 20 : 0} onFavorite={props.onFavorite} />
    ),
    [props.data, props.onFavorite],
  );

  const footerComponent = useMemo(() => {
    if (props.isPaginationLoader) {
      return (
        <View pv={5}>
          <MiniLoader />
        </View>
      );
    }
    return null;
  }, [props.isPaginationLoader]);

  const refreshControl = useMemo(
    () => (
      <RefreshControl
        tintColor={theme.colors.black}
        colors={[theme.colors.black]}
        refreshing={props.isRefreshing}
        onRefresh={refreshPage}
        enabled
      />
    ),
    [props.isRefreshing],
  );

  return (
    <FlatList
      ListEmptyComponent={<EmptyContent title="Here Empty" />}
      initialNumToRender={20}
      onEndReachedThreshold={4}
      onEndReached={() => !props.stopPagination && getNextPage()}
      refreshControl={refreshControl}
      extraData={props.data}
      data={props.data}
      keyExtractor={(item: DriversRSPT) => item.driverId}
      renderItem={renderItem}
      ListFooterComponent={footerComponent}
    />
  );
};
