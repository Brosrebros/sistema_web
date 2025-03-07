import styled from 'styled-components';

export const NotificationsContainer = styled.div`
  width: 466px;
  height: 556px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #c3c3c3;
  border-radius: 12px;
  position: absolute;
  top: calc(48px + 16px);
  right: 0;
  cursor: default;

  & > div {
    width: 100%;
  }

  & > div:first-child {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 16px;
    height: 46px;

    h4 {
      font-weight: 700;
      font-size: 1.19rem;
      line-height: 116%;
      color: black;
      margin: 0px;
    }
  }

  & > div:last-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border-top: 1px solid #c3c3c3;

    & > button:last-child {
      border: none;
      color: #940000;
    }
  }
`;

export const NotificationsWrapper = styled.div`
  width: 100%;
  display: flex;
  padding-right: 10px;
  height: 430px;

  & > div:first-child {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 16px;
    padding: 20px 20px 12px 8px;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 4px;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-track {
      background: #f2f2f2;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background: #c3c3c3;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: rgb(204, 204, 204);
    }

    &::-webkit-scrollbar-button {
      display: none;
      width: 0;
      height: 0;
      background: transparent;
    }

    h5 {
      font-weight: 700;
      font-size: 1rem;
      line-height: 11px;
      color: #424242;
      margin: 0px;
    }
  }
`;

export const Notification = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 12px;
  background-color: #ffffff;
  border-radius: 12px;
  transition: all 0.1s ease;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }

  & > div:first-child {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > span:first-child {
      font-weight: 700;
      font-size: 0.81rem;
      line-height: 154%;
      text-align: right;
      color: #940000;
    }

    & > span:last-child {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 4px;

      font-weight: 400;
      font-size: 0.81rem;
      line-height: 154%;
      color: #424242;

      img {
        width: 15px;
        height: 15px;
      }
    }
  }

  & > div:last-child {
    width: 100%;
    height: 80px;
    display: grid;
    grid-template-columns: 93px auto;
    align-items: center;
    gap: 12px;

    img {
      height: 100%;
      width: 93px;
      border-radius: 12px;
      background-color: #c3c3c3;
    }

    p {
      max-width: 28ch;
      font-weight: 400;
      font-size: 1rem;
      line-height: 137%;
      color: #424242;
      margin: 0px;
      text-align: start;

      b {
        font-weight: 700;
        color: black;
        font-size: 1em;
      }
    }
  }
`;
