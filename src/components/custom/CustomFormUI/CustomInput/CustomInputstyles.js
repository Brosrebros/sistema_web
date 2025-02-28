import styled from 'styled-components';

export const CustomInputContainer = styled.div`
  height: 41px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;

  & > img:first-child {
    width: 20px;
    height: 20px;
    position: absolute;
    left: 16px;
  }

  & > img:last-child {
    width: 20px;
    height: 20px;
    position: absolute;
    right: 16px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  font-family: 'Roboto';
  gap: 8px;
  padding: 12px 16px;
  border-radius: 12px;
  background-color: #ffffff;
  outline: 1px solid #c3c3c3;
  padding-left: ${({size}) => size ? "calc(16px + 20px + 8px)" : "16px"};
  transition: all 0.2s ease;

  &::placeholder {
    font-size: 1em;
    color: #424242;
    font-family: 'Roboto';
  }

  &:hover {
    background-color: #F2F2F2;
    outline: 1px solid #BABABA;
  }

  &:focus {
    outline: 2px solid #940000;

    &::placeholder {
      color: #c3c3c3;
    }
  }
`;
