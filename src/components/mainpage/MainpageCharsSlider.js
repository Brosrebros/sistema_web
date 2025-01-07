import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import classNames from 'classnames';
import { usePropertyContext } from 'providers/PropertyProvider';
import PropertySliderValdemar from '../../../src/PropertySliderValdemar';
import construccionBlanco from '../../assets/img/icons/enconstruccion_blanco.svg';
import construccionGris from '../../assets/img/icons/enconstruccion_gris.svg';
import planosBlanco from '../../assets/img/icons/enplanos_blanco.svg';
import planosGris from '../../assets/img/icons/enplanos_gris.svg';
import entregaBlanco from '../../assets/img/icons/entregainmediata_blanco.svg';
import entregaGris from '../../assets/img/icons/entregainmediata_gris.svg';
import conoceBlanco from '../../assets/img/icons/conocetodoslosdesarrollos_blanco.svg';
import styled from 'styled-components';

const CustomButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  color: ${props => (props.selected ? 'white' : '#424242')};
  font-size: 0.8rem;
  background-color: ${props => (props.selected ? '#940000' : '#D6D6D6')};
  border: none;
  cursor: pointer;
  padding: 8px 20px;
  border-radius: 10px;
  transition: all 0.2s ease;

  img {
    width: 1rem;
    height: auto;
  }

  &:hover {
    filter: brightness(0.9);
  }
`;

const MainpageCharsSlider = ({ className }) => {
  const {
    propertyState: { properties },
  } = usePropertyContext();

  const [filteredInmuebles, setFilteredInmuebles] = useState([]);
  const [filtro, setFiltro] = useState('En construccion');

  useEffect(() => {
    filtrarInmuebles(filtro);
  }, [properties]);

  const filtrarInmuebles = tipoProyecto => {
    setFiltro(tipoProyecto);
    setFilteredInmuebles(
      tipoProyecto === 'Todos'
        ? properties
        : properties.filter(inmueble => inmueble.tipoProyecto === tipoProyecto)
    );
  };

  // Mapeo de imágenes según el estado del botón
  const obtenerImagen = (tipo, seleccionado) => {
    const imagenes = {
      'En construccion': seleccionado ? construccionBlanco : construccionGris,
      'En planos': seleccionado ? planosBlanco : planosGris,
      'Entrega inmediata': seleccionado ? entregaBlanco : entregaGris,
    };
    return imagenes[tipo];
  };

  // Renderizado del botón
  const renderBoton = tipo => {
    const seleccionado = filtro === tipo;

    return (
      <CustomButton
        key={tipo}
        selected={seleccionado}
        onClick={() => filtrarInmuebles(tipo)}
      >
        <img
          src={obtenerImagen(tipo, seleccionado)}
          alt={tipo}
          style={{
            width: '24px',
            height: '24px',
            marginRight: '0.5rem',
          }}
        />
        {tipo === 'En construccion'
          ? 'En construcción'
          : tipo === 'En planos'
          ? 'En planos'
          : 'Entrega inmediata'}
      </CustomButton>
    );
  };

  return (
    <div className={classNames(className, 'overflow-hidden pt-3')}>
      <Row>
        <Col xs={12} md={4}>
          <div>
            <div className={classNames(className, 'overflow-hidden pt-3')}>
              <div style={{ display: 'flex', gap: '0.8rem' }}>
                {['En construccion', 'En planos', 'Entrega inmediata'].map(
                  tipo => renderBoton(tipo)
                )}
              </div>
            </div>

            <div className="row" style={{ marginTop: '2rem' }}>
              <h2 className="bolddd" style={{ color: 'black' }}>
                {' '}
                Conoce todos <br /> nuestros desarrollos{' '}
              </h2>
              <p>
                Proyectos de inmobiliarios en etapa de <br />
                construcción, adquiérelos en precios de preventa.
              </p>

              <form style={{marginTop:"0.8rem"}}>
                <CustomButton
                  onClick={() => filtrarInmuebles('EnPlanos')}
                  style={{
                    background: '#940000',
                    color: 'white',
                    width: 'auto',
                    maxWidth: '243px',
                    margin: '0 auto',
                  }}
                >
                  <img
                    src={conoceBlanco}
                    style={{ width: '1rem', height: 'auto' }}
                  />
                  Conoce todos nuestros desarrollos
                </CustomButton>
              </form>
            </div>
          </div>
        </Col>
        <Col xs={12} md={8}>
          <div>
            {filteredInmuebles.length ? (
              <PropertySliderValdemar data={filteredInmuebles} />
            ) : (
              <p>No hay inmuebles disponibles para este filtro.</p>
            )}
          </div>
          <p style={{ display: 'none' }}>{filtro}</p>
        </Col>
      </Row>
    </div>
  );
};

MainpageCharsSlider.propTypes = {
  className: PropTypes.string.isRequired,
};

export default MainpageCharsSlider;
