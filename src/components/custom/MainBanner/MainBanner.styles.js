import styled from 'styled-components';

export const Banner = styled.div`
  width: 100%;
  height: 444px;
  display: flex;
  flex-direction: column;
  justify-content: ${({type}) => type === "home" ? "flex-end" : "center"};
  align-items: flex-start;
  gap: 24px;
  padding: 24px;
  background-color: #c6c6c6;
  border-radius: 12px;

  h1 {
    font-size: 1.75rem;
    font-weight: bolder;
    font-family: 'Roboto';
    color: black;
    margin: 0px;
    line-height: 110%;
  }

  h2 {
    font-size: 1.44rem;
    font-weight: bolder;
    font-family: 'Roboto';
    color: black;
    margin: 0px;
    line-height: 110%;
  }

  p {
    font-size: 1em;
    font-weight: normal;
    font-family: 'Roboto';
    color: #424242;
    max-width: 55ch;
    margin: 0px;
    line-height: 140%;
  }
`;

export const Advertising = styled.div`
  width: 100%;
  height: 87px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 24px;
  background-color: #E3E3E3;
  border-radius: 12px;

  font-size: 1em;
  font-weight: normal;
  font-family: 'Roboto';
  color: #424242;
`;
