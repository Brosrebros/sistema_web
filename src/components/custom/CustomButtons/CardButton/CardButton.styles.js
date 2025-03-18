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
  transition: all 0.1s ease;
  border: 1px solid #c3c3c3;
  cursor: pointer;

  &:hover {
    box-shadow: 0 3px 7px 0 rgba(84, 84, 84, 0.1),
      0 13px 13px 0 rgba(84, 84, 84, 0.09), 0 29px 17px 0 rgba(84, 84, 84, 0.05),
      0 51px 20px 0 rgba(84, 84, 84, 0.01), 0 79px 22px 0 rgba(84, 84, 84, 0);
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

      @media (max-width: 968px) {
        font-size: 0.94rem;
      }
    }

    p {
      font-size: 1em;
      font-weight: normal;
      font-family: 'Roboto';
      color: #424242;
      margin: 0px;
      line-height: 120%;

      @media (max-width: 968px) {
        font-size: 0.81rem;
      }
    }
  }

  @media (max-width: 968px) {
    padding: 20px;
  }
`;
