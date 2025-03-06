import styled from 'styled-components';

export const CustomInputNumberStyled = styled.input`
  width: 100%;
  display: flex;
  border-radius: 12px;
  align-items: center;
  justify-content: flex-start;
  background-color: #ffffff;
  padding: 12px 16px;
  gap: 12px;
  height: 48px;
  outline: none;
  border: none;
  appearance: none;
  -moz-appearance: textfield;
  -webkit-appearance: none;
  font-family: 'Roboto';
  border: 1px solid #c3c3c3;

  &:focus {
    appearance: none;
    -moz-appearance: textfield;
    -webkit-appearance: none;
  }

  &:hover {
    appearance: none;
    -moz-appearance: textfield;
    -webkit-appearance: none;
  }

  &::placeholder {
    color: #424242;
  }
`;
