import styled from 'styled-components';
import checkIcon from 'assets/img/icons/check.svg';

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

    & > div:nth-child(2) {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 8px;

      label {
        font-family: 'Roboto';
        font-weight: 400 !important;
        font-size: 1rem;
        line-height: 137%;
        color: #424242;
        margin: 0px;
        cursor: pointer;
      }

      input[type='checkbox'] {
        appearance: none;
        min-width: 16px;
        height: 16px;
        border-radius: 4px;
        background-color: #f2f2f2;
        cursor: pointer;
        transition: all 0.2s ease;
        border: 1px solid #dbdbdb;

        &:checked {
          background-color: #940000;
          border: 1px solid #c3c3c3;

          &::before {
            content: '';
            display: block;
            width: 100%;
            height: 100%;
            background-image: url(${checkIcon});
            background-size: 76%;
            background-repeat: no-repeat;
            background-position: center;
          }
        }
      }
    }
  }
`;

export const LoginInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;

  span {
    font-weight: 400;
    font-size: 0.81rem;
    color: #940000;
  }
`;

export const ButtonContainer = styled(LoginInputContainer)`
  p {
    font-weight: 400;
    font-size: 0.81rem;
    color: black;
    margin: 0px;
  }
`;
