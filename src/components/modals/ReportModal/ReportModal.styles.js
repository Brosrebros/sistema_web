import styled from 'styled-components';
import checkIcon from 'assets/img/icons/check.svg';

export const ReportModalContainer = styled.div`
  width: 702px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 20px 40px 40px 40px;

  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;

    h3 {
      font-family: 'Roboto';
      font-weight: 700;
      font-size: 1.44rem;
      line-height: 100%;
      text-align: center;
      color: black;
      margin: 0px;
    }

    p {
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 1rem;
      line-height: 137%;
      text-align: center;
      color: #424242;
      margin: 0px;
    }
  }

  & > div:last-child {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 16px;

    h4 {
      font-family: 'Roboto';
      font-weight: 700;
      font-size: 1.19rem;
      line-height: 100%;
      text-align: center;
      color: black;
      margin: 0px;
    }

    & > div:nth-child(2) {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 16px;
    }
  }
`;

export const LabelContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;

  font-family: 'Roboto';
  font-weight: 400;
  font-size: 1rem;
  line-height: 137%;
  color: #424242;

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
        background-size: 76%;
        background-repeat: no-repeat;
        background-position: center;
      }
    }
  }
`;

export const DetailsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 28px;
  background-color: #f2f2f2;
  border-radius: 12px;
  padding: 20px;

  h4 {
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 1.19rem;
    line-height: 100%;
    text-align: center;
    color: black;
    margin: 0px;
  }

  & > div:last-child {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    & > textarea {
      width: 100%;
      height: 229px;
      display: flex;
      padding: 12px 16px;
      border-radius: 12px;
      background-color: #ffffff;
      border: 1px solid #c3c3c3;
      resize: none;

      font-family: 'Roboto';
      font-weight: 400;
      font-size: 1rem;
      line-height: 137%;
      outline: 2px solid #940000;
      color: black;

      &::placeholder {
        font-family: 'Roboto';
        font-weight: 400;
        color: #424242;
      }
    }

    & > div:last-child {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 12px;

      button {
        width: 100%;
      }

      span {
        width: 100%;
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 0.81rem;
        line-height: 154%;
        color: black;
      }
    }
  }
`;

export const CloseButton = styled.button`
  width: 52px;
  height: 41px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 12px;
  border: none;
  outline: none;
  margin-right: auto;
  transition: all 0.1s ease;

  img {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background-color: #f2f2f2;
  }

  &:active {
    background-color: #e4e4e4;
  }
`;
