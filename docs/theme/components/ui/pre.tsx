import 'prismjs';
import 'prismjs/components/prism-bash.min';
import 'prismjs/components/prism-json.min';
import 'prismjs/components/prism-jsx.min';
import 'prismjs/components/prism-markdown.min';
import 'prismjs/components/prism-typescript.min';

import React, { useEffect, useRef } from 'react';

import { styled } from '@styled';
import cx from 'classnames';
// tslint:disable-next-line:no-duplicate-imports
import prism from 'prismjs';

const PreStyled = styled.pre`
  ${p => p.theme.styles.pre};
`;

interface PreProps {
  children: any;
  className?: string;
}

export const Pre: React.FC<PreProps> = ({ children, className }) => {
  const preRef = useRef<any>(null);
  const hasChildren = children && children.props;
  const childrenProps = hasChildren && children.props.props;
  const childrenClassName = childrenProps && childrenProps.className;

  console.log(children, childrenClassName, className);

  useEffect(() => {
    if (preRef && preRef.current) {
      prism.highlightElement(preRef.current);
    }
  });

  return (
    <PreStyled ref={preRef} className={cx('react-prism', className, childrenClassName)}>
      {hasChildren ? children.props.children : children}
    </PreStyled>
  );
};
