import styled from 'styled-components';

export const DataContainer = styled.div`
  width: 100%;
  max-width: 807px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 12px;

  h4 {
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 1.19rem;
    line-height: 116%;
    color: black;
    margin: 0px;
  }
`;

export const ItemsContainer = styled.ul`
  list-style: none;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin: 0px;
  padding: 0px;

  div, li {
    width: 100%;
  }
`;
