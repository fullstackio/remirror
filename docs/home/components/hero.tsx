import React from 'react';
import GitHubButton from 'react-github-button';
import Helmet from 'react-helmet';

import { Container, Logo } from '@components/ui';
import { btnStyle } from '@components/ui/button';
import image from '@images/builtin-components.png';
import { styled } from '@styled';
import { Link as BaseLink } from 'docz';

const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.grayExtraDark};
  background-repeat: none;
  border-bottom: 1px solid ${p => p.theme.colors.grayLight};

  ${Container} {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
  }

  ${p =>
    p.theme.mq({
      padding: ['30px 0', '50px 0'],
    })};
`;

const Subtitle = styled.h2`
  font-weight: 200;
  text-align: center;
`;

const Image = styled.img`
  margin: 60px 0;
  max-width: 100%;
  width: 1024px;
`;

const Buttons = styled.div`
  display: flex;
`;

const Link = styled(BaseLink)`
  ${btnStyle};
`;

export const Hero = () => {
  return (
    <Wrapper>
      <Helmet>
        <script src='https://fast.wistia.com/embed/medias/cl69p284xk.jsonp' async={true} />
        <script src='https://fast.wistia.com/assets/external/E-v1.js' async={true} />
      </Helmet>
      <Container>
        <Logo height={80} style={{ maxWidth: '100%' }} />
        <Subtitle>Effortlessly build your world-class text editor!</Subtitle>
        <GitHubButton type='stargazers' size='large' namespace='pedronauck' repo='docz' />
        <Image src={image} alt='Built-in components' />
        <Buttons>
          <Link to='/docs/getting-started'>Getting started</Link>
          <Link to='/docs/introduction'>Documentation</Link>
        </Buttons>
      </Container>
    </Wrapper>
  );
};
