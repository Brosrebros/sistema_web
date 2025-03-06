import styled from 'styled-components';

export const ContentInfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 20px;
  padding: 40px 120px;
  background-color: #ffffff;
  border-radius: 12px;
  margin-top: ${({ type }) => (type === 'left' ? '-100px' : 'auto')};

  @media (max-width: 1440px) {
    padding: 40px;
  }

  img {
    height: 600px;
    max-width: 443px;

    @media (max-width: 1440px) {
      display: none;
    }
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  align-items: center;
  gap: 32px;
`;

export const GridTextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  grid-column: span 2;
  gap: 10px;

  h3 {
    font-size: 1.4375em;
    font-weight: bold;
    font-family: 'Aptos';
    color: black;
    line-height: 120%;
    margin: 0px;
  }

  h4 {
    font-size: 1em;
    font-weight: normal;
    font-family: 'Aptos';
    color: #424242;
    line-height: 65%;
    margin: 0px;
  }
`;

export const CustomCard = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 24px;
  background-color: #f2f2f2;
  border-radius: 12px;

  @media (max-width: 968px) {
    grid-column: span 2;
  }

  img {
    height: 80px;
    width: auto;
    max-width: 84px;
    display: block;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;

    h4 {
      font-size: 1.1875em;
      font-weight: bold;
      font-family: 'Aptos';
      color: black;
      line-height: 64%;
      margin: 0px;
      text-align: center;
    }

    p {
      max-width: 42ch;
      font-size: 1em;
      font-weight: normal;
      font-family: 'Aptos';
      color: #424242;
      line-height: 108%;
      margin: 0px;
      text-align: center;
    }
  }
`;
