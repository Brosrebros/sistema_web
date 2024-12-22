import React, { useEffect, useState } from 'react';
import { Image, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

const sliderSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const PropertyDetailMedia = ({ imagenes: files }) => {
  let slider1;
  let slider2;
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

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

  return (
    <div className="position-relative h-sm-100 overflow-hidden">
      <>
        {files.length === 1 && (
          <Image
            fluid
            className="fit-cover w-sm-100 h-sm-100 rounded cursor-pointer"
            src={files[0].src}
            alt="product media"
            onClick={() => handleImageClick(files[0].src)}
          />
        )}
        <div className="product-slider">
          <Slider
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
                    margin: 'auto',
                    borderRadius: '10px',
                  }}
                  onClick={() => handleImageClick(item)}
                  className="cursor-pointer"
                />
              </div>
            ))}
          </Slider>
        </div>
        <Slider
          slidesToShow={4}
          asNavFor={nav1}
          ref={slider => (slider2 = slider)}
          swipeToSlide={true}
          focusOnSelect={true}
          centerMode={files.length >= 4 ? true : false}
          arrows={false}
          className="slick-slider-arrow-inner mt-1 mr-n1"
        >
          {files.map(img => (
            <div className="pe-1 outline-none" key={img}>
              <div
                className="cursor-pointer"
                style={{
                  backgroundColor: '#D6D6D6',
                  display: 'flex',
                  maxWidth: '150px',
                  borderRadius: '0.6rem',
                  overflow: 'hidden',
                }}
              >
                <img
                  className="fit-cover"
                  height={'80px'}
                  style={{ width: '100%', margin: '1px' }}
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
