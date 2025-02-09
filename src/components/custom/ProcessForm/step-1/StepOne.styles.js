import styled from "styled-components";

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 12px;

  h4 {
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 1.19rem;
    line-height: 116%;
    color: black;
    margin: 0px;
  }
`;

export const FormTab = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 6px;
  background-color: #ffffff;
  border-radius: 16px;
  border: 1px solid #c3c3c3;

  @media (max-width: 1100px) {
    width: auto;
  }
`;

export const TabButtonStyled = styled.button`
  /* Botón */
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border: none;
  outline: none;
  background-color: ${props => (props.isActive ? '#940000' : '#ffffff')};
  border-radius: 12px;
  padding: 12px 16px;
  transition: all 0.2s ease;

  /* Fuente */
  font-size: 1rem;
  font-weight: normal;
  font-family: 'Roboto';
  color: ${props => (props.isActive ? 'white' : '#424242')};
  line-height: 70%;

  &:hover {
    background-color: ${props => (props.isActive ? '#A10000' : '#ffffff')};
  }

  &:active {
    background-color: ${props => (props.isActive ? '#850000' : '#ffffff')};
  }
`;

export const DoubleOptionContainer = styled.div`
  width: 507px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  & > div:first-child,
  & > div:last-child {
    width: 100%;
    grid-template-columns: auto;
  }
`;

export const MultipleSelectContainer = styled.div`
  width: 507px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;

  & > div:first-child {
    grid-column: span 2;
  }

  & > div {
    grid-template-columns: auto;
  }
`;

export const PropertyLocation = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;

  & > span:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;

    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1.19rem;
    line-height: 116%;
    color: #424242;

    img {
      width: 24px;
      height: 24px;
    }
  }

  & > div {
    width: 100%;
    height: 321px;
    background-color: #c3c3c3;
    border-radius: 12px;
  }

  & > span:last-child {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1.19rem;
    line-height: 116%;
    color: #940000;

    img {
      width: 24px;
      height: 24px;
    }
  }
`;

export const CounterContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  & > div > div,
  & > div > div:last-child button {
    background: #ffffff;
  }
`;

export const AreaContainer = styled.div`
  width: 251px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;

  & > div:first-child,
  & > div:nth-child(3) {
    position: relative;
    width: 83px !important;

    img {
      position: absolute;
      right: 16px;
      z-index: 1;
    }

    img + div {
      width: 80%;
      position: absolute;
      left: 16px;
      z-index: 2;
    }

    svg {
      display: none;
    }
  }
`;

export const AntiquityContainer = styled.div`
  width: 282px;
  display: grid;
  grid-template-columns: auto 50px;
  align-items: center;
  gap: 16px;

  & > div:first-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
  }

  & > input:last-child {
    padding: 15px;
  }
`;

export const PriceContainer = styled.div`
  width: 446px;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  column-gap: 20px;
  row-gap: 12px;
`;

export const DescriptionContainer = styled.div`
  width: 740px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  & > div:first-child {
    width: 100%;
  }

  textarea {
    width: 100%;
    outline: none;
    height: 210px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    padding: 12px 16px;
    border-radius: 12px;
    background-color: #ffffff;
    border: 1px solid #c3c3c3;
    resize: none;

    &::placeholder {
      font-family: 'Roboto';
      font-size: 1rem;
      color: #424242;
      margin: 0px;
    }
  }
`;
