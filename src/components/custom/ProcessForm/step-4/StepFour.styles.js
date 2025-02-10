import styled from 'styled-components';

export const StyledWrapped = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  & > div:nth-child(2) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;

    & > div:first-child {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;

      h3 {
        font-family: 'Roboto';
        font-weight: 700;
        font-size: 1.44rem;
        line-height: 122%;
        color: black;
        margin: 0px;
      }

      span {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;

        p {
          font-family: 'Roboto';
          font-weight: 400;
          font-size: 1rem;
          line-height: 137%;
          color: #424242;
          margin: 0px;
        }

        img {
          width: 17px;
          height: 17px;
        }
      }
    }

    & > div:last-child {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 24px;

      div {
        width: 100%;
        height: 123px;
        background-color: #f2f2f2;
        border-radius: 12px;
      }
    }
  }

  & > span:last-child {
    width: 100%;
    max-height: 41px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 12px 16px;
    background-color: #127c00;
    border-radius: 12px;

    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1rem;
    line-height: 137%;
    color: #ffffff;

    img {
      width: 17px;
      height: 17px;
    }
  }
`;

export const TitleContainer = styled.div`
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
    color: black;
    line-height: 122%;
    margin: 0px;
  }

  p {
    font-weight: 400;
    font-size: 1.19rem;
    line-height: 116%;
    color: #424242;
    margin: 0px;
  }
`;
