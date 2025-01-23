import React from 'react';
import PropTypes from 'prop-types';

export const TitleValdemarDes = ({ children }) => {
  return (
    <>
      <h6
        style={{
          fontSize: '1.1875em',
          fontWeight: 'bold',
          color: 'black',
          margin: '0px',
        }}
      >
        {children}
      </h6>
    </>
  );
};

TitleValdemarDes.propTypes = {
  children: PropTypes.string.isRequired,
  classname: PropTypes.string,
};
