import styled from 'styled-components';

export const ProcessFormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;

  h3 {
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 1.44rem;
    line-height: 122%;
    color: black;
    margin: 0px;
  }

  & > div:last-child {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;

    & > button:first-child {
      color: #940000;
    }
  }
`;

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
`;

export const CounterContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;
