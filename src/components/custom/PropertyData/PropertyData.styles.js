import styled from 'styled-components';

export const PropertyDataContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 24px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 12px;

  & > div:first-child {
    width: 100%;
    display: grid;
    grid-template-columns: auto auto;
    align-items: start;
    gap: 24px;
  }

  & > div:last-child {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 24px;
  }
`;

export const PropertyMainData = styled.div`
  max-width: 544px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 12px;

  h3 {
    font-weight: 700;
    font-size: 1.44rem;
    color: black;
    margin: 0px;
    line-height: 100%;
  }

  & > div:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;

    img {
      width: 15px;
      height: 15px;
    }

    p {
      font-weight: 400;
      font-size: 0.81rem;
      color: #424242;
      margin: 0px;
    }
  }

  & > div:last-child {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
  }
`;

export const IconDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;

  img {
    width: 48px;
    height: 48px;
  }

  span {
    font-weight: 400;
    font-size: 1rem;
    text-align: center;
    color: #424242;
    margin: 0px;
    line-height: 65%;
  }
`;

export const TagPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;

  div {
    display: flex;
    align-items: center;
    gap: 16px;

    span {
      font-size: 0.6875em;
      font-weight: normal;
      color: #424242;
      line-height: 7px;
      margin: 0px;
    }
  }

  span {
    font-weight: 400;
    font-size: 1.19em;
    color: #424242;
    margin: 0px;
  }

  h3 {
    font-weight: 700;
    font-size: 1.44em;
    color: #940000;
    margin: 0px;
  }
`;

export const DescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;

  h4 {
    font-weight: 700;
    font-size: 1.19rem;
    color: black;
    margin: 0px;
    line-height: 70%;
  }

  p {
    font-weight: 400;
    font-size: 1rem;
    color: #424242;
    margin: 0px;
  }

  div {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    font-weight: 900;
    font-size: 1rem;
    line-height: 0%;
    color: #424242;

    img {
      width: 17px;
      height: 17px;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const Separator = styled.span`
  width: 100%;
  display: block;
  background-color: #c6c6c6;
  height: 1px;
`;

export const FeaturesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;

  h4 {
    font-weight: 700;
    font-size: 1.19rem;
    color: black;
    margin: 0px;
    line-height: 70%;
  }

  & > div:nth-child(2) {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;
  }

  & > div:last-child {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 48px;

    ul {
      list-style: none;
      padding: 0px;
      margin: 0px;

      li {
        font-weight: 400;
        font-size: 1rem;
        color: #424242;
        margin: 0px;
      }
    }
  }
`;

export const MapTitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;

  h4 {
    font-weight: 700;
    font-size: 1.19rem;
    color: black;
    margin: 0px;
    line-height: 70%;
  }
`;

export const CustomButton = styled.button`
  /* Botón */
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border: none;
  outline: none;
  background-color: ${({ isActive }) => (isActive ? '#940000' : '#ffffff')};
  border-radius: 12px;
  padding: 12px 16px;
  transition: all 0.2s ease;

  /* Fuente */
  font-size: 1rem;
  font-weight: normal;
  font-family: 'Aptos';
  color: ${({ isActive }) => (isActive ? '#ffffff' : '#424242')};
  border: 1px solid ${({ isActive }) => (isActive ? '#940000' : ' #dbdbdb')};
  line-height: 70%;

  &:hover {
    filter: brightness(0.9);
  }
`;
