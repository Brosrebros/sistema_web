import styled from 'styled-components';

export const CustomModalBodyStyled = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 24px;
  padding: 1em 4em;

  h4 {
    font-size: 2.2rem;
    font-weight: bolder;
    font-family: 'Aptos_display';
    color: #940000;
  }

  p {
    font-size: 1.2rem;
    font-weight: normal;
    font-family: 'Aptos_display';
    color: #6d6d6e;
    line-height: 120%;

    b {
      font-size: 1.2rem;
      font-weight: bold;
      font-family: 'Aptos_display';
      color: #6d6d6e;
    }
  }

  h5 {
    font-size: 1.2em;
    font-weight: normal;
    font-family: 'Aptos_display';
    color: #940000;

    b {
      font-weight: bolder;
      font-family: 'Aptos_display';
      color: #940000;
    }
  }

  span {
    display: block;
    padding: 0px 1em;
    font-size: 1em;
    font-weight: lighter;
    font-family: 'Aptos_display';
    color: #6d6d6e;

    b {
      font-size: 1em;
      font-weight: bolder;
      font-family: 'Aptos_display';
      color: #940000;
    }
  }

  & > :last-child {
    margin-top: 2em;
    padding: 16px 20px;
  }
`;
