import styled from 'styled-components';

export const SellerFormContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto 3fr 1.4fr auto;
  align-items: center;
  gap: 16px;
  padding: 24px;
  background-color: #ffffff;
  border-radius: 12px;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    border-radius: 0px;
    margin-top: -24px;

    & > div:first-child,
    & > div:nth-child(2),
    & > div:nth-child(3) {
      width: 100%;
    }

    & > div:first-child {
      order: 2;
    }

    #desktop {
      display: none;
    }
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 6px;
  background: #f2f2f2;
  border: 1px solid #c3c3c3;
  border-radius: 1rem;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const Option = styled.button`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border: none;
  outline: none;
  background-color: ${({ isActive }) => (isActive ? '#940000' : '#f2f2f2')};
  border-radius: 12px;
  padding: 12px 16px;
  transition: all 0.2s ease;
  font-size: 1rem;
  font-weight: normal;
  font-family: 'Aptos';
  color: ${({ isActive }) => (isActive ? '#ffffff' : '#424242')};
  line-height: 70%;

  @media (max-width: 1200px) {
    font-size: 0.81rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const MobileContainer = styled.div`
  display: none;

  @media (max-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 8px;
  }
`;
