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
  max-height: calc(100vh - 80px);
  top: 80px;
  transition: width 0.2s ease;
  z-index: 1000;

  & > div:last-child {
    margin-top: auto;
  }

  & > div:nth-child(2) {
    height: 100%;
  }

  & > div:nth-child(4) {
    border: none;
  }

  &:hover {
    width: 270px;
  }

  &:hover > div > h6 {
    display: flex;
  }

  &:hover > div > div > div {
    width: 100%;
    justify-content: flex-start;

    & > span {
      display: flex;
    }
  }

  &:hover > div:nth-child(2) > div:last-child {
    display: flex;
  }

  &:hover > div:nth-child(2) > div:last-child > div {
    width: 182px;
  }

  @media (max-width: 1200px) {
    display: none;
    position: absolute;
    height: 100vh;
    top: 0;
    /* transform: translateX(-270px); */
  }
`;

export const MenuSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  padding: 16px 24px;

  &:last-child {
    border: none;
  }

  h6 {
    font-family: 'Aptos';
    font-size: 0.81rem;
    font-weight: normal;
    color: #717171;
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
  align-items: flex-start;
  gap: 8px;
`;

export const MenuOption = styled.div`
  width: ${({ isMenuOpen }) => (isMenuOpen ? '100%' : '52px')};
  height: 48px;
  display: flex;
  justify-content: ${({ isMenuOpen }) =>
    isMenuOpen ? 'flex-start' : 'center'};
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border-radius: 12px;
  background-color: ${({ active }) => (active ? '#F2F2F2' : '#ffffff')};
  outline: ${({ active }) => (active ? '1px solid #c3c3c3' : 'none')};
  outline-offset: -1px;
  transition: all 0.1s ease;
  cursor: pointer;
  box-sizing: border-box;

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

  &:active {
    background-color: #e4e4e4;
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

export const CustomCorner = styled.div`
  width: 12px;
  height: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: -12px;
  z-index: 1000;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const PremiumPack = styled.div`
  width: 100%;
  display: ${({ isMenuOpen }) => (isMenuOpen ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 12px;
  margin-top: auto;
  transition: all 0.1s ease;

  & > div {
    width: 182px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;

    h4 {
      font-weight: 700;
      font-size: 1.19rem;
      line-height: 16px;
      color: black;
      margin: 0px;
    }

    p {
      font-weight: 400;
      font-size: 1rem;
      line-height: 137%;
      color: black;
      margin: 0px;
    }
  }

  & > button {
    width: 182px;
    font-size: 0.98em;
  }
`;
