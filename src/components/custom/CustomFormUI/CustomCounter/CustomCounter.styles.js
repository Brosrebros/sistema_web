import styled from 'styled-components';

export const CustomCounterStyled = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.6rem;
  background-color: #f2f2f2;
  padding: 6px;
  gap: 12px;
  outline: none;
  border: none;

  button {
    border: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px;

    img {
      transition: all 0.2s ease;
      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;
