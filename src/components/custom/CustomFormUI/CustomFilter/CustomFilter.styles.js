import styled from 'styled-components';

export const FilterGroupContainer = styled.div`
  width: 100%;
  margin-top: 1em;
  grid-column: span 2;
`;

export const FilterGroupTitle = styled.h5`
  font-size: 1em;
  color: black;
  font-weight: bold;
`;

export const FilterGroupOptions = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 1em;
  gap: 4px;
`;

export const CustomSeeMoreButton = styled.button`
  width: auto;
  height: 30px;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background-color: white;
  border-radius: 12px;
  margin-left: auto;
  font-weight: 400;
  font-size: 1rem;
  line-height: 117%;
  color: #424242;
  font-family: 'Aptos';

  img {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background-color: #f2f2f2;
  }

  &:active {
    background-color: #c3c3c3;
  }
`;
