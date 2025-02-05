import styled from 'styled-components';

export const PaymentFormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 12px;

  h3 {
    font-weight: 700;
    font-size: 1.44rem;
    color: black;
    margin: 0px;
  }
`;

export const InputLabelContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  h4 {
    font-weight: 700;
    font-size: 1.19rem;
    color: black;
    margin: 0px;
    line-height: 12px;
    grid-column: span 2;
  }

  &:nth-child(2) {
    & > div:nth-child(2) {
      grid-column: span 2;
    }
  }

  &:nth-child(4) {
    & > div:nth-child(2) {
      grid-column: span 2;
      display: flex;

      & > div {
        width: 100%;
      }
    }
  }

  &:nth-child(5) {
    & > div:nth-child(2) {
      grid-column: span 2;
    }
  }
`;

export const SaveInfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  padding: 16px;
  background-color: #ffffff;
  border-radius: 12px;

  input {
    appearance: none;
    min-width: 16px;
    height: 16px;
    border-radius: 4px;
    background-color: #f2f2f2;
    cursor: pointer;
    transition: all 0.2s ease;
    border: 1px solid #c3c3c3;
  }

  p {
    font-weight: 400;
    line-height: 122%;
    font-size: 1rem;
    color: #424242;
    margin: 0px;

    b {
      font-weight: 700;
      font-size: 1rem;
      color: black;
      margin: 0px;
    }
  }

  & + div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    input {
      appearance: none;
      min-width: 16px;
      height: 16px;
      border-radius: 4px;
      background-color: #f2f2f2;
      cursor: pointer;
      transition: all 0.2s ease;
      border: 1px solid #c3c3c3;
    }

    p {
      font-weight: bold;
      line-height: 122%;
      font-size: 1rem;
      color: black;
      margin: 0px;
    }
  }
`;

export const TextButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  & > p:first-child {
    font-weight: 400;
    font-size: 1rem;
    line-height: 122%;
    color: #424242;
    margin: 0px;
  }

  button {
    width: 100%;
  }

  & > p:last-child {
    font-weight: 400;
    font-size: 0.81rem;
    line-height: 122%;
    color: #424242;
    margin: 0px;
  }
`;

