import styled from 'styled-components';

export const CardButtonContainer = styled.div`
  width: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 12px;
  transition: all 0.1s ease;
  border: 1px solid #c3c3c3;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
  }

  &:active {
    background-color: #ececec;
  }

  svg {
    max-width: 85px;
    height: 100%;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;

    h4 {
      font-size: 1.1875em;
      font-weight: bold;
      font-family: 'Roboto';
      max-width: 30ch !important;
      max-height: 45px !important;
      color: black;
      margin: 0px;
      line-height: 120% !important;
    }

    p {
      font-size: 1em;
      font-weight: normal;
      font-family: 'Roboto';
      color: #424242;
      margin: 0px;
      line-height: 120%;
    }
  }
`;
