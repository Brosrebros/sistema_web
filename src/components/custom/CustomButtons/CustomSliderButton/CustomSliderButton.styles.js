import Slider from 'react-slick';
import styled from 'styled-components';

export const CustomSliderButtonStyled = styled(Slider)`
  width: 100%;
  height: 100%;

  .slick-slide {
    padding-right: 16px;
  }

  .slick-prev,
  .slick-next {
    background-color: #ffffff !important;
    border-radius: 8px !important;
    width: 40px;
    height: 40px;
    z-index: 2;
    opacity: 0 !important;
    transition: opacity 0.3s ease;
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
`;
