import React from 'react';
import SliderCard from 'components/custom/SliderCard/SliderCard';
import PropTypes from 'prop-types';
import CustomSliderButton from 'components/custom/CustomButtons/CustomSliderButton/CustomSliderButton';

const PropertySliderValdemar = ({ data, slidesToShow }) => {
  console.log("aca no", data)

  const sliderSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow, // Se asegura de que solo se muestra una card completa
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: false, // Habilita el modo centrado
    responsive: [
      {
        breakpoint: 1760,
        settings: {
          slidesToShow: slidesToShow - 0.4, //4.8
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: slidesToShow - 0.8,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: slidesToShow - 0.9,
        },
      },
      {
        breakpoint: 1380,
        settings: {
          slidesToShow: slidesToShow - 1,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: slidesToShow - 1.2,
        },
      },
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: slidesToShow - 1.6,
        },
      },
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 1.4,
        },
      },
    ],
  };

  return (
    <div style={{ width: '100%'}}>
      {data ? (
        <CustomSliderButton
          {...sliderSettings}
        >
          {data.map(property => (
            <SliderCard property={property} key={property.id} type="proyect" />
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
