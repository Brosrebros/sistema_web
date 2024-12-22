import React from 'react';
import PropertyDetailMedia from './PropertyDetailMedia';
import { Button, Stack, Form, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import telefono from 'assets/icons/propertylist-telefono-red.svg';
import whatsapp from 'assets/icons/propertylist-whatsapp.svg';
import contactar from 'assets/icons/propertylist-contactar.svg';
import idioma from 'assets/icons/icono_de_idioma_rojo.svg';
import corazon from 'assets/img/icons/corazonrojo.svg';
import compartir_rojo from 'assets/img/icons/compartir_rojo.svg';
import { LuSendHorizontal } from 'react-icons/lu';
import { CiBarcode } from 'react-icons/ci';

// import usuario_rojo from 'assets/icons/usuario_rojo.svg';

import { TitleValdemarDes } from 'components/mainpage/TitleValdemarDes';

const PropertyDetailAdvertiser = ({ property }) => {
  return (
    <div>
      <div style={{ height: 'fit-content' }}>
        {property && (
          <PropertyDetailMedia imagenes={property.multimedia.imagenes} />
        )}
      </div>
      <div>
        <div
          style={{
            display: 'flex',
            gap: '10px',
          }}
        >
          <div
            style={{
              color: 'black',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <Button
              className="fs-10 d-flex p-1 gap-1 align-items-center"
              variant="light"
              style={{ border: '1px solid #bbbbbb' }}
            >
              <img
                height={'18px'}
                src={corazon}
                alt="Teléfono"
                className="m-1"
              />
            </Button>
            Favorito
          </div>
          <div
            style={{
              color: 'black',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <Button
              className="fs-10 d-flex p-1 gap-1 align-items-center"
              variant="light"
              style={{ border: '1px solid #bbbbbb' }}
            >
              <img
                height={'18px'}
                src={compartir_rojo}
                alt="Teléfono"
                className="m-1"
              />
            </Button>
            Compartir
          </div>

          <div
            style={{
              marginLeft: 'auto',
              color: '#424242',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#F2F2F2',
              gap: '8px',
              padding: '0px 8px',
              borderRadius: '12px',
            }}
          >
            <CiBarcode style={{ fontSize: '1.4rem' }} />
            <p style={{ margin: '0px' }}>
              <b>Código de anuncio: </b>IMPV-0001
            </p>
          </div>
        </div>
        <div
          className="my-3 pt-3"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
            marginBottom: '0',
            borderStyle: 'solid',
            borderWidth: '0.5px 0 0 0',
            borderColor: '#D6D6D6',
          }}
        >
          <TitleValdemarDes>Información del anunciante</TitleValdemarDes>
          <div
            className="my-1 pt-2"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              marginBottom: '0',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '0',
              }}
            >
              {/* Imagen */}
              <img
                src={idioma}
                alt="Sanchez Real State"
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '8px',
                  objectFit: 'cover',
                  marginRight: '10px',
                }}
              />
              {/* Texto */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <TitleValdemarDes className="mb-0">
                  Sanchez Real State
                </TitleValdemarDes>
                <p className="mb-0 text-muted" style={{ fontSize: '14px' }}>
                  Inmobiliaria
                </p>
              </div>
            </div>
            <Stack direction="horizontal" gap={2}>
              {/* Botón de Teléfono */}
              <Button
                className="fs-10 d-flex p-2 gap-1 align-items-center"
                variant="light"
                style={{ border: '1px solid #bbbbbb' }}
              >
                <img
                  height={'18px'}
                  src={telefono}
                  alt="Teléfono"
                  className="m-1"
                />
              </Button>

              {/* Botón de WhatsApp */}
              <Button
                className="fs-10 d-flex p-2 gap-1 align-items-center"
                variant="success"
              >
                <img
                  height={'18px'}
                  src={whatsapp}
                  alt="WhatsApp"
                  className="m-1"
                />
                <span style={{ fontSize: '13px', fontFamily: 'Aptos_Display' }}>
                  WhatsApp
                </span>
              </Button>

              {/* Botón de Contactar */}
              <Button
                className="fs-10 d-flex p-2 gap-1 align-items-center"
                variant="danger"
              >
                <img
                  height={'18px'}
                  src={contactar}
                  alt="Contactar"
                  className="m-1"
                />
                <span style={{ fontSize: '13px', fontFamily: 'Aptos_Display' }}>
                  Contactar
                </span>
              </Button>
            </Stack>
          </div>
        </div>
        <p style={{ color: 'black' }}>
          Sanchez Real State es una empresa inmobiliaria comprometida con
          brindar soluciones integrales en el sector de bienes raíces. Nos
          especializamos en la compra, venta y alquiler de propiedades
          residenciales y comerciales, adecuamos las ofertas inmobiliarias para
          tu mejor percepcion, realizamos estrategias de inversion inmobilarias.
        </p>
        <p style={{ color: '#424242', fontWeight: 'bold' }}>
          Código del anunciante:{' '}
          <strong style={{ color: 'black' }}>INM-001</strong>
        </p>
      </div>
      <div>
        <p
          style={{
            color: '#93000a',
            fontWeight: 'bold',
            fontSize: '1.2rem',
            marginBottom: '0px',
          }}
        >
          Preguntas para el anunciante
        </p>
        <p style={{ color: '#424242' }}>
          Selecciona una o más preguntas, o escribe tu consulta
        </p>

        <Stack gap={2}>
          <Row
            style={{
              margin: '0px',
              gap: '1em',
            }}
          >
            <Col
              xxl={4}
              lg={6}
              style={{
                minHeight: '36px',
                padding: '0px',
              }}
            >
              <Button
                style={{
                  width: '100%',
                  fontSize: '12px',
                  height: '100%',
                  border: 'none',
                }}
                variant="danger"
              >
                ¿Sigue disponible?
              </Button>
            </Col>
            <Col xxl={5} style={{ minHeight: '36px', padding: '0px' }}>
              <Button
                style={{
                  width: '100%',
                  fontSize: '12px',
                  height: '100%',
                  backgroundColor: '#d0d3d8',
                  border: 'none',
                  color: '#2e2e2e',
                }}
              >
                ¿Cuando puedo hacer una visita?
              </Button>
            </Col>
          </Row>

          <Row
            style={{
              margin: '0px',
              gap: '1em',
              width: '100%',
            }}
          >
            <Col
              lg={8}
              style={{
                padding: '0px',
              }}
            >
              <Form.Control
                placeholder="Escribe aquí"
                style={{
                  height: '36px',
                  padding: '0 16px',
                  fontSize: '14px',
                  border: 'none',
                  boxShadow: 'none',
                  backgroundColor: '#f2f2f2',
                  borderRadius: '0.6rem',
                }}
              />
            </Col>
            <Col
              style={{
                width: 'auto',
                padding: '0px',
              }}
            >
              <Button
                variant="danger"
                style={{
                  width: 'auto',
                  height: '100%',
                  fontSize: '14px',
                  fontWeight: 400,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <LuSendHorizontal />
                Enviar
              </Button>
            </Col>
          </Row>
        </Stack>
        <Stack
          className="px-3 py-3 mt-4"
          style={{
            backgroundColor: '#f2f2f2',
            borderRadius: '0.6rem',
            gap: '8px',
          }}
        >
          <Row
            style={{
              margin: '0px',
              gap: '1em',
              width: '100%',
            }}
          >
            <p
              style={{
                padding: '0px',
                margin: '0px',
                color: 'black',
                fontWeight: 'bold',
              }}
            >
              ¿Encontraste algún problema con este anuncio?
            </p>
          </Row>
          <Row className="g-2" style={{ fontSize: '12px' }}>
            <Col lg={5} style={{ height: '46px' }}>
              <Button
                className="px-1"
                style={{
                  height: '100%',
                  fontSize: '12px',
                  width: '100%',
                  color: '#2e2e2e',
                  backgroundColor: '#fff',
                  border: 'none',
                  boxShadow: 'none',
                }}
              >
                No puedo contactar con el anunciante
              </Button>
            </Col>
            <Col lg={5} style={{ height: '46px' }}>
              <Button
                className="px-1"
                style={{
                  height: '100%',
                  fontSize: '12px',
                  width: '100%',
                  backgroundColor: '#fff',
                  border: 'none',
                  color: '#2e2e2e',
                  boxShadow: 'none',
                }}
              >
                El inmueble esta vendido o reservado
              </Button>
            </Col>
            <Col lg={2} style={{ height: '46px' }}>
              <Button
                className="px-1"
                style={{
                  height: '100%',
                  fontSize: '12px',
                  width: '100%',
                  backgroundColor: '#fff',
                  color: '#2e2e2e',
                  border: 'none',
                  boxShadow: 'none',
                }}
              >
                Otros motivos
              </Button>
            </Col>
          </Row>
        </Stack>
      </div>
      {/* <div
        className="pt-3"
        style={{
          borderStyle: 'solid',
          borderBottomWidth: '0px',
          borderLeftWidth: '0px',
          borderRightWidth: '0px',
          borderTopWidth: '0.5px',
          borderColor: '#D6D6D6',
        }}
      >
        Anunciante
      </div> */}
    </div>
  );
};

PropertyDetailAdvertiser.propTypes = {
  property: PropTypes.shape({
    id: PropTypes.string,
    tipoOperacion: PropTypes.string,
    tipoPropiedad: PropTypes.string,
    ubicacion: PropTypes.shape({
      calleNumero: PropTypes.string,
      direccionCompleta: PropTypes.string,
      departamento: PropTypes.string,
      provincia: PropTypes.string,
      formaUbicacion: PropTypes.string,
    }),
    caracteristicas: PropTypes.shape({
      dormitorios: PropTypes.number,
      banos: PropTypes.number,
      medioBanos: PropTypes.number,
      estacionamiento: PropTypes.number,
      areaConstruida: PropTypes.number,
      areaTotal: PropTypes.number,
      antiguedad: PropTypes.string,
    }),
    precio: PropTypes.object,
    descripcion: PropTypes.shape({
      titulo: PropTypes.string,
      detalle: PropTypes.string,
    }),
    multimedia: PropTypes.shape({
      imagenes: PropTypes.arrayOf(PropTypes.string),
      videos: PropTypes.arrayOf(PropTypes.string),
    }),
    aspectosAdicionales: PropTypes.shape({
      caracteristicasGenerales: PropTypes.arrayOf(PropTypes.string),
      exteriores: PropTypes.arrayOf(PropTypes.string),
      servicios: PropTypes.arrayOf(PropTypes.string),
      areasComunes: PropTypes.arrayOf(PropTypes.string),
    }),
    estado: PropTypes.string,
    fechaDisponibilidad: PropTypes.shape({
      $date: PropTypes.number,
    }),
    clienteId: PropTypes.string,
    partition: PropTypes.string,
    fechaCreacion: PropTypes.shape({
      $date: PropTypes.string,
    }),
    prioridad: PropTypes.number,
    activo: PropTypes.bool,
    destacado: PropTypes.bool,
    oldPrice: PropTypes.string,
  }),
};

export default PropertyDetailAdvertiser;
