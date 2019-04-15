import React, { AnchorHTMLAttributes, FC, useMemo } from 'react';

import { styled } from '@styled';
import { useConfig, useDocs } from 'docz';

export const LinkStyled = styled.a<any>`
  &,
  &:visited,
  &:active {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.link};
  }
  &:hover {
    color: ${({ theme }) => theme.colors.link};
  }
  ${({ theme }) => theme.styles.link};
`;

type LinkProps = AnchorHTMLAttributes<any>;
export const Link: FC<LinkProps> = ({ href, ...props }) => {
  const { separator, linkComponent: Link } = useConfig();
  const docs = useDocs();
  const toCheck = useMemo(
    () =>
      [
        location.pathname
          .split(separator)
          .slice(0, -1)
          .join(separator)
          .slice(1),
        (href || '').replace(/^(?:\.\/)+/gi, ''),
      ].join('/'),
    [separator],
  );

  const matched = docs && docs.find(doc => doc.filepath === toCheck);
  const nHref = matched ? matched.route : href;
  const isInternal = nHref && nHref.startsWith('/');

  return isInternal ? <LinkStyled as={Link} {...props} to={nHref} /> : <LinkStyled {...props} href={nHref} />;
};
