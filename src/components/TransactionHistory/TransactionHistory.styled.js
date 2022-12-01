import styled from 'styled-components';

export const Head = styled.thead`
  text-transform: uppercase;
  color: ${p => p.theme.colors.textPrimary};
  background-color: ${p => p.theme.colors.bgTableHead};
`;

export const Column = styled.th`
  padding: 0.875em 5em;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[6]}px;
  padding-left: ${p => p.theme.space[6]}px;
  font-weight: normal;

  tbody &:first-child {
    text-transform: capitalize;
  }
  :not(:last-child) {
    border-right: ${p => p.theme.borders.primary};
  }
`;

export const Raw = styled.tr`
  :nth-child(even) {
    background-color: ${p => p.theme.colors.bgDark};
  }

  :nth-child(odd) {
    background-color: ${p => p.theme.colors.bgPrimary};
  }
`;
