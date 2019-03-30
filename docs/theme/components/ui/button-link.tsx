import { styled } from '@styled';
import React, { FC } from 'react';

import { ButtonProps, ButtonStyled } from './button';

const Link = styled(ButtonStyled)`
  display: block;
  text-align: center;
`;

type ButtonLinkProps = ButtonProps & React.AnchorHTMLAttributes<any>;

export const ButtonLink: FC<ButtonLinkProps> = ({ className, ...props }) => (
  // @ts-ignore
  <Link as='a' className={className} {...props} />
);
