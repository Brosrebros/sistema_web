import styled from 'styled-components';

export const MenuContainer = styled.div`
  width: ${({ isMenuOpen }) => (isMenuOpen ? '270px' : '73px')};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 0px;
  background-color: white;
  border-radius: 12px;
  position: sticky;
  max-height: 870px;
  top: 24px;
  transition: all 0.2s ease;

  & > div:last-child {
    margin-top: auto;
  }
`;

export const MenuSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  padding: 16px 20px;
  border-bottom: 1px solid #f2f2f2;

  &:last-child {
    border: none;
  }

  h6 {
    font-family: 'Aptos_display';
    font-size: 0.6875em;
    font-weight: normal;
    color: #424242;
    line-height: 64%;
    margin: 0px;
    display: ${({ isMenuOpen }) => (isMenuOpen ? 'block' : 'none')};
  }
`;

export const MenuOptionsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const MenuOption = styled.div`
  width:${({ isMenuOpen }) => (isMenuOpen ? '100%' : '41px')};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  padding: 12px;
  border-radius: 12px;
  transition: all 0.2s ease;
  cursor: pointer;

  span {
    font-size: 1em;
    font-weight: normal;
    color: #424242;
    line-height: 106%;
    display: ${({ isMenuOpen }) => (isMenuOpen ? 'block' : 'none')};
  }

  &:hover {
    background-color: #f2f2f2;
  }

  img {
    width: 17px;
    height: 17px;
  }
`;

export const MarginIcon = styled.div`
  width: auto;
  margin-left: auto;
  display: ${({ isMenuOpen }) => (isMenuOpen ? 'block' : 'none')};
`;
