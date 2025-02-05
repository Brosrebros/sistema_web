import styled from 'styled-components';

export const CustomSelectContainer = styled.div`
  display: grid;
  grid-template-columns: 20px auto;
  align-items: center;
  background-color: ${({ background }) =>
    background === 'form' ? '#ffffff' : '#940000'};
  border: 1px solid
    ${({ background }) => (background === 'form' ? '#c3c3c3' : '#ffffff')};
  border-radius: 12px;
  padding: 0 0 0 16px;
  gap: 8px;
  height: 41px;
  transition: all 0.1s ease;
  position: relative;

  @media (max-width: 968px) {
    display: ${({ background }) => (background === 'form' ? 'flex' : 'none')};
  }

  img {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background-color: ${({ background }) =>
      background === 'form' ? '#F9F9F9' : '#A10000'};
  }

  &:active {
    background-color: ${({ background }) =>
      background === 'form' ? '#ECECEC' : '#850000'};
  }
`;

export const CustomSelectStyled = styled.div`
  height: 100%;
  font-weight: 400;
`;

export const CustomDropdown = styled.div`
  padding: 12px 8px;
  position: absolute;
  left: 0;
  top: calc(41px + 8px);
  width: 100%;
  border-radius: 16px;
  z-index: 500;
  max-height: 300px;
  overflow-y: auto;
  background-color: rgb(255, 255, 255);
  border: 1px solid #c3c3c3;

  /* ===== Scrollbar personalizado para WebKit (Chrome, Safari, Edge) ===== */
  &::-webkit-scrollbar {
    width: 8px; /* Ancho del scrollbar */
    border-radius: 10px; /* Bordes redondeados generales */
  }

  &::-webkit-scrollbar-track {
    background: #c3c3c3; /* Color del fondo del scrollbar */
    border-radius: 10px; /* Bordes redondeados en el track */
  }

  &::-webkit-scrollbar-thumb {
    background: #424242; /* Color del "thumb" (barra que se arrastra) */
    border-radius: 10px; /* Bordes redondeados en el thumb */
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #2c2c2c; /* Color cuando el usuario pasa el mouse */
  }

  /* Ocultar flechas del scrollbar en WebKit */
  &::-webkit-scrollbar-button {
    display: none;
    width: 0;
    height: 0;
    background: transparent;
  }

  /* ===== Scrollbar personalizado para Firefox ===== */
  scrollbar-width: thin; /* Hace que el scrollbar sea más delgado */
  scrollbar-color: #424242 #c3c3c3; /* thumb (drag) y track (fondo) */

  /* Firefox no permite border-radius directamente, pero este truco ayuda */
  & {
    scrollbar-arrow-color: transparent; /* En versiones antiguas */
    scrollbar-width: thin;
  }
`;

export const CustomOption = styled.div`
  cursor: pointer;
  background-color: rgb(255, 255, 255);
  padding: 4px 8px;
  border-radius: 12px;
  margin-bottom: 4px;

  span {
    display: block;
    color: #424242;
    font-size: 1em;
    font-weight: 400;
    text-overflow: ellipsis;
  }

  &:hover {
    filter: brightness(90%);
  }
`;

export const CustomSelectWrapper = styled.div`
  font-size: 14px;
  border: none;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  color: ${({ background }) => (background === 'form' ? '#424242' : '#ffffff')};
  min-height: 35px;
  border-radius: 12px;
  padding-right: 16px;
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    display: block;
    color: ${({ background }) =>
      background === 'form' ? '#424242' : '#ffffff'};
    font-size: 1rem;
    font-weight: 400;
    text-overflow: ellipsis;
  }
`;

export const CustomHiddenInput = styled.input`
  display: none;
`;
