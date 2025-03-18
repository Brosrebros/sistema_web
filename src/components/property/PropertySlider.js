import React from 'react';
import SliderCard from 'components/custom/SliderCard/SliderCard';
import PropTypes from 'prop-types';
import CustomSliderButton from 'components/custom/CustomButtons/CustomSliderButton/CustomSliderButton';
import styled from 'styled-components';

const SliderContainer = styled.div`
  width: 100%;
  max-width: 100vw;

  h3 {
    width: 100%;
    font-size: 1.44rem;
    font-weight: bold;
    color: black;
    display: flex;
    margin: 0px;
    line-height: 65%;

    @media (max-width: 968px) {
      font-size: 1.12rem;
      line-height: 120%;
      display: flex;
      align-items: flex-end;
    }

    a {
      margin-left: auto;
      display: grid;
      place-items: center;
      font-weight: bold;
      color: #717171 !important;
      font-size: 1.19rem;
      cursor: pointer;
      line-height: 65%;

      @media (max-width: 968px) {
        font-size: 0.94rem;
        width: 120px;
        line-height: 120%;
      }
    }
  }
`;

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
          slidesToShow: 1.25, //2.4
        },
      },
    ],
  };

  return (
    <SliderContainer>
      {title ? (
        <h3>
          {title}
          <a>Ver más</a>
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
    </SliderContainer>
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
