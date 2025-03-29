import styled from 'styled-components';
import { SecondaryCustomButtonStyled } from '../CustomButtons/SecondaryCustomButton/SecondaryCustomButton.styles';

export const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background-color: #ffffff;
  border-radius: 12px;

  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    margin-top: -24px;
  }
`;

export const NumberSelector = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  gap: 8px;
  padding: 6px;
  background-color: #f2f2f2;
  border-radius: 12px;
  border: 1px solid #c3c3c3;

  button {
    height: 100%;
    border: none;
    line-height: 11px;
    height: 36px;
    width: 36px;
    border-radius: 100px;
  }

  @media (max-width: 1200px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const SquareButton = styled.button`
  width: 48px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border: none;
  outline: none;
  background-color: white;
  border-radius: 100px;
  padding: 12px 16px;
  transition: all 0.2s ease;
  font-size: 1em;
  font-weight: normal;
  font-family: 'Aptos';
  color: #424242;
  line-height: 100%;
  cursor: pointer;
  border: 1px solid #c3c3c3;

  img {
    width: 24px;
    height: 24px;
  }

  &:hover {
    background-color: #f9f9f9;
  }

  &:active {
    background-color: #ececec;
  }
`;

export const PagesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (max-width: 1200px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const CircleButton = styled(SecondaryCustomButtonStyled)`
  height: 100%;
  background-color: ${({ variant }) =>
    variant === 'white' ? '#ffffff' : '#f2f2f2'};
  border: ${({ variant }) => (variant === 'white' ? 'none' : 'none')};
`;
