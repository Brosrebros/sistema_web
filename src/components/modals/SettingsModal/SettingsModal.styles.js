import styled from 'styled-components';

export const SettingsModalContainer = styled.div`
  width: 912px;
  height: auto;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 20px 40px 40px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;

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
    display: grid;
    grid-template-columns: 165px auto;
    gap: 24px;

    & > div:last-child {
      height: 483px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      gap: 24px;
    }
  }
`;

export const AltButton = styled.div`
  width: 100%;
  max-height: 41px;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-radius: 12px;
  background-color: #f2f2f2;
  outline: 1px solid #c3c3c3;
  transition: all 0.1s ease;
  cursor: pointer;
  box-sizing: border-box;

  span {
    font-size: 1em;
    font-weight: normal;
    color: #424242;
    line-height: 106%;
    display: block;
  }

  img {
    width: 20px;
    height: 20px;
  }
`;

export const OptionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  & > div:first-child {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h4 {
      font-family: 'Roboto';
      font-weight: 700;
      font-size: 1.19rem;
      line-height: 116%;
      color: black;
      margin: 0px;
    }

    & > div > div > img {
      position: absolute;
      right: 15px;
    }
  }

  p {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1rem;
    line-height: 137%;
    color: #424242;
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
