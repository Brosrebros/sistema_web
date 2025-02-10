import styled from 'styled-components';

export const ProcessResumeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 40px;

  & > div:first-child {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;

    h3 {
      font-family: 'Roboto';
      font-weight: 700;
      font-size: 1.44rem;
      line-height: 122%;
      color: black;
      margin: 0px;
    }

    p {
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 1.19rem;
      line-height: 116%;
      color: #424242;
      margin: 0px;
    }
  }
`;

export const ProcessStepsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const ProcessStep = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto 24px;
  align-items: center;
  gap: 14px;

  & > div:first-child {
    width: 100%;
    max-height: 41px;
    display: flex;
    justify-content: flex-start;
    padding: 12px 16px;
    background-color: ${({ isActive }) => (isActive ? '#940000' : '#f2f2f2')};
    border-radius: 12px;

    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1rem;
    line-height: 110% !important;
    color: ${({ isActive }) => (isActive ? '#ffffff' : '#424242')};
  }

  img {
    width: 24px;
    height: 24px;
  }
`;

export const ProcessResumeStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  padding: 24px;
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

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1rem;
    line-height: 137%;
    color: #424242;

    img {
      width: 17px;
      height: 17px;
    }
  }
`;

export const ProcessWarning = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 24px auto;
  align-items: center;
  gap: 20px;
  padding: 24px;
  background-color: #233F75;
  border-radius: 12px;

  font-family: 'Roboto';
  font-weight: 400;
  font-size: 1rem;
  line-height: 137%;
  color: #ffffff;

  img {
    width: 24px;
    height: 24px;
  }
`;
