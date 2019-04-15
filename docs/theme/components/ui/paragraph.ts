import { styled } from '@styled';

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.text};
  ${({ theme }) => theme.styles.paragraph};
`;
