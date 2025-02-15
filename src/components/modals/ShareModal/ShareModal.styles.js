import styled from 'styled-components';

export const ShareModalContainer = styled.div`
  width: 537px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 40px;

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

  & > div:nth-child(3) {
    width: 308px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      width: 34px;
      height: 34px;
    }
  }

  & > div:last-child {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
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

    & > div:last-child {
      width: 100%;
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
