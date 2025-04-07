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

  @media (max-width: 1200px) {
    padding: 8px 20px 0px 20px;
  }
`;

export const NavbarMainDataContainer = styled.div`
  width: auto;
  display: grid;
  grid-template-columns: 246px auto;
  gap: 24px;

  @media (max-width: 1200px) {
    width: 100%;
    display: flex;

    & > button:last-child {
      display: none;
    }
  }
`;

export const NavbarLogoMenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  #mobile {
    display: none;
  }

  button {
    border: none;
  }

  & > img:nth-child(2) {
    width: 164px;
    height: auto;
  }

  & > button:nth-child(3) {
    display: none;
  }

  h3 {
    font-weight: 700;
    font-size: 0.94rem;
    line-height: 133%;
    text-align: center;
    color: black;
  }

  @media (max-width: 1200px) {
    width: 100%;
    height: 48px;
    padding: 0px;
    justify-content: center;

    & > img:nth-child(2) {
      width: 120px;
    }

    & > button:nth-child(3) {
      display: flex;
    }

    #mobile {
      display: flex;
    }

    #desktop {
      display: none;
    }

    & > button:first-child {
      position: absolute;
      left: 0;
    }
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
    position: relative;
  }

  @media (max-width: 1200px) {
    display: none;
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

  @media (max-width: 1200px) {
    display: none;
  }
`;
