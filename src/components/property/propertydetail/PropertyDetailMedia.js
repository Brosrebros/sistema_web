import React, { useEffect, useState } from 'react';
import { Image, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import cameraIcon from '../../../assets/img/icons/camera.svg';
import barcodeIcon from '../../../assets/img/icons/barcode.svg';
import CustomListSlider from 'components/custom/CustomListSlider/CustomListSlider';
import importIcon from 'assets/img/icons/import-gray.svg';
import styled from 'styled-components';
import { useMenu } from 'menuContext';
import Slider from 'react-slick';
import arrowRigth from 'assets/img/icons/arrow-right.svg';
import arrowLeft from 'assets/img/icons/arrow-left.svg';

const CustomModalSlider = styled(Slider)`
  height: 100%;

  div {
    height: 100%;

    &:focus-visible {
      outline: none;
    }
  }

  .slick-slide {
    padding: 0 8px;
  }

  .slick-list {
    margin: 0 -8px;
  }

  .slick-prev {
    &::before {
      content: '';
      display: block;
      margin: 0 auto;
      width: 20px;
      height: 20px;
      background-image: url(${arrowLeft});
      background-size: 100%;
      background-repeat: no-repeat;
      background-position: center;
    }

    &::after {
      display: none;
    }
  }

  .slick-next {
    &::before {
      content: '';
      display: block;
      margin: 0 auto;
      width: 20px;
      height: 20px;
      background-image: url(${arrowRigth});
      background-size: 100%;
      background-repeat: no-repeat;
      background-position: center;
    }

    &::after {
      display: none;
    }
  }

  .slick-prev,
  .slick-next {
    background-color: #ffffff !important;
    border-radius: 8px !important;
    width: 52px;
    height: 48px;
    z-index: 2;
    opacity: 0 !important;
    transition: opacity 0.1s ease;
    border: 1px solid #c3c3c3;
  }

  .slick-prev {
    left: -76px !important;
  }

  .slick-next {
    right: -76px !important;
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

  &:hover + div {
    opacity: 1 !important;
    transition: opacity 0.1s ease;
  }

  & + div + div {
    opacity: 0;
  }

  &:hover + div + div {
    opacity: 1;
  }

  & + div + div:hover {
    opacity: 1;
  }
`;

const PropertyDetailMedia = ({ imagenes: files }) => {
  const { isMenuOpen } = useMenu();
  let slider1;
  let slider2;
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFavourite, setIsFavourite] = useState(false);

  console.log(files);
  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, [slider1, slider2]);

  const handleImageClick = img => {
    setSelectedImage(img);
    setShowModal(true);
  };

  const handleFavourite = () => {
    setIsFavourite(prev => !prev);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: index => setCurrentSlide(index),
  };

  const miniSliderSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 1,
  };

  return (
    <div style={{ width: '100%' }}>
      <>
        {files.length === 1 && (
          <Image
            fluid
            className="fit-cover rounded cursor-pointer"
            src={files[0].src}
            alt="product media"
            onClick={() => handleImageClick(files[0].src)}
          />
        )}
        <div
          className="product-slider"
          style={{
            borderRadius: '12px',
            overflow: 'hidden',
            height: '502px',
            marginBottom: '16px',
          }}
        >
          <CustomListSlider
            {...sliderSettings}
            asNavFor={nav2}
            ref={slider => (slider1 = slider)}
            className="slick-slider-arrow-inner"
          >
            {files.map(item => (
              <div
                key={item}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  backgroundColor: '#D6D6D6',
                  overflow: 'hidden',
                  borderRadius: '10px',
                }}
              >
                <img
                  src={item}
                  alt="product media"
                  style={{
                    height: '100%',
                    maxWidth: '100%',
                    objectFit: 'cover',
                    borderRadius: '10px',
                    width: '100%',
                  }}
                  onClick={() => handleImageClick(item)}
                  className="cursor-pointer"
                />
              </div>
            ))}
          </CustomListSlider>

          <div></div>
          <div
            style={{
              width: 'calc(100% - 20px)',
              display: 'flex',
              justifyContent: 'space-between',
              position: 'absolute',
              left: '10px',
              bottom: '10px',
              opacity: '0',
            }}
            className="test"
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 16px',
                margin: '0px',
                backgroundColor: 'white',
                borderRadius: '8px',
                height: '48px',
              }}
            >
              <img src={cameraIcon} style={{ height: '20px', width: '20px' }} />
              <p
                style={{
                  color: '#424242',
                  fontSize: '1rem',
                  margin: '0px',
                  lineHeight: '75%',
                }}
              >
                {`${currentSlide + 1}/${files.length}`}
              </p>
            </div>
            <div
              style={{
                marginLeft: 'auto',
                color: '#424242',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#F2F2F2',
                gap: '8px',
                padding: '8px',
                borderRadius: '12px',
              }}
            >
              <img
                src={barcodeIcon}
                style={{ width: '20px', height: '20px' }}
              />
              <p style={{ margin: '0px' }}>
                Código de anuncio: <b>IMPV-0001</b>
              </p>
            </div>
          </div>
        </div>
        <CustomListSlider {...miniSliderSettings}>
          {files.map(img => (
            <div key={img}>
              <img
                className="fit-cover"
                style={{
                  width: isMenuOpen ? '180px' : '200px',
                  height: '136px',
                  borderRadius: '10px',
                  marginRight: '120px',
                }}
                src={img}
                alt="product media"
                onClick={() => handleImageClick(img)}
              />
            </div>
          ))}
        </CustomListSlider>
      </>

      {/* Modal */}
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        centered
        style={{
          width: '80vw',
          overflow: 'hidden',
          justifyContent: 'center',
          alignItems: 'center',
          scale: '1',
        }}
      >
        <CustomModalSlider
          {...sliderSettings}
          asNavFor={nav2}
          ref={slider => (slider1 = slider)}
          className="slick-slider-arrow-inner"
          style={{ width: '946px', height: '796px' }}
        >
          {files.map(item => (
            <div
              key={item}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#D6D6D6',
                overflow: 'hidden',
                borderRadius: '10px',
              }}
            >
              <img
                src={item}
                alt="product media"
                style={{
                  height: '100%',
                  maxWidth: '100%',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  width: '100%',
                }}
                onClick={() => handleImageClick(item)}
                className="cursor-pointer"
              />
            </div>
          ))}
        </CustomModalSlider>
        <div></div>
        <div
          style={{
            width: '900px',
            display: 'flex',
            justifyContent: 'space-between',
            position: 'absolute',
            left: '24px',
            bottom: '24px',
          }}
          className="testeo "
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 16px',
              margin: '0px',
              backgroundColor: 'white',
              borderRadius: '8px',
              height: '48px',
            }}
          >
            <img src={cameraIcon} style={{ height: '20px', width: '20px' }} />
            <p
              style={{
                color: '#424242',
                fontSize: '1rem',
                margin: '0px',
                lineHeight: '75%',
              }}
            >
              {`${currentSlide + 1}/${files.length}`}
            </p>
          </div>
          <div
            style={{
              height: '48px',
              marginLeft: 'auto',
              color: '#424242',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#F2F2F2',
              gap: '8px',
              padding: '12px 16px',
              borderRadius: '12px',
            }}
          >
            <img src={importIcon} style={{ width: '20px', height: '20px' }} />
            <p style={{ margin: '0px' }}>Descargar imagen</p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

PropertyDetailMedia.propTypes = {
  imagenes: PropTypes.arrayOf(PropTypes.string),
};

export default PropertyDetailMedia;
