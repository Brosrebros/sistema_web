import { TitleValdemarDes } from 'components/mainpage/TitleValdemarDes';
import React, { useState, useEffect } from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import SubtleBadge from 'components/common/SubtleBadge';
import PropertyDetailLocation from './PropertyDetailLocation';
import mapa_boton from 'assets/img/icons/mapa_boton.svg';
import pin_icono from 'assets/img/icons/endondelabuscas_gris.svg';
import cochera_icono from 'assets/img/icons/cochera_negro.svg';
import area_detalle from 'assets/img/icons/area_detalle.svg';
import banio_detalle from 'assets/img/icons/banio_detalle.svg';
import dormitorio_detalle from 'assets/img/icons/dormitorio_detalle.svg';
import caracteristicasBlanco from 'assets/img/icons/caracteristicasgenerales_blanco.svg';
import caracteristicasGris from 'assets/img/icons/caracteristicasgenerales_gris.svg';
import serviciosBlanco from 'assets/img/icons/servicios_blanco.svg';
import serviciosGris from 'assets/img/icons/servicios_gris.svg';
import ambientesBlanco from 'assets/img/icons/ambientes_blanco.svg';
import ambientesGris from 'assets/img/icons/ambientes_gris.svg';
import alrededoresBlanco from 'assets/img/icons/alrededores_blanco.svg';
import alrededoresGris from 'assets/img/icons/alrededores_gris.svg';

