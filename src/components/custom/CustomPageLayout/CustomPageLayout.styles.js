import styled from 'styled-components';

export const CustomPageLayoutStyled = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  gap: 1rem;
  width: 1640px;
  font-family: 'Aptos_display';
  transition: all 0.15s linear;
  margin: 0 auto;

  @media (min-width: 1940px) {
    width: 1840px;
  }

  @media (max-width: 1746px) {
    width: 84.1vw;
  }

  @media (max-width: 1540px) {
    width: 82vw;
  }

  @media (max-width: 1400px) {
    width: 70vw;
  }

  @media (max-width: 1300px) {
    width: 78.8vw;
  }
`;
