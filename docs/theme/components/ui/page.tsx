import React, { FC, Fragment } from 'react';

import { styled } from '@styled';
import { PageProps } from 'docz';
import { useWindowSize } from 'react-use';

import { breakpoints } from '../../styles/responsive';
import { Sidebar, Topbar } from '../shared';
import { Container } from './container';

const Wrapper = styled.div`
  flex: 1;
  margin-top: 60px;

  ${Container} {
    display: flex;
    min-height: 100%;

    ${p =>
      p.theme.mq({
        padding: ['0 10px', '0 20px'],
      })}
  }
`;

const Document = styled.div`
  max-width: 100%;

  ${p =>
    p.theme.mq({
      paddingTop: ['10px', '30px'],
    })}
`;

// const EditPage = styled.a`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: absolute;
//   padding: 2px 8px;
//   margin: 8px;
//   border-radius: ${({ theme }) => theme.radii};
//   border: 1px solid ${({ theme }) => theme.colors.border};
//   opacity: 0.7;
//   transition: opacity 0.4s;
//   font-size: 14px;
//   color: ${({ theme }) => theme.colors.text};
//   text-decoration: none;
//   text-transform: uppercase;
//   &:hover {
//     opacity: 1;
//     background: ${({ theme }) => theme.colors.border};
//   }
//   ${({ theme }) =>
//     theme.mq({
//       visibility: ['hidden', 'hidden', 'visible'],
//       top: [0, -60, 32],
//       right: [0, 0, 40],
//     })};
// `;

export const Page: FC<PageProps> = ({ children, doc, location }) => {
  const { parent, fullpage } = doc;
  const { width } = useWindowSize();
  const isAtLeastDesktop = width > breakpoints.tablet;
  const showSidebar = Boolean(parent);
  const menuParent = parent || doc.name;
  const pathname = location && location.pathname;

  return (
    <React.Fragment>
      <Topbar />
      <Wrapper>
        {!isAtLeastDesktop && <Sidebar menu={menuParent} pathname={pathname} mobile={true} />}
        {fullpage ? (
          <Fragment>{children}</Fragment>
        ) : (
          <Container>
            {isAtLeastDesktop && showSidebar && <Sidebar menu={menuParent} pathname={pathname} />}
            <Document>{children}</Document>
          </Container>
        )}
      </Wrapper>
    </React.Fragment>
  );
};
