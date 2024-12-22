import styled from 'styled-components';

export const PrimaryCustomButtonStyled = styled.button`
  /* Botón */
  border: none;
  outline: none;
  background-color: #940000;
  border-radius: 12px;
  padding: 8px 20px;
  transition: all 0.2s ease;

  /* Fuente */
  font-size: 1rem;
  font-weight: normal;
  font-family: 'Aptos_display';
  color: #ffffff;

  &:hover {
    background-color: rgb(122, 3, 3);
  }
`;
