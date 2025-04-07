import styled from 'styled-components';

export const FilterGroupContainer = styled.div`
  width: 100%;
  margin-top: 1em;
  grid-column: span 2;

  @media (max-width: 1200px) {
    margin-top: 12px;
  }
`;

export const FilterGroupTitle = styled.h5`
  font-size: 1em;
  color: black;
  font-weight: bold;
  margin: 0px;

  @media (max-width: 1200px) {
    font-size: 0.81rem;
  }
`;

export const FilterGroupOptions = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 12px;
  row-gap: 16px;
  margin-top: 1em;
  overflow: visible;

  @media (max-width: 1200px) {
    column-gap: 12px;
    row-gap: 16px;
  }
`;

export const CustomSeeMoreButton = styled.button`
  width: auto;
  height: 48px;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background-color: white;
  border-radius: 12px;
  margin-top: 16px;
  margin-left: auto;
  font-weight: 700;
  font-size: 1rem;
  line-height: 117%;
  color: #424242;
  font-family: 'Roboto';

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

  @media (max-width: 1200px) {
    font-size: 0.81rem;
    margin-top: 12px;
  }
`;
