import React, { FunctionComponent } from 'react';
import { Svg, Path } from 'react-native-svg';
import { theme } from 'styles';

export const DeleteIcon: FunctionComponent<{ color?: string }> = ({ color }) => (
  <Svg width="27" height="27" viewBox="0 0 20 20" fill="none">
    <Path
      d="M5 4V1C5 0.734784 5.10536 0.48043 5.29289 0.292893C5.48043 0.105357 5.73478 0 6 0H14C14.2652 0 14.5196 0.105357 14.7071 0.292893C14.8946 0.48043 15 0.734784 15 1V4H20V6H18V19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H3C2.73478 20 2.48043 19.8946 2.29289 19.7071C2.10536 19.5196 2 19.2652 2 19V6H0V4H5ZM11.414 12L13.182 10.232L11.768 8.818L10 10.586L8.232 8.818L6.818 10.232L8.586 12L6.818 13.768L8.232 15.182L10 13.414L11.768 15.182L13.182 13.768L11.414 12ZM7 2V4H13V2H7Z"
      fill={color}
    />
  </Svg>
);

DeleteIcon.defaultProps = {
  color: theme.colors.pomegranate,
};
