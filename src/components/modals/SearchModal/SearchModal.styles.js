import styled from 'styled-components';

export const SearchModalContainer = styled.div`
  width: 612px;
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
    width: 100%;
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
    height: 492px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #f2f2f2;
    border-radius: 12px;

    & > div:first-child {
      width: 100%;
    }

    & > div:last-child {
      width: 100%;
      display: flex;
      gap: 20px;

      & > button {
        width: 100%;
      }

      & > button:last-child {
        color: #940000;
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
