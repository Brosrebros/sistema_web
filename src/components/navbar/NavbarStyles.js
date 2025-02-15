import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 24px;
  background-color: #ffffff;
  transition: all 0.3s ease;
  z-index: 999;
  box-shadow: ${({ isScrolled }) =>
    isScrolled
      ? '0 5px 10px 0 rgba(0, 0, 0, 0.05), 0 19px 19px 0 rgba(0, 0, 0, 0.04), 0 43px 26px 0 rgba(0, 0, 0, 0.03), 0 76px 30px 0 rgba(0, 0, 0, 0.01), 0 119px 33px 0 rgba(0, 0, 0, 0)'
      : 'none'};
`;

export const NavbarMainDataContainer = styled.div`
  width: auto;
  display: grid;
  grid-template-columns: 246px auto;
  gap: 24px;
`;

export const NavbarLogoMenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 24px;

  button {
    border: none;
  }

  & > img:last-child {
    width: 159px;
    height: auto;
  }
`;

export const NavbarOptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const NavbarButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  & > button:last-child {
    border: none;
  }
`;

export const NavbarExtraButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  & > button:last-child {
    color: #940000;
  }
`;
