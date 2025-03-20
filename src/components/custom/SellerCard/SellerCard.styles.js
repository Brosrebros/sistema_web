import styled from 'styled-components';

export const SellerCardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 60px auto;
  gap: 24px;
  padding: 16px;
  background-color: #ffffff;
  border: 1px solid #c3c3c3;
  border-radius: 12px;
  transition: all 0.1s ease;
  cursor: pointer;

  & > img:first-child {
    width: 60px;
    height: 60px;
    background-color: #dbdbdb;
    border-radius: 1000px;
  }

  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 24px;
  }

  &:hover {
    box-shadow: 0 3px 7px 0 rgba(84, 84, 84, 0.1),
      0 13px 13px 0 rgba(84, 84, 84, 0.09), 0 29px 17px 0 rgba(84, 84, 84, 0.05),
      0 51px 20px 0 rgba(84, 84, 84, 0.01), 0 79px 22px 0 rgba(84, 84, 84, 0);
  }

  #mobile {
    display: none;
  }

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    box-shadow: none;
    border: none;
    border-bottom: 1px solid #c3c3c3;
    border-radius: 0px;
    
    &:hover {
      box-shadow: none;
    }

    #mobile {
      display: block;
    }

    #desktop {
      display: none;
    }

    & > img:first-child {
      display: none;
    }
  }
`;

export const TagDateContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > div:nth-child(2) {
    gap: 8px;

    @media (max-width: 1200px) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }

  & > div:last-child {
    gap: 4px;

    h6 {
      font-weight: 400;
      font-size: 0.815rem;
      color: #717171;
      margin: 0px;

      b {
        font-weight: bold;
        color: #717171;
        margin: 0px;
      }

      @media (max-width: 1200px) {
        font-size: 0.62rem;
      }
    }

    img {
      height: 15px;
      width: 15px;
    }

    @media (max-width: 1200px) {
      position: absolute;
      right: 0;
    }
  }

  @media (max-width: 1200px) {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 12px;

    & > img:first-child {
      width: 50px;
      height: 50px;
      background-color: #dbdbdb;
      border-radius: 1000px;
    }
  }
`;

export const MainDataContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;

  div {
    max-height: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    h4 {
      font-weight: 700;
      font-size: 1.19rem;
      color: black;
      margin: 0px;
      line-height: 12px;

      @media (max-width: 1200px) {
        font-size: 0.94rem;
      }
    }

    img {
      width: 17px;
      height: 17px;
    }
  }

  p {
    max-width: 80ch;
    font-weight: 400;
    font-size: 1rem;
    color: #424242;
    margin: 0px;

    @media (max-width: 1200px) {
      font-size: 0.81rem;
    }
  }
`;

export const SecondaryDataContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0px;

    @media (max-width: 1200px) {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      row-gap: 24px;
      column-gap: 0px;
    }
  }

  & > div:last-child {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;

    & > button:nth-child(1) {
      color: #940000;
    }

    @media (max-width: 1200px) {
      width: 100%;

      & > button:last-child {
        width: 100%;
      }
    }
  }

  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const NumberDataContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 0px 48px 0px 0px;
  gap: 16px;

  h4 {
    font-weight: 700;
    font-size: 1.75rem;
    color: black;
    line-height: 18px;
    margin: 0px;

    @media (max-width: 1200px) {
      font-size: 1.19rem;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;

    h5 {
      font-weight: 700;
      font-size: 1.19rem;
      color: #000;
      line-height: 12px;
      margin: 0px;

      @media (max-width: 1200px) {
        font-size: 0.94rem;
      }
    }

    span {
      font-weight: 400;
      font-size: 1rem;
      color: black;
      line-height: 11px;
      margin: 0px;

      @media (max-width: 1200px) {
        font-size: 0.81rem;
        line-height: 9px !important;
      }
    }
  }

  @media (max-width: 1200px) {
    padding: 0px;
    gap: 8px;
    justify-content: flex-start;
  }
`;

export const VerticalBar = styled.span`
  height: 100%;
  width: 1px;
  display: block;
  background-color: #dbdbdb;

  @media (max-width: 1200px) {
    display: none;
  }
`;
