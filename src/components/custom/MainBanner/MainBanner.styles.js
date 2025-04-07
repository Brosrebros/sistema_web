import styled from 'styled-components';
import bannerImg from 'assets/img/banner.jpg';

export const Banner = styled.div`
  width: 100%;
  height: 444px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 24px;
  gap: 24px;
  background-color: #c6c6c6;
  border-radius: 12px;
  overflow: hidden;
  background-image: url(${bannerImg});
  background-size: cover;
  background-position: center;

  @media (max-width: 1200px) {
    max-width: 100vw;
    height: 450px;
    padding: 20px;
  }
`;

export const BannerWrapper = styled.div`
  max-width: 100vw;
  height: 100%;
  display: flex !important;
  flex-direction: column;
  justify-content: ${({ type }) => (type === 'home' ? 'flex-end' : 'center')};
  align-items: flex-start;
  gap: 24px;

  h1 {
    font-size: 1.75rem;
    font-weight: bolder;
    font-family: 'Roboto';
    color: black;
    margin: 0px;
    line-height: 100%;

    @media (max-width: 1200px) {
      font-size: 1.38rem;
      max-width: 20ch;
      line-height: 110%;
    }
  }

  h2 {
    font-size: 1.75rem;
    font-weight: bolder;
    font-family: 'Roboto';
    color: black;
    margin: 0px;
    line-height: 120%;

    @media (max-width: 1200px) {
      font-size: 1.38rem;
      max-width: 20ch;
    }
  }

  p {
    font-size: 1em;
    font-weight: normal;
    font-family: 'Roboto';
    color: #424242;
    max-width: 55ch;
    margin: 0px;
    line-height: 140%;

    @media (max-width: 1200px) {
      font-size: 0.81rem;
      max-width: 38ch;
    }
  }
`;
