import React from 'react';
import PropTypes from 'prop-types';

const Prueba = ({ imagenes: files }) => {
  return (
    <div>
      Prueba
      {files.map(img => (
        <div
          key={img}
          // style={{ height: '350px', overflow: 'hidden' }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: '#D6D6D6',
          }}
        >
          <img
            src={img}
            alt="product media"
            style={{
              height: '250px',
              objectFit: 'cover',
            }}
          />
        </div>
      ))}
    </div>
  );
};

Prueba.propTypes = {
  imagenes: PropTypes.arrayOf(PropTypes.string),
};

export default Prueba;
