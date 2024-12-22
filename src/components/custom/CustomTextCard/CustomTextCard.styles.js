import styled from 'styled-components';

export const CustomTextCardStyled = styled.a`
  cursor: pointer;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  padding: 24px;
  background-color: #ffffff;
  border-radius: 12px;

  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  h4 {
    color: rgb(21, 25, 31);
    font-size: 1.4rem;
    font-weight: bold;
    font-family: 'Aptos_Display';

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2em;
  }

  p {
    color: #424242;
    font-size: 1rem;
    font-weight: normal;
    font-family: 'Aptos_Display';
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    list-style: decimal;
    gap: 12px;

    & > li {
      color: black;
      font-size: 1.1rem;
      font-weight: bolder;
      font-family: 'Aptos_Display';
    }
  }

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 2px;

    h5 {
      color: #424242;
      font-size: 1.1rem;
      font-weight: bold;
      font-family: 'Aptos_Display';
    }

    p {
      color: #424242;
      font-size: 1rem;
      font-weight: normal;
      font-family: 'Aptos_Display';
      margin-bottom: 32px;
    }
  }
`;
