import styled from 'styled-components';

export const CustomInputNumberStyled = styled.input`
  width: 100%;
  display: flex;
  border-radius: 0.6rem;
  align-items: center;
  justify-content: flex-start;
  background-color: #f2f2f2;
  padding: 0 0 0 8px;
  gap: 12px;
  height: 36px;
  outline: none;
  border: none;
  appearance: none;
  -moz-appearance: textfield;
  -webkit-appearance: none;

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
    color: #8b8b8b;
  }
`;
