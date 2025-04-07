import styled from 'styled-components';

export const ModalContainerStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000000;

  @media (max-width: 1200px) {
    & > div {
      align-items: flex-end !important;
    }
  }
`;
