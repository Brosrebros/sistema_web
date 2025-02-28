import styled from 'styled-components';

export const SellerFormContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr 1fr 1fr auto;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background-color: #ffffff;
  border-radius: 12px;
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
`;

export const Option = styled.button`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border: none;
  outline: none;
  background-color: ${({isActive}) => isActive ? "#940000" : "#f2f2f2"};
  border-radius: 12px;
  padding: 12px 16px;
  transition: all 0.2s ease;
  font-size: 1rem;
  font-weight: normal;
  font-family: 'Aptos';
  color: ${({isActive}) => isActive ? "#ffffff" : "#424242"};
  line-height: 70%;
`;
