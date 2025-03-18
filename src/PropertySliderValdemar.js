import React from 'react';
import SliderCard from 'components/custom/SliderCard/SliderCard';
import PropTypes from 'prop-types';
import CustomSliderButton from 'components/custom/CustomButtons/CustomSliderButton/CustomSliderButton';

const PropertySliderValdemar = ({ data, slidesToShow }) => {
  const sliderSettings = {
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    infinite: false,
    speed: 500,
    centerPadding: '32px',
    responsive: [
      {
        breakpoint: 1760,
        settings: {
          slidesToShow: slidesToShow - 0.2, //4.8
        },
      },
      {
        breakpoint: 1660,
        settings: {
          slidesToShow: slidesToShow - 1, //4.4
        },
      },
      {
        breakpoint: 1560,
        settings: {
          slidesToShow: slidesToShow - 0.6, //4.2
        },
      },
      {
        breakpoint: 1460,
        settings: {
          slidesToShow: slidesToShow - 0.8, //3.8
        },
      },
      {
        breakpoint: 1360,
        settings: {
          slidesToShow: slidesToShow - 1.2, //3.4
        },
      },

      {
        breakpoint: 1260,
        settings: {
          slidesToShow: slidesToShow - 2.2, //3.2
        },
      },
      {
        breakpoint: 968,
        settings: {
          slidesToShow: 1.4, //2.4
        },
      },
    ],
  };

  return (
    <div style={{ width: '100%' }}>
      {data ? (
        <CustomSliderButton {...sliderSettings}>
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
