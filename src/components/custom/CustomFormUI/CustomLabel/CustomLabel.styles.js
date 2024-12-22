import styled from 'styled-components';

export const CustomLabelStyled = styled.label`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 4px;
  text-align: start;
  color: rgb(46, 46, 46);

  input[type='radio'] {
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: rgb(209, 209, 209);
    cursor: pointer;
    transition: all 0.2s ease;

    &:checked {
      background-color: #940000;
      border: none;
    }
  }

  input[type='checkbox'] {
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 4px;
    background-color: rgb(209, 209, 209);
    cursor: pointer;
    transition: all 0.2s ease;

    &:checked {
      background-color: #940000;
      border: none;
    }
  }
`;
