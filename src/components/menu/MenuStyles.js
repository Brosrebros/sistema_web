import styled from 'styled-components';

export const MenuContainer = styled.div`
  width: ${({ isMenuOpen }) => (isMenuOpen ? '270px' : '100px')};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 0px;
  background-color: white;
  position: sticky;
  max-height: calc(100vh - 73px);
  top: 73px;
  transition: width 0.2s ease;
  z-index: 998;

  & > div:last-child {
    margin-top: auto;
    border-top: 1px solid #f2f2f2;
  }

  & > div:nth-child(3) {
    border: none;
  }

`;

export const MenuSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  padding: 16px 24px;
  border-bottom: 1px solid #f2f2f2;

  &:last-child {
    border: none;
  }

  h6 {
    font-family: 'Aptos';
    font-size: 0.81rem;
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
  width: ${({ isMenuOpen }) => (isMenuOpen ? '100%' : '41px')};
  height: ${({ isMenuOpen }) => (isMenuOpen ? 'auto' : '41px')};
  display: flex;
  justify-content: ${({ isMenuOpen }) => (isMenuOpen ? 'flex-start' : 'center')};
  align-items: center;
  gap: 8px;
  padding: 12px;
  border-radius: 12px;
  transition: background 0.2s ease;
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
    width: 20px;
    height: 20px;
  }
`;

export const MarginIcon = styled.div`
  width: auto;
  margin-left: auto;
  display: ${({ isMenuOpen }) => (isMenuOpen ? 'block' : 'none')};
`;
