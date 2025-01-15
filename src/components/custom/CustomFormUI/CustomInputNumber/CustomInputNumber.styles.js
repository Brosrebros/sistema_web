import styled from 'styled-components';

export const CustomInputNumberStyled = styled.input`
  width: 100%;
  display: flex;
  border-radius: 0.6rem;
  align-items: center;
  justify-content: flex-start;
  background-color: #f2f2f2;
  padding: 12px 16px;
  gap: 12px;
  height: 41px;
  outline: none;
  border: none;
  appearance: none;
  -moz-appearance: textfield;
  -webkit-appearance: none;
  font-family: "Aptos_display";

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
