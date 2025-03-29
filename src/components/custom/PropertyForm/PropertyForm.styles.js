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

  #mobile-grid {
    display: none;
  }

  @media (max-width: 1200px) {
    gap: 10px;
    padding: 20px;
    border-radius: 0px;
    #desktop {
      display: none;
    }

    #desktop-catalog {
      display: ${({ page }) => (page === 'catalog' ? 'none' : 'flex')};
    }

    #mobile {
      display: flex;
    }

    #mobile-grid {
      display: grid;
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
        display:flex;
        & > div:first-child {
        
        }
          `
        : `
        grid-template-columns: repeat(3, 1fr);
      
        & > div:first-child { grid-area: 1 / 1 / 2 / 5; }
        & > button:nth-child(2) { grid-area: 1 / 5 / 2 / 6; }
        & > div:nth-child(3) { grid-area: 2 / 1 / 3 / 4; }
        & > button:nth-child(4) { grid-area: 2 / 4 / 3 / 6; }
        & > div:last-child { grid-area: 3 / 1 / 4 / 6; }
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
    width: 100%;
  }
`;

export const TabContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
`;
