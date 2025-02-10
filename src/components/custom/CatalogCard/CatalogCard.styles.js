import styled from 'styled-components';

export const CatalogCardContainer = styled.div`
  width: 100%;
  height: 335px;
  cursor: pointer;
  display: grid;
  grid-template-columns: 354px auto;
  gap: 22px;
  padding: 16px;
  background-color: #ffffff;
  border-radius: 12px;
  border: 1px solid #c3c3c3;
  transition: all 0.1s ease;

  &:hover {
    background-color: #f9f9f9;
  }

  &:active {
    background-color: #ececec;
  }

  &:hover > div:first-child > div:first-child > .slick-prev,
  &:hover > div:first-child > div:first-child > .slick-next,
  &:hover > div:first-child > div:first-child + div + div {
    opacity: 1 !important;
  }
`;

export const CatalogDataContainer = styled.div`
  width: 100%;
  max-width: 965px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const TagContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;

  & > div:first-child {
    display: flex;
    align-items: center;
    gap: 16px;

    font-size: 0.82rem;
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
  gap: 8px;

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
`;

export const DataDescription = styled(CatalogDataContainer)`
  gap: 16px;

  & > div:first-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 12px;

    h3 {
      font-size: 1.1875em;
      font-weight: bold;
      color: black;
      line-height: 12px;
      margin: 0px;
    }

    & > div:nth-child(2) {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 4px;

      img {
        width: 20px;
        height: 20px;
      }

      p {
        font-size: 1em;
        font-weight: normal;
        color: #717171;
        line-height: 11px;
        margin: 0px;
      }
    }
  }

  p {
    font-size: 1em;
    font-weight: normal;
    color: #424242;
    line-height: 107%;
    max-width: 68ch;
    margin: 0px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const OptionsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  & > div:first-child {
    display: grid;
    grid-template-columns: 50px auto;
    align-items: center;
    gap: 12px;

    & > img:first-child {
      width: 50px;
      height: 50px;
      border-radius: 200px;
      background-color: #dbdbdb;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 8px;

      h5 {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;

        font-family: 'Roboto';
        font-weight: 400;
        font-size: 1rem;
        line-height: 137%;
        color: black;
        margin: 0px;

        img {
          width: 17px;
          height: 17px;
        }
      }
    }
  }

  & > div:last-child {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;

    & > button:first-child {
      color: #940000;
      border: 1px solid ${({ fav }) => (fav ? '#940000' : '#c3c3c3')};
    }
  }
`;
