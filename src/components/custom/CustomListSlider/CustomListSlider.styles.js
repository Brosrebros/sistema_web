import styled from 'styled-components';
import Slider from 'react-slick';
import arrowRigth from 'assets/img/icons/arrow-right.svg';
import arrowLeft from 'assets/img/icons/arrow-left.svg';

export const CustomListSliderStyled = styled(Slider)`
  height: 100%;

  div {
    height: 100%;
    
    &:focus-visible {
      outline: none;
    }
  }

  .slick-slide {
    padding: 0 8px;
  }

  .slick-list {
    margin: 0 -8px;
  }

  .slick-prev {
    &::before {
      content: '';
      display: block;
      margin: 0 auto;
      width: 20px;
      height: 20px;
      background-image: url(${arrowLeft});
      background-size: 100%;
      background-repeat: no-repeat;
      background-position: center;
    }

    &::after {
      display: none;
    }
  }

  .slick-next {
    &::before {
      content: '';
      display: block;
      margin: 0 auto;
      width: 20px;
      height: 20px;
      background-image: url(${arrowRigth});
      background-size: 100%;
      background-repeat: no-repeat;
      background-position: center;
    }

    &::after {
      display: none;
    }   
  }

  .slick-prev,
  .slick-next {
    background-color: #ffffff !important;
    border-radius: 8px !important;
    width: 52px;
    height: 48px;
    z-index: 2;
    opacity: 0 !important;
    transition: opacity 0.1s ease;
    border: 1px solid #c3c3c3;
    top: ${({id}) => id === "proyects" ? "40%" : "50%"};
  }

  .slick-prev {
    left: 10px;
  }

  .slick-next {
    right: 10px;
  }

  .slick-prev::after,
  .slick-next::after {
    border-right: 2px solid #424242;
    border-top: 2px solid #424242;
    border-radius: 2px;
  }

  &:hover .slick-prev,
  &:hover .slick-next {
    opacity: 1 !important;
  }

  &:hover + div,
  &:hover + div + div {
    opacity: 1 !important;
    transition: opacity 0.1s ease;
  }

  & + div:hover {
    opacity: 1 !important;
  }
`;
