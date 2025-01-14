import React from 'react';
import SliderCard from 'components/custom/SliderCard/SliderCard';
import PropTypes from 'prop-types';
import CustomSliderButton from 'components/custom/CustomButtons/CustomSliderButton/CustomSliderButton';

const PropertySlider = ({ data, title, slidesToShow }) => {
  const sliderSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: false,
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
          slidesToShow: slidesToShow - 1.2, //4.2
        },
      },
      {
        breakpoint: 1460,
        settings: {
          slidesToShow: slidesToShow - 1.2, //3.8
        },
      },
      {
        breakpoint: 1360,
        settings: {
          slidesToShow: slidesToShow - 1.8, //3.4
        },
      },

      {
        breakpoint: 1260,
        settings: {
          slidesToShow: slidesToShow - 2.2, //3.2
        },
      },

      {
        breakpoint: 1160,
        settings: {
          slidesToShow: slidesToShow - 2.6, //2.8
        },
      },

      {
        breakpoint: 968,
        settings: {
          slidesToShow: 1.2, //2.4
        },
      },
    ],
  };

  return (
    <div style={{ width: '100%' }}>
      {title ? (
        <h3
          style={{
            width: '100%',
            fontSize: '1.4375em',
            fontWeight: 'bold',
            color: 'black',
            display: 'flex',
            margin: '0px',
            lineHeight: '65%',
          }}
        >
          {title}
          <a
            style={{
              marginLeft: 'auto',
              fontWeight: 'bold',
              color: '#940000',
              cursor: 'pointer',
              lineHeight: '65%',
            }}
          >
            Ver más
          </a>
        </h3>
      ) : null}
      {data ? (
        <div style={{ width: '100%', marginTop: '24px' }}>
          <CustomSliderButton {...sliderSettings}>
            {data.map(property => (
              <SliderCard
                property={property}
                key={property.id}
                type="property"
              />
            ))}
          </CustomSliderButton>
        </div>
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
