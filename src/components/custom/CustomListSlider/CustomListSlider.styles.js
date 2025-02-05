import styled from 'styled-components';
import Slider from 'react-slick';

export const CustomListSliderStyled = styled(Slider)`
  height: 100%;

  div {
    height: 100%;
  }

  .slick-slide {
  padding: 0 8px; /* Espaciado horizontal entre los slides */
}

.slick-list {
  margin: 0 -8px; /* Ajusta el margen externo para compensar el padding */
}

  .slick-prev,
  .slick-next {
    background-color: #ffffff !important;
    border-radius: 8px !important;
    width: 52px;
    height: 41px;
    z-index: 2;
    opacity: 0 !important;
    transition: opacity 0.1s ease;
    border: 1px solid #c3c3c3;
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
