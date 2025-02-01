import styled from 'styled-components';

export const PrimaryCustomButtonStyled = styled.button`
  /* Botón */
  width: auto;
  max-height: 41px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: none;
  outline: none;
  background-color: #940000;
  border-radius: 12px;
  padding: 12px 16px;
  transition: all 0.2s ease;

  /* Fuente */
  font-size: 1em;
  font-weight: normal;
  font-family: 'Aptos';
  color: #ffffff;
  line-height: 100%;

  &:hover {
    background-color: #A10000;
  }

  &:active {
    background-color: #850000;
  }

  img {
    height: 20px;
    width: 20px;
  }
`;
