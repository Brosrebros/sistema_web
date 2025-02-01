import styled from 'styled-components';

export const SecondaryCustomButtonStyled = styled.button`
  /* Botón */
  width: auto;
  max-height: 41px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border: none;
  outline: none;
  background-color: ${({ variant }) =>
    variant === 'white'
      ? '#ffffff'
      : variant === 'gray'
      ? '#f2f2f2'
      : '#ffffff'};
  border-radius: 12px;
  padding: 12px 16px;
  transition: all 0.2s ease;

  /* Fuente */
  font-size: 1em;
  font-weight: normal;
  font-family: 'Aptos';
  color: #424242;
  line-height: 100%;
  border: ${({ variant }) =>
    variant === 'white'
      ? '1px solid #dbdbdb'
      : variant === 'gray'
      ? 'none'
      : '1px solid #dbdbdb'};

  b {
    font-size: 0.875rem;
    font-weight: bold;
    font-family: 'Aptos';
    color: #940000;
  }

  &:hover {
    background-color: ${({ variant }) =>
      variant === 'white'
        ? '#F9F9F9'
        : variant === 'gray'
        ? '#f2f2f2'
        : '#F9F9F9'};
  }

  &:active {
    background-color: ${({ variant }) =>
      variant === 'white'
        ? '#ECECEC'
        : variant === 'gray'
        ? '#f2f2f2'
        : '#ECECEC'};
  }

  img {
    width: 20px;
    height: 20px;
  }
`;
