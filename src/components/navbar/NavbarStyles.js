import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 24px;
  background-color: #ffffff;
`;

export const NavbarMainDataContainer = styled.div`
  width: auto;
  display: grid;
  grid-template-columns: 270px auto;
  gap: 24px;
`;

export const NavbarLogoMenuContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
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

  & > button:last-child {
    color: #940000;
  }
`;

export const NavbarButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  & > button:last-child {
    border: none;
  }
`;
