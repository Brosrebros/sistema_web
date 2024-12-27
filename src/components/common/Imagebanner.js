import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';


export const Imagebanner = ({ classname, src, width, height, extraStyles }) => {
  return (
    <div
      className={classname}
      style={{
        ...extraStyles,
        display: 'flex',
        flexDirection: 'column', // Para alinear el contenido verticalmente
        justifyContent: 'center',
        alignItems: 'left',
        width: width,
        height: height,
        overflow: 'hidden',
        contain: 'size',
        alignContent: 'center',
        backgroundColor: '#D6D6D6',
        position: 'relative',
        textAlign: 'left',
      }}
    >
      <img
        src={src}
        alt=""
        style={{
          objectFit: 'cover',
          width: '100%',
        }}


      />
      <Button
        type="submit"
        // variant="gray"
        style={{
          fontFamily: 'Aptos_display',
          backgroundColor: "#940000",
          color: 'white',
          marginRight: '10px',
          border: 'none',
          textAlign: 'left',
          marginLeft: '15px',
          position: 'absolute', // Coloca el botón sobre la imagen
          bottom: '27%', // Ajusta según sea necesario
          padding: '10px 15px',
          borderRadius: '12px',
          cursor: 'pointer',
          fontSize: '14px',

        }}
      >
        Deseo conocer más
      </Button>

      <Button
        type="submit"
        // variant="gray"
        style={{
          fontFamily: 'Aptos_display',
          backgroundColor: "#f2f2f2",
          color: '#424242',
          marginRight: '10px',
          border: 'none',
          marginLeft: '15px',
          textAlign: 'left',
          position: 'absolute', // Coloca el botón sobre la imagen
          bottom: '7%', // Ajusta según sea necesario
          padding: '12px 15px',
          borderRadius: '12px',
          cursor: 'pointer',
          fontSize: '14px',
          width: '95%',
          boxShadow:"none"
        }}
      >
        Espacio de publicidad relacionada al servicio
      </Button>
    </div>
  );
};

Imagebanner.propTypes = {
  classname: PropTypes.string,
  src: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  extraStyles: PropTypes.object,
};
