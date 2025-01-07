import React, { useEffect, useState } from 'react';
import { Image, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import CustomListSlider from 'components/custom/CustomListSlider/CustomListSlider';
import cameraIcon from '../../../assets/img/icons/camara_gris.svg';

const PropertyDetailMedia = ({ imagenes: files }) => {
  let slider1;
  let slider2;
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  console.log(files);
  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, [slider1, slider2]);

  const handleImageClick = img => {
    setSelectedImage(img);
    setShowModal(true);
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

  return (
    <div
      className="position-relative h-sm-100 overflow-hidden"
      style={{ width: '100%', position: 'relative' }}
    >
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
          style={{ borderRadius: '12px', overflow: 'hidden' }}
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

          <p
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',
              gap: '0.4rem',
              opacity: '0',
              position: 'absolute',
              left: '10px',
              bottom: '10px',
              backgroundColor: 'white',
              color: '#424242',
              fontSize: '0.8rem',
              padding: '0.2rem 0.4rem',
              borderRadius: '8px',
              margin: '0px',
            }}
          >
            {`${currentSlide + 1}/${files.length}`}
            <img src={cameraIcon} style={{ height: '1rem', width: 'auto' }} />
          </p>
        </div>
        <Slider
          slidesToShow={4}
          asNavFor={nav1}
          infinite={false}
          ref={slider => (slider2 = slider)}
          swipeToSlide={true}
          focusOnSelect={true}
          arrows={false}
          className="slick-slider-arrow-inner mt-1 mr-n1"
        >
          {files.map(img => (
            <div className=" outline-none" key={img}>
              <div
                className="cursor-pointer"
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  marginTop: '8px',
                  maxWidth: '205px',
                }}
              >
                <img
                  className="fit-cover"
                  height={'110px'}
                  style={{
                    width: '100%',
                    margin: '0px',
                    marginRight: '12px',
                    borderRadius: '10px',
                  }}
                  src={img}
                  alt="product media"
                  onClick={() => handleImageClick(img)}
                />
              </div>
            </div>
          ))}
        </Slider>
      </>

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Body>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Selected product media"
              style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
            />
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

PropertyDetailMedia.propTypes = {
  imagenes: PropTypes.arrayOf(PropTypes.string),
};

export default PropertyDetailMedia;
