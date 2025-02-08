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
