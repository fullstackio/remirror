import * as React from 'react';

import { styled } from '@styled';

const Wrapper = styled.div`
  overflow-x: auto;
  padding: 2px;
  margin-bottom: 30px;
  ${props =>
    props.theme.mq({
      marginBottom: [20, 40],
      maxWidth: ['calc(100vw - 40px)', 'calc(100vw - 80px)', '100%'],
    })};
`;

const TableStyled = styled.table`
  padding: 0;
  table-layout: auto;
  box-shadow: 0 0 0 1px ${props => props.theme.colors.border};
  background-color: transparent;
  border-spacing: 0;
  border-collapse: collapse;
  border-style: hidden;
  border-radius: ${props => props.theme.radii};
  font-size: 14px;
  color: ${props => props.theme.colors.tableColor};
  ${props =>
    props.theme.mq({
      overflowX: ['initial', 'initial', 'initial', 'hidden'],
      display: ['block', 'block', 'block', 'table'],
    })}
  & thead {
    color: ${props => props.theme.colors.theadColor};
    background: ${props => props.theme.colors.theadBg};
  }
  & thead th {
    font-weight: 400;
    padding: 20px 20px;
    &:nth-of-type(1) {
      ${props =>
        props.theme.mq({
          width: ['20%', '20%', '20%', 'auto'],
        })};
    }
    &:nth-of-type(2) {
      ${props =>
        props.theme.mq({
          width: ['10%', '10%', '10%', 'auto'],
        })};
    }
    &:nth-of-type(3) {
      ${props =>
        props.theme.mq({
          width: ['10%', '10%', '10%', 'auto'],
        })};
    }
    &:nth-of-type(4) {
      ${props =>
        props.theme.mq({
          width: ['10%', '10%', '10%', 'auto'],
        })};
    }
    &:nth-of-type(5) {
      ${props =>
        props.theme.mq({
          width: ['20%', '20%', '20%', 'auto'],
        })};
    }
  }
  & tbody td {
    padding: 12px 20px;
    line-height: 2;
    font-weight: 200;
  }
  & tbody > tr {
    display: table-row;
    border-top: 1px solid ${props => props.theme.colors.border};
  }
  ${props => props.theme.styles.table};
`;

export const Table = (props: React.TableHTMLAttributes<any>) => (
  <Wrapper>
    <TableStyled {...props} />
  </Wrapper>
);
