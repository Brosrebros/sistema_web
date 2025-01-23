import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa6';

export const CustomLabelStyled = styled.label`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 4px;
  text-align: start;
  color: rgb(46, 46, 46);
  white-space: nowrap;
  text-overflow: ellipsis;

  input[type='radio'] {
    appearance: none;
    min-width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #f2f2f2;
    border: 1px solid #dbdbdb;
    cursor: pointer;
    transition: all 0.2s ease;

    &:checked {
      background-color: #940000;
    }
  }

  input[type='checkbox'] {
    appearance: none;
    min-width: 16px;
    height: 16px;
    border-radius: 4px;
    background-color: #f2f2f2;
    cursor: pointer;
    transition: all 0.2s ease;
    border: 1px solid #dbdbdb;

    &:checked {
      background-color: #940000;
      border: 1px solid #dbdbdb;

      &::before {
        content: '✓';
        font-size: 12px;
        color: white;
        display: flex;
        width: 100%;
        justify-content: center;
      }
    }
  }
`;
