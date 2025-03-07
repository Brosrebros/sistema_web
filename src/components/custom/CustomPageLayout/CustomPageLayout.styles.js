import styled from 'styled-components';

export const CustomPageLayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  font-family: 'Aptos_display';
  transition: all 0.15s linear;
  margin: 0 auto;

  & + footer {
    margin-top: ${({ place }) => (place === 'property' ? '-100px' : '0px')};
  }
`;
