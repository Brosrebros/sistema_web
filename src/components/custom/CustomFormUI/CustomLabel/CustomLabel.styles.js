import styled from 'styled-components';
import checkIcon from '../../../../assets/img/icons/check.svg';

export const CustomLabelStyled = styled.label`
  width: 160px;
  display: flex;
  align-items: center;
  gap: 4px;
  text-align: start;
  font-weight: normal !important;
  color: #424242;
  white-space: nowrap;
  overflow: visible;
  text-overflow: ellipsis;
  font-family: 'Roboto';
  font-size: 1rem;
  margin: 0px;
  padding: 0px;
  cursor: pointer;

  input[type='radio'] {
    appearance: none;
    min-width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #f2f2f2;
    border: 1px solid #c3c3c3;
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
      border: 1px solid #c3c3c3;

      &::before {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        background-image: url(${checkIcon});
        background-size: 74%;
        background-repeat: no-repeat;
        background-position: center;
      }
    }
  }

  @media (max-width: 1200px) {
    font-size: 0.81rem;
  }
`;
