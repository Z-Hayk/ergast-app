import React from 'react';
import { PopUpMessage } from 'components';

export const popUpMessageRef = React.createRef<PopUpMessage>();
export const ShowPopUpMessage = (message: string, isError?: boolean): void => {
  popUpMessageRef.current && popUpMessageRef.current.onShow(message, isError);
};
