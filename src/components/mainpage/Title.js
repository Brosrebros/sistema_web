import React from 'react';
import PropTypes from 'prop-types';

export const Title = ({ children, classname }) => {
  return (
    <>
      <h4
        className={
          classname
            ? `${classname} titulo_primera_pagina_desc bolddd `
            : 'titulo_primera_pagina_desc bolddd '
        }
        style={{
          color:"black"
        }}
      >
        {children}
      </h4>
    </>
  );
};

Title.propTypes = {
  children: PropTypes.string.isRequired,
  classname: PropTypes.string,
};
