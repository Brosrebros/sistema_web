import styled from 'styled-components';

export const PropertyDataContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  padding: 24px;
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden;

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
  gap: 24px;

  h3 {
    font-weight: 700;
    font-size: 1.44rem;
    color: black;
    margin: 0px;
    line-height: 120%;
  }

  & > div:last-child {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
  }
`;

export const IconDataContainer = styled.div`
  max-width: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  overflow: visible;

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
    white-space: nowrap;
    overflow: visible;

    b {
      font-weight: 700;
    }
  }
`;

export const TagPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;

  & > div {
    max-width: 160px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;

    span {
      font-size: 0.81rem;
      font-weight: normal;
      color: #424242;
      margin: 0px;
      margin-bottom: 6px;
    }
  }

  span {
    font-weight: 400;
    font-size: 1.19em;
    color: #424242;
    height: 14px;
    margin: 0px;
  }

  h3 {
    font-weight: 700;
    font-size: 1.44em;
    color: #000000;
    margin: 0px;
  }
`;

export const DescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;

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

  & > div {
    height: 48px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 12px 16px;
    border-radius: 12px;

    font-weight: normal;
    font-size: 1rem;
    line-height: 0%;
    color: #424242;
    transition: all 0.1s ease;

    img {
      width: 20px;
      height: 20px;
    }

    &:hover {
      background-color: #f2f2f2;
    }

    &:active {
      background-color: #c3c3c3;
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  gap: 20px;

  h4 {
    font-weight: 700;
    font-size: 1.19rem;
    color: black;
    margin: 0px;
    line-height: 70%;
  }

  & > span:nth-child(2) {
    width: auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 4px;

    img {
      width: 20px;
      height: 20px;
    }

    p {
      font-weight: 400;
      font-size: 1rem;
      color: #424242;
      margin: 0px;
    }
  }

  & > div:last-child {
    grid-column: span 2;
    height: 100%;
  }

  .leaflet-top, .leaflet-bottom {
    z-index: 998;
  }
`;

export const CustomButton = styled.button`
  /* Botón */
  width: auto;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border: none;
  outline: none;
  background-color: #ffffff;
  padding: 12px 16px;
  transition: all 0.1s ease;
  border-radius: 12px;
  position: relative;

  /* Fuente */
  font-size: 1rem;
  font-weight: normal;
  font-family: 'Aptos';
  color: #424242;
  line-height: 70%;

  &:hover {
    background-color: ${({ isActive }) => (isActive ? '#ffffff' : '#f2f2f2')};
  }

  &:active {
    background-color: ${({ isActive }) => (isActive ? '#ffffff' : '#e4e4e4')};
  }

  /* Línea roja debajo si isActive es true */
  ${({ isActive }) =>
    isActive &&
    `
    &::before {
      content: "";
      position: absolute;
      bottom: -4px; /* Asegura que la línea esté justo debajo */
      left: 0;
      width: 100%;
      height: 4px;
      background-color: #940000;
      border-radius: 10px;
    }
  `}
`;

export const SliderContainer = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  h4 {
    font-weight: 700;
    font-size: 1.19rem;
    line-height: 116%;
    color: black;
    margin: 0px;
  }

  & > div:last-child {
    width: 100%;
  }

  .slick-list {
    height: auto !important;
  }
`;

export const ProyectCard = styled.div`
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  background-color: #f2f2f2;
  border-radius: 12px;

  & > img:first-child {
    width: 100%;
    height: 139px;
    background-color: #c3c3c3;
    border-radius: 12px;
  }

  & > span:nth-child(2) {
    font-weight: 400;
    font-size: 0.81rem;
    line-height: 154%;
    color: #424242;
    height: 9px;
  }

  & > div:nth-child(3) {
    display: flex;
    gap: 8px;
  }

  & > div:nth-child(4) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;

    span {
      font-weight: 400;
      font-size: 1em;
      color: #424242;
      height: 14px;
      margin: 0px;
    }

    h3 {
      font-weight: 700;
      font-size: 1.44em;
      color: #000000;
      margin: 0px;
    }
  }

  & > button:last-child {
    width: 100%;
  }
`;
