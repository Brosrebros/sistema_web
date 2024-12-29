import styled from 'styled-components';

export const PrimaryCustomButtonStyled = styled.button`
  /* Botón */
  width: 100%;
  max-width: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border: none;
  outline: none;
  background-color: #940000;
  border-radius: 12px;
  padding: 8px 12px;
  transition: all 0.2s ease;

  /* Fuente */
  font-size: 0.875rem;
  font-weight: normal;
  font-family: 'Aptos_display';
  color: #ffffff;

  &:hover {
    filter: brightness(70%);
  }
`;
