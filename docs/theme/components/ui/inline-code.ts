import { styled } from '@styled';

export const InlineCode = styled.code`
  background: ${({ theme }) => theme.colors.codeBg};
  color: ${({ theme }) => theme.colors.codeColor};
  ${({ theme }) => theme.styles.code};
`;
