import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import classNames from 'classnames';
import { usePropertyContext } from 'providers/PropertyProvider';
import PropertySliderValdemar from '../../../src/PropertySliderValdemar';

const MainpageCharsSlider = ({ className }) => {
  const {
    propertyState: { properties }, // Datos obtenidos desde el contexto
  } = usePropertyContext();

  const [filteredInmuebles, setFilteredInmuebles] = useState([]); // Inmuebles filtrados
  const [filtro, setFiltro] = useState("Todos");

  // Usar los datos del contexto directamente
  useEffect(() => {
    // Al principio, mostramos todos los inmuebles
    setFilteredInmuebles(properties);
  }, [properties]);

  // Filtrar los inmuebles según el tipo de operación
  const filtrarInmuebles = (tipoProyecto) => {
    setFiltro(tipoProyecto);
    if (tipoProyecto === "Todos") {
      setFilteredInmuebles(properties); // Mostrar todos los inmuebles
    } else {
      const inmueblesFiltrados = properties.filter(
        (inmueble) => inmueble.tipoProyecto === tipoProyecto
      );
      setFilteredInmuebles(inmueblesFiltrados); // Mostrar solo los filtrados
    }
  };

  return (
    <div className={classNames(className, 'overflow-hidden pt-3')}>
      <Row>
        <Col xs={12} md={4}>
          <div className="p-3">

            <div className='row'>
              <form className='form col-3 margin_left_10'>
                <div
                  onClick={() => filtrarInmuebles("EnPlanos")}
                  className="toggle-switch"
                  style={{
                    position: "relative",
                    display: "flex",
                    marginLeft: "18px",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "120px",
                    height: "36px",
                    backgroundColor: "#940000",
                    borderRadius: "10px",

                    cursor: "pointer",
                    overflow: "hidden",
                    userSelect: "none", // Deshabilitar selección de texto
                  }}
                >
                  <span
                    style={{
                      position: "relative",
                      zIndex: 2,
                      flex: 1,
                      textAlign: "center",
                      fontSize: "14px",
                      fontFamily: "Aptos_display",
                      color: "white",
                      transition: "color 0.3s ease",
                      paddingLeft: "10px !important",
                      paddingRight: "10px !important",
                    }}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;En planos&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </div>
              </form>
              <form className='form col-3 margin_left_10'>
                <div
                  onClick={() => filtrarInmuebles("EnConstruccion")}
                  className="toggle-switch"
                  style={{
                    position: "relative",
                    display: "flex",
                    marginLeft: "18px",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "120px",
                    height: "36px",
                    backgroundColor: "#e9ecef",
                    borderRadius: "10px",

                    cursor: "pointer",
                    overflow: "hidden",
                    userSelect: "none", // Deshabilitar selección de texto
                  }}
                >
                  <span
                    style={{
                      position: "relative",
                      zIndex: 2,
                      flex: 1,
                      textAlign: "center",
                      fontSize: "14px",
                      fontFamily: "Aptos_display",
                      color: "#6d6d6d",
                      transition: "color 0.3s ease",
                      paddingLeft: "10px !important",
                      paddingRight: "10px !important",
                    }}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;En construcción&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </div>
              </form>
              <form className='form col-4 margin_left_10'>
                <div
                  onClick={() => filtrarInmuebles("EntregaInmediata")}
                  className="toggle-switch"
                  style={{
                    position: "relative",
                    display: "flex",
                    marginLeft: "18px",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "150px",
                    height: "36px",
                    backgroundColor: "#e9ecef",
                    borderRadius: "10px",

                    cursor: "pointer",
                    overflow: "hidden",
                    userSelect: "none", // Deshabilitar selección de texto
                  }}
                >
                  <span
                    style={{
                      position: "relative",
                      zIndex: 2,
                      flex: 1,
                      textAlign: "center",
                      fontSize: "14px",
                      fontFamily: "Aptos_display",
                      color: "#6d6d6d",
                      transition: "color 0.3s ease",
                      paddingLeft: "10px !important",
                      paddingRight: "10px !important",
                    }}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;Entrega Inmediata&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </div>
              </form>
            </div>

            <div className='row' style={{ marginLeft: "18px" }}>
              <p></p>
              <h2 className='bolddd' style={{ color: "black" }} > Conoce todos <br /> nuestros desarrollos </h2>
              <p>Proyectos de inmobiliarios en etapa de <br />construcción, adquiérelos en precios de preventa.</p>

              <form className='form text-center' style={{ width: "100%", textAlign: "center" }}>
                <div
                  onClick={() => filtrarInmuebles("EnPlanos")}
                  className="toggle-switch"
                  style={{
                    position: "relative",
                    display: "flex",
                    marginLeft: "18px",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "220px",
                    height: "36px",
                    backgroundColor: "#940000",
                    borderRadius: "10px",

                    cursor: "pointer",
                    overflow: "hidden",
                    userSelect: "none", // Deshabilitar selección de texto
                  }}
                >
                  <span
                    style={{
                      position: "relative",
                      zIndex: 2,
                      flex: 1,
                      textAlign: "center",
                      fontSize: "14px",
                      fontFamily: "Aptos_display",
                      color: "white",
                      transition: "color 0.3s ease",
                      paddingLeft: "10px !important",
                      paddingRight: "10px !important",
                    }}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;Conoce todos nuestros desarrollos&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </div>
              </form>
            </div>
          </div>
        </Col>
        <Col xs={12} md={8}>
          <div>
            {/* Pasa los inmuebles filtrados al slider */}
            <PropertySliderValdemar data={filteredInmuebles || []} />
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
