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
