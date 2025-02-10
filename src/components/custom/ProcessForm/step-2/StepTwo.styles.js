import styled from 'styled-components';

export const DataContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 12px;

  & > div:first-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 16px;

    h4 {
      font-family: 'Roboto';
      font-weight: 700;
      font-size: 1.19rem;
      line-height: 116%;
      color: black;
      margin: 0px;
    }

    p {
      font-family: 'Roboto';
      font-weight: normal;
      font-size: 1.19rem;
      line-height: 116%;
      color: #424242;
      margin: 0px;
    }
  }
`;

export const PictureContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;

  & > div:first-child {
    width: 100%;
    height: 386px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    background-color: #ffffff;
    border-radius: 12px;
    border: 1px solid #c3c3c3;

    img {
      width: 32px;
      height: 32px;
    }

    span {
      display: block;
      font-family: 'Roboto';
      font-weight: normal;
      font-size: 1rem;
      color: #424242;
      margin: 0px;
    }
  }

  & > span:last-child {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 4px;

    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1.19rem;
    line-height: 116%;
    color: #940000;

    img {
      width: 24px;
      height: 24px;
    }
  }
`;

export const LinkContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 9fr auto;
  gap: 12px;
`;