const PropertyDetailDescription = ({ property }) => {
  const [isExpanded, setIsExpanded] = useState(false); // Estado para expandir/colapsar el texto
  const [selectedButton, setSelectedButton] = useState('caracteristicas');
  const wordLimit = 50; // Límite de palabras

  console.log("property"+ property);

  // Estado para manejar las coordenadas
  const [coordinates, setCoordinates] = useState({ lat: 0, long: 0 });

  const truncateText = (text, limit) => {
    const words = text.split(' ');
    return words.length > limit
      ? words.slice(0, limit).join(' ') + '...'
      : text;
  };

  const handleButtonClick = buttonKey => {
    setSelectedButton(buttonKey === selectedButton ? null : buttonKey);
  };

  const renderDetails = () => {
    switch (selectedButton) {
      case 'caracteristicas':
        const caracteristicas = property.caracteristicas || {};
        const filteredCaracteristicas = Object.entries(caracteristicas).filter(
          ([_, value]) => value
        );

        const caracteristicasLabels = {
          dormitorios: 'Dormitorios',
          banos: 'Baños',
          medioBanos: 'Medios Baños',
          estacionamientos: 'Estacionamientos',
          areaConstruida: 'Área Construida (m²)',
          areaTotal: 'Área Total (m²)',
          antiguedad: 'Antigüedad',
        };

        return (
          <div
            style={{
              width: '100%',
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1rem',
            }}
          >
            {filteredCaracteristicas.length > 0 ? (
              filteredCaracteristicas.map(([key, value]) => (
                <p key={key} style={{ margin: '0px' }}>
                  <strong>{caracteristicasLabels[key] || key}:</strong> {value}
                </p>
              ))
            ) : (
              <p style={{ margin: '0px' }}>
                No hay características disponibles.
              </p>
            )}
          </div>
        );

      case 'servicios':
        const servicios = property.aspectosAdicionales.servicios || [];
        return (
          <div
            style={{
              width: '100%',
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1rem',
            }}
          >
            {servicios.length > 0 ? (
              servicios.map((servicio, index) => (
                <p key={index} style={{ margin: '0px' }}>
                  <strong>Servicio:</strong> {servicio}
                </p>
              ))
            ) : (
              <p style={{ margin: '0px' }}>No hay servicios disponibles.</p>
            )}
          </div>
        );

      case 'ambientes':
        const ambientes = property.aspectosAdicionales?.caracteristicas || [];
        return (
          <div
            style={{
              width: '100%',
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1rem',
            }}
          >
            {ambientes.length > 0 ? (
              ambientes.map((ambiente, index) => (
                <p key={index} style={{ margin: '0px' }}>
                  <strong>Ambiente:</strong> {ambiente}
                </p>
              ))
            ) : (
              <p style={{ margin: '0px' }}>No hay ambientes definidos.</p>
            )}
          </div>
        );

      case 'alrededores':
        return (
          <div>
            <p style={{ margin: '0px' }}>
              No hay información sobre alrededores.
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  useEffect(() => {
    const lat = property?.ubicacion?.latitud
      ? parseFloat(
          property.ubicacion.latitud.toString().trim().replace(',', '.')
        )
      : 0;
    const long = property?.ubicacion?.longitud
      ? parseFloat(
          property.ubicacion.longitud.toString().trim().replace(',', '.')
        )
      : 0;

    console.log(`Latitud: ${lat}, Longitud: ${long}`);
  }, [property]);

  // useEffect para actualizar las coordenadas cuando se monta el componente
  useEffect(() => {
    const lat = property?.ubicacion?.latitud
      ? parseFloat(
          property.ubicacion.latitud.toString().trim().replace(',', '.')
        )
      : 0;
    const long = property?.ubicacion?.longitud
      ? parseFloat(
          property.ubicacion.longitud.toString().trim().replace(',', '.')
        )
      : 0;

    setCoordinates({ lat, long }); // Actualiza el estado
  }, [property]);

  const {
    precio,
    descripcion,
    tipoOperacion,
    tipoPropiedad,
    ubicacion: { direccionCompleta },
    caracteristicas: {
      areaTotal,
      banos,
      estacionamientos,
      dormitorios,
      antiguedad,
    },
  } = property;

  return (
    <>
      <div className="pb-3">
        <Row>
          <Col xs={7}>
            <TitleValdemarDes>
              {descripcion !== null
                ? descripcion.titulo
                : 'PropertyDetailDescription'}
            </TitleValdemarDes>
            <p
              style={{
                fontSize: '1rem',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <img
                className="me-2"
                src={pin_icono}
                alt="Logo"
                style={{ width: '1rem' }}
              />
              {direccionCompleta}
            </p>
          </Col>
          <Col xs={5}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                marginBottom: '1em',
              }}
            >
              <SubtleBadge
                bg={tipoOperacion === 'Alquiler' ? 'danger' : 'success'}
              >
                {tipoOperacion}
              </SubtleBadge>
              <p
                className="px-1 fs-9 pb-0"
                style={{ margin: '0px', color: 'black' }}
              >
                {tipoPropiedad}
              </p>
            </div>
            <h4
              className="fs-12 d-flex align-items-center"
              style={{
                color: '#940000',
                fontWeight: 'bold',
                display: 'flex',
                gap: '8px',
              }}
            >
{precio?.pen && <span>S/.{precio.pen.toLocaleString('es-PE')}</span>}
{precio?.pen && precio?.usd && <span>{' - '}</span>}
{precio?.usd && <span>${precio.usd}</span>}
            </h4>
          </Col>
        </Row>

        {/* Características */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '4px',
              fontSize: '0.8rem',
              color: 'black',
            }}
          >
            <img src={area_detalle} alt="Logo" style={{ width: '20px' }} />
            <p style={{ margin: '0px' }}>
              <b>{areaTotal}</b>m2
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '4px',
              fontSize: '0.8rem',
              color: 'black',
            }}
          >
            <img src={banio_detalle} alt="Logo" style={{ width: '20px' }} />
            <p style={{ margin: '0px' }}>
              <b>{banos} </b>
              Baño{banos > 1 ? 's' : ''}
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '4px',
              fontSize: '0.8rem',
              color: 'black',
            }}
          >
            <img src={cochera_icono} alt="Logo" style={{ width: '20px' }} />
            <p style={{ margin: '0px' }}>
              <b>{estacionamientos} </b>
              Cochera{estacionamientos > 1 ? 's' : ''}
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '4px',
              fontSize: '0.8rem',
              color: 'black',
            }}
          >
            <img
              src={dormitorio_detalle}
              alt="Logo"
              style={{ width: '20px' }}
            />
            <p style={{ margin: '0px' }}>
              <b>{dormitorios} </b>
              Dorm.
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '4px',
              fontSize: '0.8rem',
              color: 'black',
            }}
          >
            <img src={mapa_boton} alt="Logo" style={{ width: '20px' }} />
            {`${antiguedad}`}
          </div>
        </div>
        <br />

        {/* Descripción */}
        {descripcion?.detalle && (
          <div>
            <strong className="bolddd" style={{ color: 'black' }}>
              Descripción
            </strong>
            <p style={{ marginBottom: '0', color: 'black' }}>
              {isExpanded
                ? descripcion.detalle // Mostrar texto completo
                : truncateText(descripcion.detalle, wordLimit)}{' '}
              {/* Mostrar texto truncado */}
            </p>
            {descripcion.detalle.split(' ').length > wordLimit && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontWeight: 'bold',
                  color: 'black',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  marginTop: '10px',
                }}
              >
                {isExpanded ? 'Leer menos' : 'Leer descripción completa'}
              </button>
            )}
          </div>
        )}
      </div>

      {/* Sección adicional */}
      <div className="py-3" style={{ borderTop: '0.5px solid #D6D6D6' }}>
        <TitleValdemarDes>Conoce más sobre este inmueble....</TitleValdemarDes>

        {/* Botones de navegación */}
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '1em',
          }}
        >
          <Button
            variant={
              selectedButton === 'caracteristicas' ? 'danger' : 'secondary'
            }
            style={{
              color: selectedButton === 'caracteristicas' ? 'white' : '#424242',
              fontSize: '0.8rem',
              backgroundColor:
                selectedButton === 'caracteristicas' ? '' : '#D6D6D6',
              border: 'none',
            }}
            onClick={() => handleButtonClick('caracteristicas')}
          >
            <img
              height={'18px'}
              src={
                selectedButton === 'caracteristicas'
                  ? caracteristicasBlanco
                  : caracteristicasGris
              }
              alt="Contactar"
              className="m-1"
            />
            Características generales
          </Button>
          <Button
            variant={selectedButton === 'servicios' ? 'danger' : 'secondary'}
            style={{
              color: selectedButton === 'servicios' ? 'white' : '#424242',
              fontSize: '0.8rem',
              backgroundColor: selectedButton === 'servicios' ? '' : '#D6D6D6',
              border: 'none',
            }}
            onClick={() => handleButtonClick('servicios')}
          >
            <img
              height={'18px'}
              src={
                selectedButton === 'servicios' ? serviciosBlanco : serviciosGris
              }
              alt="Contactar"
              className="m-1"
            />
            Servicios
          </Button>
          <Button
            variant={selectedButton === 'ambientes' ? 'danger' : 'secondary'}
            style={{
              color: selectedButton === 'ambientes' ? 'white' : '#424242',
              backgroundColor: selectedButton === 'ambientes' ? '' : '#D6D6D6',
              fontSize: '0.8rem',
              border: 'none',
            }}
            onClick={() => handleButtonClick('ambientes')}
          >
            <img
              height={'18px'}
              src={
                selectedButton === 'ambientes' ? ambientesBlanco : ambientesGris
              }
              alt="Contactar"
              className="m-1"
            />
            Ambientes
          </Button>
          <Button
            variant={selectedButton === 'alrededores' ? 'danger' : 'secondary'}
            style={{
              color: selectedButton === 'alrededores' ? 'white' : '#424242',
              backgroundColor:
                selectedButton === 'alrededores' ? '' : '#D6D6D6',
              fontSize: '0.8rem',
              border: 'none',
            }}
            onClick={() => handleButtonClick('alrededores')}
          >
            <img
              height={'18px'}
              src={
                selectedButton === 'alrededores'
                  ? alrededoresBlanco
                  : alrededoresGris
              }
              alt="Contactar"
              className="m-1"
            />
            Alrededores
          </Button>
        </div>

        {/* Listas de características */}
        <Row>
          <div
            className="details-container"
            style={{ marginTop: '20px' }}
          ></div>
          <Col style={{ color: 'black', minHeight: '6rem', width: '100%' }}>
            <ul className="list-unstyled">{renderDetails()}</ul>
          </Col>
          {/* <Col md={6} lg={4} style={{ color: 'black' }}>
            <ul className="list-unstyled">
              <li>Cuartos de servicio</li>
              <li>Seguridad</li>
              <li>Cerca a colegios</li>
              <li>Número de pisos: 0</li>
            </ul>
          </Col>
          <Col md={6} lg={4} style={{ color: 'black' }}>
            <ul className="list-unstyled">
              <li>Closet</li>
              <li>Walk-in closet</li>
            </ul>
          </Col> */}
        </Row>
      </div>

      {/* Mapa */}
      <div className="py-3" style={{ borderTop: '0.5px solid #D6D6D6' }}>
        <TitleValdemarDes>Mapa de ubicación</TitleValdemarDes>
        <PropertyDetailLocation
          markers={{
            lat: coordinates.lat,
            long: coordinates.long,
            name: property?.ubicacion?.provincia || 'Ubicación no disponible',
            street: property?.ubicacion?.calleNumero || 'Sin calle',
            location: property?.ubicacion?.departamento || 'Sin departamento',
          }}
        />
      </div>
    </>
  );
};

PropertyDetailDescription.propTypes = {
  property: PropTypes.object.isRequired,
};

export default PropertyDetailDescription;
