import styled from 'styled-components';

export const CustomInputContainer = styled.div`
  height: 41px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-radius: 12px;
  background-color: #ffffff;
  border: 1px solid #dbdbdb;

  img {
    width: 20px;
    height: 20px;
  }
`;

export const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  font-family: 'Aptos';
  
  &::placeholder {
    font-size: 1em;
    color: #424242;
    font-family: 'Aptos';
  }
`;
