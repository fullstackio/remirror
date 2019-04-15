import React, { ComponentType, FC, HTMLAttributes, MouseEventHandler, useState } from 'react';
import { Button as BaseButton } from '../button';

interface ButtonSwapProps extends HTMLAttributes<HTMLElement> {
  swap: JSX.Element;
  as?: ComponentType<any>;
  onClick: MouseEventHandler<HTMLElement>;
}

export const ButtonSwap: FC<ButtonSwapProps> = ({
  as: Button = BaseButton,
  onClick,
  swap,
  children,
  ...props
}) => {
  const hasSwap = Boolean(swap);
  const [on, setOn] = useState(() => false);
  const toggle = () => setOn(s => !s);

  const handleClick: MouseEventHandler<HTMLElement> = ev => {
    if (onClick) {
      onClick(ev);
    }
    if (hasSwap) {
      toggle();
      setTimeout(toggle, 500);
    }
  };

  return (
    <Button onClick={handleClick} {...props}>
      {on ? swap : children}
    </Button>
  );
};
