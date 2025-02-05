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
  width: 100%;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  padding: 12px 8px;
  background-color: #ffffff;
  border: 1px solid #c3c3c3;
  border-radius: 16px;
  position: absolute;
  left: 0;
  top: calc(41px + 8px);
  z-index: 500;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #c3c3c3;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #424242;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #2c2c2c;
  }

  &::-webkit-scrollbar-button {
    display: none;
    width: 0;
    height: 0;
    background: transparent;
  }

  scrollbar-width: thin;
  scrollbar-color: #424242 #c3c3c3;

  & {
    scrollbar-arrow-color: transparent;
    scrollbar-width: thin;
  }
`;

export const CustomOption = styled.div`
  width: 100%;
  height: 35px;
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
  }

  &:hover {
    background-color: #f2f2f2;
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
