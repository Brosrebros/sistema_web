import styled from 'styled-components';

export const SecondaryCustomButtonStyled = styled.button`
  /* Botón */
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border: none;
  outline: none;
  background-color: ${({ variant }) =>
    variant === 'gray' ? '#f2f2f2' : '#ffffff'};
  border-radius: 12px;
  padding: 12px 16px;
  transition: all 0.2s ease;

  /* Fuente */
  font-size: 1em;
  font-weight: normal;
  font-family: 'Aptos_display';
  color: #424242;
  line-height: 100%;

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
