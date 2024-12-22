import React from 'react';
import PropTypes from 'prop-types';

export const TitleValdemarDes = ({ children, classname }) => {
  return (
    <>
      <h6
        className={
          classname
            ? `${classname} bolddd`
            : 'bolddd'
        }
        style={{
          fontSize: '25px',
          color: 'black'
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
