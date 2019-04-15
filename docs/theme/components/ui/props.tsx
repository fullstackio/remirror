import React, { FC, useMemo } from 'react';

import { styled } from '@styled';
import { PropsComponentProps, useComponents } from 'docz';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  & ~ & {
    margin-top: 20px;
  }
`;

const Title = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.sidebarBg};
`;

const PropName = styled.span`
  background: ${({ theme }) => theme.colors.sidebarBg};
  color: ${({ theme }) => theme.colors.primary};
  padding: 5px 10px;
  border-radius: 4px 4px 0 0;
  font-size: 16px;
  font-weight: 500;
  & ~ & {
    margin-left: 5px;
  }
`;

const PropType = styled(PropName)`
  color: ${({ theme }) => theme.colors.blockquoteColor};
  background: ${({ theme }) => theme.colors.sidebarBg};
  font-weight: 400;
`;

const PropDefaultValue = styled(PropType)`
  background: transparent;
  padding-left: 0;
  padding-right: 0;
`;

const PropRequired = styled(PropType)`
  flex: 1;
  text-align: right;
  background: transparent;
  color: ${({ theme }) => theme.colors.blockquoteColor};
  opacity: 0.5;
`;

export const Props: FC<PropsComponentProps> = ({ props, getPropType }) => {
  const entries = Object.entries(props);
  const components = useComponents();
  const Paragraph = useMemo(
    () => styled(components.P || 'p')`
      font-size: 16px;
      color: ${({ theme }) => theme.colors.sidebarTex};
    `,
    [],
  );

  return (
    <React.Fragment>
      {entries.map(([key, prop]) => {
        if (!prop.type && !prop.flowType) {
          return null;
        }
        return (
          <Wrapper key={key}>
            <Title>
              <PropName>{key}</PropName>
              <PropType>{getPropType(prop)}</PropType>
              {prop.defaultValue && (
                <PropDefaultValue>
                  {prop.defaultValue.value === "''" ? (
                    <em>= [Empty String]</em>
                  ) : (
                    <em>= {prop.defaultValue.value.replace(/\'/g, '"')}</em>
                  )}
                </PropDefaultValue>
              )}
              {prop.required && (
                <PropRequired>
                  <em>required</em>
                </PropRequired>
              )}
            </Title>
            {prop.description && <Paragraph>{prop.description}</Paragraph>}
          </Wrapper>
        );
      })}
    </React.Fragment>
  );
};
