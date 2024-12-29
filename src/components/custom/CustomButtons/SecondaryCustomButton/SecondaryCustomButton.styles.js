import styled from 'styled-components';

export const SecondaryCustomButtonStyled = styled.button`
  /* Botón */
  width: 100%;
  max-width: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border: none;
  outline: none;
  background-color: ${({ variant }) =>
    variant === 'gray' ? '#f2f2f2' : '#ffffff'};
  border-radius: 12px;
  padding: 8px 20px;
  transition: all 0.2s ease;

  /* Fuente */
  font-size: 0.875rem;
  font-weight: normal;
  font-family: 'Aptos_display';
  color: #424242;

  b {
    font-size: 0.875rem;
    font-weight: bold;
    font-family: 'Aptos_display';
    color: #940000;
  }

  &:hover {
    filter: brightness(90%);
  }

  img {
    width: 1.1rem;
    height: auto;
  }
`;
