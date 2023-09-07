import React, { FunctionComponent } from 'react';
import { GeneralView, FavoritesList } from 'components';
import * as UserActions from 'modules/user/actions';
import { useAction, useSelector } from 'utils';

export const FavoritesScreen: FunctionComponent = () => {
  const favorites = useSelector(state => state.user.favorites);

  const deleteFavorite = useAction(UserActions.deleteFavorite);

  return (
    <GeneralView>
      <FavoritesList onDelete={deleteFavorite} data={favorites} />
    </GeneralView>
  );
};
