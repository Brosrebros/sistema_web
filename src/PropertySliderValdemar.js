import React from 'react';
import Slider from 'react-slick';
import PropertyGrid from './PropertyGridValdemar';
import PropTypes from 'prop-types';

const PropertySliderValdemar = ({ data, slidesToShow = 4.5 }) => {
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
          slidesToShow: slidesToShow,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: slidesToShow - 1,
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
      <h5
        className="black_important bolddd fs-10"
        style={{
          // fontSize: '20px',
        }}
      >
        {/* {children} */}
      </h5>
      {data ? (
        <Slider
          {...sliderSettings}
          className="full-height-slider slick-slider-arrow-inner similar-courses-slider"
        >
          {data.map((property) => (
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

PropertySliderValdemar.propTypes = {
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

export default PropertySliderValdemar;
