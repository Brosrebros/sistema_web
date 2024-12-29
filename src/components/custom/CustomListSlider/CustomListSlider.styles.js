import styled from "styled-components";
import Slider from 'react-slick';

export const CustomListSliderStyled = styled(Slider)`
  height: 100%;

  div {
    height: 100%;
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

  &:hover + p {
    opacity: 1 !important;
    transition: opacity 0.3s ease;
  }
`;
