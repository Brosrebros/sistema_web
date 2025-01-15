import styled from 'styled-components';
import { SecondaryCustomButtonStyled } from '../CustomButtons/SecondaryCustomButton/SecondaryCustomButton.styles';

export const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #ffffff;
  border-radius: 12px;
`;

export const NumberSelector = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 6px;
  background-color: #f2f2f2;
  border-radius: 12px;
`;

export const SquareButton = styled.button`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border: none;
  outline: none;
  background-color: #940000;
  border-radius: 12px;
  padding: 6px;
  transition: all 0.2s ease;
  font-size: 1em;
  font-weight: normal;
  font-family: 'Aptos';
  color: #ffffff;
  line-height: 100%;
  cursor: pointer;

  img {
    width: 24px;
    height: 24px;
  }

  &:hover {
    filter: brightness(0.9);
  }
`;

export const PagesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const CircleButton = styled(SecondaryCustomButtonStyled)`
  background-color: ${({ variant }) =>
    variant === 'white' ? '#ffffff' : '#f2f2f2'};
  border-radius: 100px;
`;
