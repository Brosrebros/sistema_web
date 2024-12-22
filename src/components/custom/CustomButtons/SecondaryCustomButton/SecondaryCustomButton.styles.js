import styled from 'styled-components';

export const SecondaryCustomButtonStyled = styled.button`
  /* Botón */
  width: 100%;
  border: none;
  outline: none;
  background-color: #f2f2f2;
  border-radius: 12px;
  padding: 8px 20px;
  transition: all 0.2s ease;

  /* Fuente */
  font-size: 1rem;
  font-weight: normal;
  font-family: 'Aptos_display';
  color: #6d6d6d;

  b {
    font-size: 1rem;
    font-weight: bold;
    font-family: 'Aptos_display';
    color: #940000;
  }

  &:hover {
    background-color: rgb(221, 221, 221);
  }
`;
