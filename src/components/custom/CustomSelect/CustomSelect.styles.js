import styled from 'styled-components';

export const CustomSelectContainer = styled.div`
  display: flex;
  border-radius: 12px;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ background }) =>
    background === 'form' ? '#f2f2f2' : '#940000'};
  border: ${({ background }) =>
    background === 'form' ? 'none' : '1px solid #ffffff'};
  padding: 0 0 0 16px;
  gap: 8px;
  height: 41px;
  font-family: 'Aptos_Display';
  transition: all 0.2s ease;

  @media (max-width: 968px) {
    display: ${({ background }) => (background === 'form' ? 'flex' : 'none')};
  }

  &:hover {
    background-color: ${({ background }) =>
    background === 'form' ? '#c6c6c6' : '#760000'};
  }
`;

export const CustomSelectStyled = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  font-weight: lighter;
`;

export const CustomDropdown = styled.div`
  padding: 12px;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  border-radius: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  min-width: 100px;
  max-height: 200px;
  overflow-y: auto;
  background-color: rgb(255, 255, 255);

  p {
    font-size: 0.75em;
    color: #424242;
    font-weight: 600;
    display: block;
    margin-bottom: 12px;
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
    font-weight: lighter;
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
  color: ${({ background }) =>
      background === 'form' ? '#424242' : '#ffffff'};;
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
    font-weight: lighter;
    text-overflow: ellipsis;
  }
`;

export const CustomHiddenInput = styled.input`
  display: none;

  & + svg {
    position: absolute;
    right: 12px;
    top: 10px;
  }
`;
