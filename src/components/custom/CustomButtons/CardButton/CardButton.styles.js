import styled from 'styled-components';

export const CardButtonContainer = styled.div`
  width: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
  padding: 24px;
  background-color: #ffffff;
  border-radius: 12px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
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
    gap: 16px;

    h4 {
      font-size: 1.1875em;
      font-weight: bold;
      font-family: 'Aptos_display';
      color: black;
      margin: 0px;
      line-height: 110%;
    }

    p {
      font-size: 1em;
      font-weight: normal;
      font-family: 'Aptos_display';
      color: #424242;
      margin: 0px;
      line-height: 110%;
    }
  }
`;
