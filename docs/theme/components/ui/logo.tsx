import React, { FC, ImgHTMLAttributes } from 'react';

import symbol from '@images/logo-icon.svg';
import logo from '@images/logo.svg';

export interface LogoProps extends ImgHTMLAttributes<any> {
  width?: number;
  height?: number;
  small?: boolean;
}

export const Logo: FC<LogoProps> = ({ small, ...props }) => <img {...props} src={small ? symbol : logo} />;
