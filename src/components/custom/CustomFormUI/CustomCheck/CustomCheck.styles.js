import styled from 'styled-components';
import checkIcon from 'assets/img/icons/check.svg';

export const CustomCheckContainer = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background-color: #ffffff;
  border-radius: 12px;
  border: 1px solid #c3c3c3;

  label {
    width: 90%;
    font-family: 'Roboto';
    font-weight: 400 !important;
    font-size: 1rem;
    line-height: 137%;
    color: #424242;
    margin: 0px;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
  }

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
        background-size: 72%;
        background-repeat: no-repeat;
        background-position: center;
      }
    }
  }
`;
