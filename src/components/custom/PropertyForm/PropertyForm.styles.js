import styled from 'styled-components';

export const PropertyFormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 24px;
  background-color: #ffffff;
  border-radius: 12px;

  #mobile {
    display: none;
  }

  @media (max-width: 1200px) {
    gap: 10px;
    padding: 10px;
    border-radius: ${({ page }) => (page === 'catalog' ? '0px' : '12px')};
    margin-top: ${({ page }) => (page === 'catalog' ? '-24px' : '0px')};

    #desktop {
      display: none;
    }

    #desktop-catalog {
      display: ${({ page }) => (page === 'catalog' ? 'none' : 'flex')};
    }

    #mobile {
      display: flex;
    }
  }
`;

export const FormOptionsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${({ page }) =>
    page === 'venta'
      ? 'auto auto 2fr 1.1fr auto auto auto'
      : page === 'main'
      ? 'auto auto 2fr 1.1fr auto auto auto'
      : 'auto auto 2fr 1.2fr auto 0.9fr auto'};
  gap: 12px;

  @media (max-width: 1200px) {
    ${({ page }) =>
      page === 'catalog'
        ? `
      grid-template-columns: 52px 52px auto;
      gap: 10px;

      & > div:nth-child(3) {
        grid-column: span 3;
      }

      & > button:nth-child(7),
      & > button:nth-child(8) {
        grid-row: 2;
        grid-column: span 1;
        max-width: 52px; 
      }

      & > button:last-child {
        grid-row: 2;
        grid-column: 3;
      }
  `
        : `
      grid-template-columns: auto 1fr;
      grid-template-rows: auto auto 1fr 1fr;
      gap: 10px;
      justify-content: space-between;

      & > div:nth-child(n + 3) {
        grid-column: span 2;
      }

      & > button:nth-child(5),
      & > button:nth-child(6) {
        display: none;
      }

      & > button:last-child {
        grid-column: span 2;
      }

      & > button:nth-child(2) {
        width: 90px;
        margin-left: auto;
      }
    `}
  }
`;

export const FormTab = styled.div`
  width: 100%;
  max-height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 6px;
  background-color: #f2f2f2;
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
  background-color: ${props => (props.isActive ? '#940000' : '#f2f2f2')};
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
    background-color: ${props => (props.isActive ? '#A10000' : '#f2f2f2')};
  }

  &:active {
    background-color: ${props => (props.isActive ? '#850000' : '#f2f2f2')};
  }

  @media (max-width: 968px) {
    font-size: 0.8125em;
  }
`;
