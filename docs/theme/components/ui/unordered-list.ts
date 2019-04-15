import { styled } from '@styled';

export const UnorderedList = styled.ul`
  list-style: none;
  & li::before {
    content: '● ';
    color: ${({ theme }) => theme.colors.border};
    font-weight: bold;
    font-size: 0.5em;
    margin-right: 5px;
  }
  ${({ theme }) => theme.styles.ul};
  ul li {
    padding-left: 25px;
  }
`;
