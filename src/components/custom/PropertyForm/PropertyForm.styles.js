import styled from 'styled-components';

export const PropertyFormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background-color: #ffffff;
  border-radius: 12px;

  @media (max-width: 1100px) {
    gap: 10px;
  }
`;

export const FormButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1100px) {
    & > button:last-child {
      display: none;
    }
  }
`;

export const FormMainContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 1100px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const FormOptionsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr auto auto;
  gap: 12px;

  @media (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;

    & > div:nth-child(3),
    & > div:nth-child(4),
    & > button:nth-child(5) {
      display: none;
    }

    & > div:nth-child(1) {
      order: 2;
    }

    & > div:nth-child(2) {
      order: 1;
    }

    & > button:nth-child(6) {
      order: 3;
    }
  }
`;

export const FormTab = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 6px;
  background-color: #f2f2f2;
  border-radius: 16px;
  border: 1px solid #dbdbdb;

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
  background-color: ${props => (props.isActive ? '#940000' : '#f2f2f2')};
  border-radius: 12px;
  padding: 12px 16px;
  transition: all 0.2s ease;

  /* Fuente */
  font-size: 1rem;
  font-weight: normal;
  font-family: 'Aptos';
  color: ${props => (props.isActive ? 'white' : '#424242')};
  line-height: 70%;

  &:hover {
    filter: brightness(0.9);
  }
`;
