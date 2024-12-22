import React from 'react';
import Slider from 'react-slick';
import { TitleValdemar } from '../mainpage/TitleValdemar';
import PropertyGrid from './PropertyGrid';
import PropTypes from 'prop-types';
import styles from 'styles.module.css';

const PropertySlider = ({ data, title, slidesToShow = 4 }) => {
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    initialSlide: 2,
    centerMode: true, // Habilita el modo centrado
    centerPadding: '50px', // Controla cuánto de la tarjeta parcialmente visible se muestra
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: slidesToShow,
          centerPadding: '40px',
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: slidesToShow - 1,
          centerPadding: '30px',
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: slidesToShow - 2,
          centerPadding: '20px',
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          centerPadding: '15px',
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerPadding: '10px',
        },
      },
    ],
  };

  return (
    <div>
      {title ? <TitleValdemar classname={styles.title} >{title}</TitleValdemar> : null}
      {data ? (
        <Slider
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
        </Slider>
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
