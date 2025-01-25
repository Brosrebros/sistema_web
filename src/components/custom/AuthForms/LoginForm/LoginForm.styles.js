import styled from 'styled-components';

export const LoginFormContainer = styled.form`
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
  }

  & > div:last-child {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export const LoginInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;

  span {
    font-weight: 400;
    font-size: 0.69rem;
    color: #940000;
  }
`;

export const ButtonContainer = styled(LoginInputContainer)`
  p {
    font-weight: 400;
    font-size: 0.69rem;
    color: black;
    margin: 0px;
  }
`;
