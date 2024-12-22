import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ src, width, height }) => {
  return (
    <div
      style={{
        display: 'flex',
        height: height,
        alignItems: 'center',
        width: 'fit-content',
      }}
    >
      <img src={src} width={width} />
    </div>
  );
};

Icon.propTypes = {
  src: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Icon;
