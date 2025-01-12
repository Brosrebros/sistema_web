import styled from 'styled-components';

export const FooterContainerStyled = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
  padding: 1rem;
  background-color: #ffffff;
  border-radius: 16px;
  margin: 0 auto;

  ul {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    list-style: none;
    margin: 0px;

    li:first-child {
      font-size: 1.2rem;
      font-weight: bold;
      font-family: 'Aptos_display';
      color: black;
      margin-bottom: 0.8rem;
    }

    li {
      font-size: 1rem;
      font-weight: normal;
      font-family: 'Aptos_display';
      color: #424242;
    }
  }
`;
