import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import classNames from 'classnames';
import { usePropertyContext } from 'providers/PropertyProvider';
import PropertySliderValdemar from '../../../src/PropertySliderValdemar';
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

  console.log(usePropertyContext())

  console.log(properties);

  const [filteredInmuebles, setFilteredInmuebles] = useState([]);
  const [filtro, setFiltro] = useState('En construccion');

  useEffect(() => {
    filtrarInmuebles(filtro);
  }, [properties]);

  const filtrarInmuebles = tipoProyecto => {
    setFiltro(tipoProyecto);
    if (tipoProyecto === 'Todos') {
      setFilteredInmuebles(properties);
    } else {
      const inmueblesFiltrados = properties.filter(
        inmueble => inmueble.tipoProyecto === tipoProyecto
      );
      setFilteredInmuebles(inmueblesFiltrados);
    }
  };

  console.log(filteredInmuebles);

  return (
    <div className={classNames(className, 'overflow-hidden pt-3')}>
      <Row>
        <Col xs={12} md={4}>
          <div className="p-3">
            <div style={{ display: 'flex', gap: '0.8rem' }}>
              {['En construccion', 'En planos', 'Entrega inmediata'].map(
                tipo => (
                  <form key={tipo}>
                    <CustomButton
                      selected={filtro === tipo}
                      onClick={() => filtrarInmuebles(tipo)}
                    >
                      {tipo === 'En construccion'
                        ? 'En construcción'
                        : tipo === 'En planos'
                        ? 'En planos'
                        : 'Entrega inmediata'}
                    </CustomButton>
                  </form>
                )
              )}
            </div>

            <div className="row" style={{ marginLeft: '18px' }}>
              <p></p>
              <h2 className="bolddd" style={{ color: 'black' }}>
                {' '}
                Conoce todos <br /> nuestros desarrollos{' '}
              </h2>
              <p>
                Proyectos de inmobiliarios en etapa de <br />
                construcción, adquiérelos en precios de preventa.
              </p>

              <form
                className="form text-center"
                style={{ width: '100%', textAlign: 'center' }}
              >
                <div
                  onClick={() => filtrarInmuebles('EnPlanos')}
                  className="toggle-switch"
                  style={{
                    position: 'relative',
                    display: 'flex',
                    marginLeft: '18px',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '220px',
                    height: '36px',
                    backgroundColor: '#940000',
                    borderRadius: '10px',

                    cursor: 'pointer',
                    overflow: 'hidden',
                    userSelect: 'none', // Deshabilitar selección de texto
                  }}
                >
                  <span
                    style={{
                      position: 'relative',
                      zIndex: 2,
                      flex: 1,
                      textAlign: 'center',
                      fontSize: '14px',
                      fontFamily: 'Aptos_display',
                      color: 'white',
                      transition: 'color 0.3s ease',
                      paddingLeft: '10px !important',
                      paddingRight: '10px !important',
                    }}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;Conoce todos nuestros
                    desarrollos&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </div>
              </form>
            </div>
          </div>
        </Col>
        <Col xs={12} md={8}>
          <div>
            {/* Pasa los inmuebles filtrados al slider */}
            {filteredInmuebles.length ? (
              <PropertySliderValdemar data={filteredInmuebles} />
            ) : (
              <p>No hay inmuebles disponibles para este filtro.</p>
            )}
          </div>
          {/* Renderizar filtro oculto */}
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
