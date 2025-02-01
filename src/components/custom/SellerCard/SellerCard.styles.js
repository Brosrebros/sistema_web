import styled from 'styled-components';

export const SellerCardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 60px auto;
  gap: 24px;
  padding: 16px;
  background-color: #ffffff;
  border: 1px solid #dbdbdb;
  border-radius: 12px;
  transition: all 0.2s ease;

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

  &:hover{ 
    filter: brightness(0.95);
  }

  &:active{ 
    filter: brightness(0.9);
  }
`;

export const TagDateContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > div:first-child {
    gap: 8px;
  }

  & > div:last-child {
    gap: 4px;

    h6 {
      font-weight: 400;
      font-size: 0.81rem;
      color: #424242;
      margin: 0px;

      b {
        font-weight: bold;
        color: #424242;
        margin: 0px;
      }
    }

    img {
      height: 15px;
      width: 15px;
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
    gap: 48px;
  }

  & > div:last-child {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }
`;

export const NumberDataContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 16px;

  h4 {
    font-weight: 700;
    font-size: 1.75rem;
    color: black;
    line-height: 18px;
    margin: 0px;
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
    }

    span {
      font-weight: 400;
      font-size: 1rem;
      color: black;
      line-height: 11px;
      margin: 0px;
    }
  }
`;

export const VerticalBar = styled.span`
  height: 100%;
  width: 1px;
  display: block;
  background-color: #dbdbdb;
`;

export const CircleButton = styled.button`
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  background-color: #ffffff;
  border-radius: 1000px;
  transition: all 0.2s ease;

  img {
    width: 20px;
    height: 20px;
  }

  &:hover {
    filter: brightness(0.9);
  }
`;
