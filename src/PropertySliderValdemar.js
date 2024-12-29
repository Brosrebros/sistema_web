import React from 'react';
import PropertyGrid from './PropertyGridValdemar';
import PropTypes from 'prop-types';
import CustomSliderButton from 'components/custom/CustomButtons/CustomSliderButton/CustomSliderButton';

const PropertySliderValdemar = ({ data }) => {

  console.log(data)

  const sliderSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3.5, // Se asegura de que solo se muestra una card completa
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: false, // Habilita el modo centrado
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3.5,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3.5 - 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3.5 - 2,
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
      <h5 className="black_important bolddd fs-10"></h5>
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
