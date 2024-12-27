import styled from 'styled-components';

export const CustomSelectContainer = styled.div`
  display: flex;
  border-radius: 0.6rem;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ background }) =>
    background === 'form' ? '#f2f2f2' : '#ffffff'};
  padding: 0 0 0 8px;
  gap: 12px;
  height: 36px;
  min-width: ${({ size }) => (size === 'large' ? '180px' : 'auto')};
  font-family: 'Aptos_Display';

  @media (max-width: 968px) {
    display: ${({ background }) => (background === 'form' ? 'flex' : 'none')};
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
  background-color: rgb(255, 255, 255);
  border-radius: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  min-width: 100px;
  max-height: 200px;
  overflow-y: auto;

  p {
    font-size: 12px;
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
  border-radius: 8px;
  margin-bottom: 4px;

  span {
    display: block;
    color: #424242;
    font-size: 12px;
    font-family: 'Aptos_Display', sans-serif;
    font-weight: lighter;
    text-overflow: ellipsis;
  }

  &:hover {
    background-color: rgb(216, 216, 216);
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
  gap: 12px;
  color: #424242;
  background-color: ${({ background }) =>
    background === 'form' ? '#F2F2F2' : '#FFFFFF'};
  min-height: 35px;
  border-radius: 0.6rem;
  padding-right: 12px;
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    display: block;
    color: #424242;
    font-size: 12px;
    font-family: 'Aptos_Display', sans-serif;
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
