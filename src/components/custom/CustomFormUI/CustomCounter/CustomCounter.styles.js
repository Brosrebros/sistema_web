import styled from 'styled-components';

export const CustomCounterStyled = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
  background-color: #f2f2f2;
  padding: 6px;
  gap: 12px;
  outline: none;
  border: none;
  color: #424242;

  button {
    border: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px;

    img {
      width: 24px;
      height: 24px;
      transition: all 0.2s ease;
    }
  }

  @media (max-width: 1200px) {
    font-size: 0.81rem;
  }
`;
