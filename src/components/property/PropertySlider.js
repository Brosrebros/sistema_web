import React from 'react';
import { TitleValdemar } from '../mainpage/TitleValdemar';
import PropertyGrid from './PropertyGrid';
import PropTypes from 'prop-types';
import styles from 'styles.module.css';
import CustomSliderButton from 'components/custom/CustomButtons/CustomSliderButton/CustomSliderButton';

const PropertySlider = ({ data, title, slidesToShow = 5.4 }) => {
  const sliderSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow, // Se asegura de que solo se muestra una card completa
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: false, // Habilita el modo centrado
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: slidesToShow - 1,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: slidesToShow - 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: slidesToShow - 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      {title ? <TitleValdemar classname={styles.title} >{title}</TitleValdemar> : null}
      {data ? (
        <CustomSliderButton
          {...sliderSettings}
          className="full-height-slider slick-slider-arrow-inner similar-courses-slider"
        >
          {data.map(property => (
            <PropertyGrid
              property={property}
              key={property.id}
              color="#F9F9F9"
            />
          ))}
        </CustomSliderButton>
      ) : null}
    </div>
  );
};

PropertySlider.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      tipoPropiedad: PropTypes.string,
      categoria: PropTypes.string,
      precio: PropTypes.number,
      imagenes: PropTypes.arrayOf(PropTypes.string),
      estado: PropTypes.string,
    })
  ),
  title: PropTypes.string,
  slidesToShow: PropTypes.number,
};

export default PropertySlider;
