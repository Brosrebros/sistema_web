import styled from 'styled-components';

export const SliderCardContainer = styled.div`
  width: 100%;
  width: 290px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #dbdbdb;
  transition: all 0.1s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    background-color: #f9f9f9;
  }

  &:active {
    background-color: #ececec;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 12px;
  background-color: #c6c6c6;
  overflow: hidden;
  position: relative;
`;

export const TagContainer = styled.div`
  width: 290px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;

  font-size: 0.8125em;
  font-weight: normal;
  font-family: 'Aptos';
  color: #424242;
`;

export const DataContainer = styled(TagContainer)`
  width: 100%;
  justify-content: space-between;

  span {
    font-size: 1.231em;
    font-weight: normal;
    font-family: 'Aptos';
    color: #424242;
    margin: 0px;
    line-height: 70%;
  }

  h4 {
    font-size: 1.4375em;
    font-weight: bold;
    font-family: 'Aptos';
    color: black;
    margin: 0px;
    line-height: 80%;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 200px;
    background-color: #dbdbdb;
  }

  & + span {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;

    font-size: 11px;
    font-weight: normal;
    font-family: 'Aptos';
    color: #424242;
    margin: 0px;
    line-height: 70%;
  }
`;

export const LikeButton = styled.button`
  width: 41px;
  height: 41px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 40px;
  border: none;
  outline: none;
  position: absolute;
  top: 12px;
  right: 12px;
  font-size: 1.3em;
  color: #940000;
  transition: all 0.2s ease;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const ProyectBanner = styled.span`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  border-radius: 0px 0px 12px 12px;
  background-color: #257573;

  position: absolute;
  bottom: 0;
  left: 0;

  font-size: 0.8125em;
  font-family: 'Aptos';
  color: rgb(255, 255, 255);
  margin: 0px;
  line-height: 70%;

  b {
    font-size: 1em;
    font-weight: normal;
    font-family: 'Aptos';
    color: rgb(255, 255, 255);
    margin: 0px;
    line-height: 70%;
  }
`;
