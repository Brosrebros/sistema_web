import styled from 'styled-components';

export const CustomCounterStyled = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.6rem;
  background-color: #f2f2f2;
  padding: 4px;
  gap: 12px;
  height: 36px;
  outline: none;
  border: none;

  button {
    height: 100%;
    background-color: white;
    border-radius: 0.4rem;
    border: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      color: #8b8b8b;
    }
  }
`;
