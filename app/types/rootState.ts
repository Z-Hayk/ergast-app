import { UserTypes } from 'modules/user/types';
import { DriversTypes } from 'modules/drivers/types';

export interface RootState {
  user: UserTypes;
  drivers: DriversTypes;
}
