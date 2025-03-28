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
    box-shadow: 0 3px 7px 0 rgba(84, 84, 84, 0.1),
      0 13px 13px 0 rgba(84, 84, 84, 0.09), 0 29px 17px 0 rgba(84, 84, 84, 0.05),
      0 51px 20px 0 rgba(84, 84, 84, 0.01), 0 79px 22px 0 rgba(84, 84, 84, 0);
  }

  &:hover > div:first-child > div:first-child > .slick-prev,
  &:hover > div:first-child > div:first-child > .slick-next,
  &:hover > div:first-child > div:first-child + div + div {
    opacity: 1 !important;
  }

  & > div:first-child {
    height: 100%;
    border-radius: 12px;
    overflow: hidden;
    position: relative;
  }

  #mobile {
    display: none;
  }

  @media (max-width: 1200px) {
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 0px;
    border: none;
    border-bottom: 1px solid #c3c3c3;
    gap: 16px;

    & > div:first-child {
      height: 217px;
      max-width: calc(100vw - 40px);
    }

    #mobile {
      display: flex;
    }

    #desktop {
      display: none;
    }
  }
`;

export const CatalogDataContainer = styled.div`
  width: 100%;
  max-width: 965px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 1200px) {
    gap: 12px;
  }
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

  @media (max-width: 1200px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 12px;
  }
`;

export const MainDataContainer = styled(CatalogDataContainer)`
  gap: 8px;

  span {
    font-size: 1em;
    font-weight: normal;
    color: #424242;
    line-height: 11px;

    @media (max-width: 1200px) {
      font-size: 0.81rem;
    }
  }

  h3 {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;

    font-size: 1.4375em;
    font-weight: bold;
    color: black;
    line-height: 15px;
    margin: 0px;

    @media (max-width: 1200px) {
      font-size: 1.12rem;
    }
  }

  @media (max-width: 1200px) {
    position: relative;

    #mobile {
      position: absolute;
      right: 20px;
      width: 50px;
      height: 50px;
      border-radius: 200px;
      background-color: #dbdbdb;
    }
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

        @media (max-width: 1200px) {
          font-size: 0.81rem;
        }
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

  @media (max-width: 1200px) {
    order: 3;
    h3,
    & > p:last-child {
      display: none;
    }
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
        line-height: 11px;
        color: black;
        margin: 0px;

        img {
          width: 17px;
          height: 17px;
        }
      }
    }

    @media (max-width: 1200px) {
      display: none;
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

    @media (max-width: 1200px) {
      width: 100%;

      & > button:last-child {
        width: 100%;
      }
    }
  }

  @media (max-width: 1200px) {
    order: 5;
  }
`;

export const ImagesCounter = styled.div`
  width: 100px;
  height: 48px;
  position: absolute;
  opacity: 0;
  bottom: ${({ type }) => (type === 'proyects' ? '39px' : '12px')};
  left: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  margin: 0px;
  background-color: white;
  border-radius: 8px;
  transition: all 0.1s ease;

  img {
    width: 20px;
    height: 20px;
  }

  p {
    color: #424242;
    font-size: 1rem;
    margin: 0px;
    line-height: 65%;

    @media (max-width: 1200px) {
      font-size: 0.81rem;
    }
  }
`;

export const ProyectBanner = styled.div`
  width: 100%;
  height: 27px;
  position: absolute;
  bottom: 0px;
  left: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 12px;
  margin: 0px;
  background-color: #257573;
  border-radius: 0px 0px 12px 12px;

  p {
    color: #ffffff;
    font-size: 1rem;
    margin: 0px;
    line-height: 65%;

    @media (max-width: 1200px) {
      font-size: 0.81rem;
    }
  }
`;
