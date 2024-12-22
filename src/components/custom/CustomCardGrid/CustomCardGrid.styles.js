import styled from 'styled-components';

export const CustomCardGridStyled = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-top: 16px;

  & > :nth-child(1) {
    grid-column: span 4;
  }

  & > :nth-child(2) {
    grid-column: span 3;
  }

  & > :nth-child(3) {
    grid-column: span 1;
  }

  @media (max-width: 968px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
