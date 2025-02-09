import styled from 'styled-components';

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 12px;

  h4 {
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 1.19rem;
    line-height: 116%;
    color: black;
    margin: 0px;
  }

  & > span:last-child {
    max-width: 740px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;

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
`