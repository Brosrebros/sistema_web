import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 2em;
  background-color: #940000;
`;

export const NavbarMainDataContainer = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

export const NavbarLogoMenuContainer = styled(NavbarMainDataContainer)`
  gap: 20px;
  color: #ffffff;
  font-size: 1.5em;

  img {
    width: 159px;
    height: auto;
  }

  svg {
    cursor: pointer;
  }
`;

export const NavbarOptionsContainer = styled(NavbarMainDataContainer)`
  gap: 24px;
`;

export const NavbarButtonsContainer = styled(NavbarMainDataContainer)`
  gap: 10px;

  img {
    width: 24px;
    height: auto;
    cursor: pointer;
  }
`;
