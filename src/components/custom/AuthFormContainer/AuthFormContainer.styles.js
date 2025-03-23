import styled from 'styled-components';

export const AuthFormContainerStyled = styled.div`
  width: 100%;
  max-width: 532px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  @media (max-width: 1200px) {
    gap: 20px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  padding: 10px 0px;

  h4 {
    font-weight: 700;
    font-size: 1.44rem;
    color: black;
    margin: 0px;
    line-height: 16px;

    @media (max-width: 1200px) {
      font-size: 1.12rem;
      line-height: 120%;
    }
  }

  p {
    font-weight: 400;
    font-size: 1rem;
    color: #424242;
    margin: 0px;

    @media (max-width: 1200px) {
      font-size: 0.81rem;
      text-align: center;
    }
  }

  @media (max-width: 1200px) {
    padding: 0px;
    align-items: center;

    #register {
      text-align: start;
    }
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  button {
    width: 100%;
    color: black;
  }

  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 12px;
  }
`;

export const Separator = styled(ButtonsContainer)`
  flex-direction: row;
  gap: 20px;

  span {
    display: block;
    width: 182px;
    height: 1px;
    background-color: #dbdbdb;
  }

  p {
    font-weight: 400;
    font-size: 1rem;
    color: black;
    margin: 0px;
    white-space: nowrap;
    text-overflow: ellipsis;

    @media (max-width: 1200px) {
      font-size: 0.81rem;
    }
  }
`;

export const AnotherOptionContainer = styled.div`
  width: 100%;
  max-width: 328px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  p {
    font-weight: 400;
    font-size: 1rem;
    color: black;
    margin: 0px;

    @media (max-width: 1200px) {
      font-size: 0.81rem;
    }
  }

  button {
    width: 100%;
    color: #940000;

    @media (max-width: 1200px) {
      width: 225px;
    }
  }
`;
