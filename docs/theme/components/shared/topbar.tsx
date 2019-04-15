import React, { useContext } from 'react';
import Github from 'react-feather/dist/icons/github';
import { useWindowSize } from 'react-use';

import { Link } from 'docz';

import { Container, Logo } from '@components/ui';
import { css, styled } from '@styled';
import { breakpoints } from '@styles/responsive';
import { MainContext } from './main';
import { Hamburger } from './sidebar/hamburger';

const Wrapper = styled.div`
  z-index: 999;
  width: 100%;
  position: fixed;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.white};

  ${Container} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;

    ${p =>
      p.theme.mq({
        padding: ['0 14px', '0 20px', '0 20px', '0 20px'],
      })};
  }
`;

const LogoLink = styled(Link)`
  height: 30px;
`;

const Menu = styled.div`
  display: flex;
`;

const linkStyle = (p: any) => css`
  color: ${p.theme.colors.main};
  opacity: 0.5;
  transition: opacity 0.2s;
  font-size: 15px;
  font-weight: 400;

  &.active,
  &:visited,
  &:hover {
    color: ${p.theme.colors.main};
    opacity: 1;
  }
`;

const MenuLink = styled(Link)`
  ${linkStyle};
  margin: 0 10px;
`;

export const IconLink = styled.a`
  ${linkStyle};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 0 20px;

  svg {
    stroke: ${p => p.theme.colors.main};
  }
`;

interface MenuListItem {
  id: number;
  children: React.ReactNode;
  [key: string]: any;
}

export const TOPBAR_LINKS: MenuListItem[] = [
  {
    id: 1,
    children: 'Home',
    to: '/',
  },
  {
    id: 2,
    children: 'Documentation',
    to: '/docs/introduction',
  },
  {
    id: 3,
    children: 'Packages',
    to: '/packages',
  },
];

export const Topbar = () => {
  const { width } = useWindowSize();
  const showFullMenu = width > breakpoints.tablet;
  const { showing, setShowing } = useContext(MainContext);
  const onClickHamburger = () => setShowing((val: boolean) => !val);

  return (
    <Wrapper>
      <Container>
        <LogoLink to='/'>
          <Logo height={30} small={true} />
        </LogoLink>
        <Menu>
          {showFullMenu &&
            TOPBAR_LINKS.map(({ id, children, ...props }) => {
              const Component = props.to ? MenuLink : IconLink;
              return (
                <Component key={id} {...props}>
                  {children}
                </Component>
              );
            })}
          <IconLink href='https://github.com/ifiokjr/remirror' target='_blank'>
            <Github width={30} />
          </IconLink>
          {!showFullMenu && <Hamburger opened={showing} onClick={onClickHamburger} />}
        </Menu>
      </Container>
    </Wrapper>
  );
};
