import styled from 'styled-components';

export const FooterContainerStyled = styled.footer`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  padding: 40px;
  background-color: #ffffff;
  border-radius: 16px;

  ul {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    list-style: none;
    margin: 0px;
    gap: 24px;
    padding: 0px;

    li:first-child {
      font-size: 1.1875em;
      font-weight: bold;
      font-family: 'Aptos_display';
      color: black;
      line-height: 65%;

      @media (max-width: 968px) {
        font-size: 0.94rem;
      }
    }

    li {
      cursor: pointer;
      font-size: 1em;
      font-weight: normal;
      font-family: 'Aptos_display';
      color: #424242;
      line-height: 70%;

      &:hover {
        filter: brightness(0.9);
      }

      @media (max-width: 968px) {
        font-size: 0.81rem;
      }
    }
  }

  @media (max-width: 968px) {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    border-radius: 0px;
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;

  h3 {
    font-size: 1.1875em;
    font-weight: bold;
    color: black;
    margin: 0px;
    line-height: 65%;

    @media (max-width: 968px) {
      line-height: 120%;
      font-size: 0.94rem;
    }
  }

  p {
    font-size: 1em;
    font-weight: normal;
    color: #424242;
    margin: 0px;
    line-height: 70%;

    @media (max-width: 968px) {
      font-size: 0.81rem;
    }
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;

  img {
    cursor: pointer;

    @media (max-width: 968px) {
      width: 27px;
      height: 27px;
    }
  }
`;

export const EmailContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr auto;
  gap: 16px;
`;
