import React from 'react';
import PropTypes from 'prop-types';

export const TitleValdemar = ({ children, classname }) => {
  return (
    <>
      <h6
        className={
          classname
            ? `${classname}`
            : ''
        }
        style={{
          fontSize: '1.2rem',
          fontWeight: 'bold',
          color: 'black',
        }}
      >
        {children}
      </h6>
    </>
  );
};

TitleValdemar.propTypes = {
  children: PropTypes.string.isRequired,
  classname: PropTypes.string,
};
