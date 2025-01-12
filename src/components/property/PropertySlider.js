import React from 'react';
import { TitleValdemar } from '../mainpage/TitleValdemar';
import SliderCard from 'components/custom/SliderCard/SliderCard';
import PropTypes from 'prop-types';
import styles from 'styles.module.css';
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
          slidesToShow: slidesToShow - 0.6, //4.8
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
          slidesToShow: slidesToShow - 1.6, //3.8
        },
      },
      {
        breakpoint: 1360,
        settings: {
          slidesToShow: slidesToShow - 2, //3.4
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
        breakpoint: 960,
        settings: {
          slidesToShow: slidesToShow - 3, //2.4
        },
      },

      {
        breakpoint: 860,
        settings: {
          slidesToShow: slidesToShow - 3.2, //2.2
        },
      },

      {
        breakpoint: 760,
        settings: {
          slidesToShow: slidesToShow - 3.8, //1.6
        },
      },
    ],
  };

  return (
    <div style={{ width: '100%' }}>
      {title ? (
        <TitleValdemar classname={styles.title}>{title}</TitleValdemar>
      ) : null}
      {data ? (
        <div style={{ width: '100%', marginTop:"24px" }}>
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
