import styled from 'styled-components';

export const CatalogCardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto 100%;
  gap: 22px;
  padding: 16px;
  background-color: white;
  border-radius: 12px;
`;

export const CatalogDataContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const TagContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;

  & > div:first-child {
    display: flex;
    align-items: center;
    gap: 16px;

    font-size: 0.6875em;
    font-weight: normal;
    color: #424242;
    line-height: 7px;
  }

  & > div:last-child {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const MainDataContainer = styled(CatalogDataContainer)`
  gap: 12px;

  span {
    font-size: 1em;
    font-weight: normal;
    color: #424242;
    line-height: 11px;
  }

  h3 {
    font-size: 1.4375em;
    font-weight: bold;
    color: black;
    line-height: 15px;
    margin: 0px;
  }

  p {
    font-size: 0.8125em;
    font-weight: normal;
    color: #424242;
    line-height: 9px;
    width: 100%;
  }

  img {
    width: 15px;
    height: 15px;
  }
`;

export const DataDescription = styled(CatalogDataContainer)`
  gap: 16px;

  h3 {
    font-size: 1.1875em;
    font-weight: bold;
    color: black;
    line-height: 12px;
    margin: 0px;
  }

  p {
    font-size: 1em;
    font-weight: normal;
    color: #424242;
    line-height: 107%;
    max-width: 90ch;
    margin: 0px;
  }
`;

export const OptionsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 94px;
    height: auto;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
`;
