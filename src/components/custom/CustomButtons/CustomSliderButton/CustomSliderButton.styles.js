import Slider from 'react-slick';
import styled from 'styled-components';
import arrowRigth from 'assets/img/icons/arrow-right.svg';
import arrowLeft from 'assets/img/icons/arrow-left.svg';

export const CustomSliderButtonStyled = styled(Slider)`
  max-width: 100vw;
  height: 100%;

  .slick-slide {
    padding-right: 16px;
  }

  .slick-prev,
  .slick-next {
    background-color: #ffffff !important;
    border-radius: 120px !important;
    width: 48px;
    height: 48px;
    z-index: 2;
    opacity: 0 !important;
    border: 1px solid #c3c3c3 !important;
    transition: all 0.1s ease;
    transform: translateY(-80px);

    &:hover {
      background-color: #f2f2f2;
    }

    &:active {
      background-color: #c3c3c3;
    }
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

  .slick-prev::after,
  .slick-next::after {
    border-right: 2px solid #424242;
    border-top: 2px solid #424242;
    border-radius: 2px;
  }

  .slick-prev {
    left: 12px;
  }

  .slick-next {
    right: 12px;
  }

  &:hover .slick-prev,
  &:hover .slick-next {
    opacity: 1 !important; /* Muestra las flechas al hacer hover */
  }

  .slick-list {
    height: 500px;

    @media (max-width: 968px) {
      height: auto;
    }
  }
`;
