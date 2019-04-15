import { styled } from '@styled';

export const OrderedList = styled.ol`
  list-style: none;
  counter-reset: my-awesome-counter;
  & li {
    counter-increment: my-awesome-counter;
  }
  & li::before {
    content: counter(my-awesome-counter) '. ';
    color: ${({ theme }) => theme.colors.border};
    font-weight: bold;
    font-family: 'Playfair Display', serif;
    margin-right: 5px;
  }
  ${({ theme }) => theme.styles.ol};
`;
