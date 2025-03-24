import styled from "styled-components";

export const ResetFormContainer = styled.form`
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
  }

  @media (max-width: 1200px) {
    gap: 20px;
  }
`;

export const ResetInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ButtonContainer = styled(ResetInputContainer)`
  p {
    font-weight: 400;
    font-size: 0.81rem;
    color: black;
    margin: 0px;

    @media (max-width: 1200px) {
      font-size: 0.62rem;
    }
  }

  u {
    text-decoration: none;

    @media (max-width: 1200px) {
      font-size: 0.62rem;
    }
  }
`;