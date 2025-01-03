import Slider from 'react-slick';
import styled from 'styled-components';

export const CustomSliderButtonStyled = styled(Slider)`
  height: 100%;

  .slick-prev,
  .slick-next {
    background-color: #ffffff !important;
    border-radius: 8px !important;
    width: 40px;
    height: 40px;
    z-index: 2;
    opacity: 0 !important; /* Oculta las flechas inicialmente */
    transition: opacity 0.3s ease; /* Transición suave para la aparición */
  }

  .slick-prev::after,
  .slick-next::after {
    border-right: 2px solid #424242;
    border-top: 2px solid #424242;
    border-radius: 2px;
  }

  &:hover .slick-prev,
  &:hover .slick-next {
    opacity: 1 !important; /* Muestra las flechas al hacer hover */
  }
`;
