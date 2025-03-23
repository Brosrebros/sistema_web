import styled from 'styled-components';

export const RegisterFormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 28px;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 12px;

  h3 {
    font-weight: 700;
    font-size: 1.44rem;
    color: black;
    margin: 0px;

    @media (max-width: 1200px) {
      font-size: 1.12rem;
    }
  }

  & > div:last-child {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    & > div:nth-child(2) {
      & > div:nth-child(2) {
        display: flex;
        flex-direction: column;
      }
    }

    & > p {
      font-weight: 400;
      font-size: 0.81rem;
      line-height: 154%;
      color: black;
      margin: 0px;
      margin-top: -12px;

      @media (max-width: 1200px) {
        font-size: 0.62rem;
      }
    }

    @media (max-width: 1200px) {
      gap: 24px;

      u {
        text-decoration: none;
      }
    }
  }

  @media (max-width: 1200px) {
    gap: 24px;
  }
`;

export const RegisterDataContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  h4 {
    width: 100%;
    font-weight: 700;
    font-size: 1.19rem;
    color: black;
    margin: 0px;

    @media (max-width: 1200px) {
      font-size: 0.94rem;
    }
  }
`;

export const RegisterInputContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;

  & > div:nth-child(n + 3) {
    grid-column: span 2;
  }
`;
