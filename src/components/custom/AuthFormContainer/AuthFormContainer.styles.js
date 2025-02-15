import styled from 'styled-components';

export const AuthFormContainerStyled = styled.div`
  width: 100%;
  max-width: 532px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
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
  }

  p {
    font-weight: 400;
    font-size: 1rem;
    color: #424242;
    margin: 0px;
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
  }
`;

export const Separator = styled(ButtonsContainer)`
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
  }

  button {
    width: 100%;
    color: #940000;
  }
`;
