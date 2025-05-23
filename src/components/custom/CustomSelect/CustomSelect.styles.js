import styled from 'styled-components';

export const CustomSelectContainer = styled.div`
  min-width: 145px;
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
  height: 48px;
  transition: all 0.1s ease;
  position: relative;

  @media (max-width: 1200px) {
    display: ${({ background }) => (background === 'form' ? 'flex' : 'none')};
  }

  img {
    width: 20px;
    height: 20px;
    margin-left: auto;
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
  width: 100%;
  height: 100%;
  font-weight: 400;

  @media (max-width: 1200px) {
    font-size: 0.81rem;
    width: 95%;
  }
`;

export const DropdownContainer = styled.div`
  width: 100%;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 12px 8px;
  background-color: #ffffff;
  border: 1px solid #c3c3c3;
  border-radius: 16px;
  position: absolute;
  left: 0;
  top: calc(48px + 8px);
  z-index: 500;
  padding-right: 10px;
`;

export const CustomDropdown = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 6px;
  overflow-y: auto;

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px 16px;
    height: 21px;
    margin: 0px;

    font-weight: 700;
    font-size: 0.81rem;
    color: #424242;
  }

  &::-webkit-scrollbar {
    width: 4px;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #f2f2f2;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c3c3c3;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgb(204, 204, 204);
  }

  &::-webkit-scrollbar-button {
    display: none;
    width: 0;
    height: 0;
    background: transparent;
  }
`;

export const CustomOption = styled.div`
  width: 95%;
  height: 39px;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #ffffff;
  padding: 12px 16px;
  border-radius: 12px;

  span {
    display: block;
    color: #424242;
    font-size: 1em;
    font-weight: 400;
    text-overflow: ellipsis;

    @media (max-width: 1200px) {
      font-size: 0.81rem;
    }
  }

  &:hover {
    background-color: #f2f2f2;
  }
`;

export const CustomSelectWrapper = styled.div`
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

    @media (max-width: 1200px) {
      font-size: 0.81rem;
    }
  }
`;

export const CustomHiddenInput = styled.input`
  display: none;
`;
