import styled from 'styled-components';

export const CustomInputTextContainer = styled.div`
  height: 41px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-radius: 12px;
  border: 1px solid #c6c6c6;

  img {
    max-width: 17px;
    height: auto;
  }
`;

export const InputText = styled.input`
  border: none;
  outline: none;

  &::placeholder {
    font-size: 1em;
    color: #424242;
    font-family: "Aptos";
  }
`;
