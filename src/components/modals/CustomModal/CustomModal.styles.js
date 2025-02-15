import styled from 'styled-components';

export const CustomModalContainer = styled.div`
  width: 702px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 40px;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;

    h3 {
      font-family: 'Roboto';
      font-weight: 700;
      font-size: 1.44rem;
      line-height: 100%;
      text-align: center;
      color: black;
      margin: 0px;
    }

    p {
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 1rem;
      line-height: 137%;
      text-align: center;
      color: #424242;
      margin: 0px;
    }
  }
`;
