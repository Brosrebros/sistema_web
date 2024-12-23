import React from 'react';
import PropTypes from 'prop-types';

const SubtleBadge = ({ bg = 'primary', pill, children, className }) => {
  // Personalización del color y estilo
  const customStyles = {
    backgroundColor:
      bg === 'danger' ? '#940000' : bg === 'success' ? '#438020' : '#D6D6D6',
    fontWeight: 'light',
    color: bg === 'danger' ? 'white' : bg === 'success' ? 'white' : 'black', // Texto blanco
    borderRadius: pill ? '50px' : '8px', // Redondeado si 'pill' es true
    padding: '0px 8px', // Espaciado interno
    fontSize: '0.9rem', // Tamaño de texto pequeño
    border: '1px solid transparent', // Borde opcional
  };

  return <div style={customStyles}>{children}</div>;
};

SubtleBadge.propTypes = {
  bg: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'info',
    'warning',
    'danger',
    'light',
    'dark',
  ]),
  pill: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default SubtleBadge;
