import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Image, Row } from 'react-bootstrap';
import Flex from 'components/common/Flex';
import SubtleBadge from 'components/common/SubtleBadge';
import { useNavigate } from 'react-router-dom';
import { rootPaths } from 'routes/paths';

import corazon_rojo from '../src/assets/img/icons/corazonrojo.svg';

const PropertyGrid = ({ property }) => {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = (e) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  const {
    multimedia: { imagenes },
    tipoOperacion,
    tipoPropiedad,
    precio,
    oldPrice,
    ubicacion: { calleNumero, provincia, departamento },
    caracteristicas: { areaTotal, banos },
  } = property;

  return (
    <Card
      className="black_important h-100 overflow-hidden card_valdemar"
      onClick={() => {
        navigate(`/${rootPaths.propertyDetailRoot}/${property.id}`);
      }}
    >
      <Card.Body
        as={Flex}
        direction="column"
        justifyContent="between"
        className="black_important p-0"
      >
        {/* Imagen */}
        <div
          style={{
            backgroundColor: '#D6D6D6',
            height: '200px',
            position: 'relative',
          }}
        >
          {/* Barra superior "En construcción" */}
          <div
            style={{
              backgroundColor: '#007599',
              color: '#fff',
              fontWeight: 'bold',
              padding: '4px 10px',
              position: 'absolute',
              left: '0',
              right: '0',
              bottom: '0',
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '12px',
            }}
          >
            <span>En construcción</span>
            <span>Entrega en junio de 2027</span>
          </div>

          <Image
            src={imagenes ? imagenes[0] : ''}
            alt=""
            className="black_important w-100 h-100 fit-cover fit-cover"
          />

          {/* Botón de favorito */}
          <div
            onClick={toggleFavorite}
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              cursor: 'pointer',
              backgroundColor: '#fff',
              borderRadius: '30%',
              padding: '4px',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
            }}
          >
            <img
              src={corazon_rojo}
              style={{
                width: '20px',
                height: '20px',
                borderRadius: '8px',
              }}
            />
          </div>
        </div>

        {/* Información del inmueble */}
        <Row className="g-0 mb-1 align-items-end">
          <Col className="ps-2">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {/* Etiqueta azul "Proyecto" */}
              <div
                style={{
                  backgroundColor: '#007bff', // Azul
                  color: '#fff',              // Texto blanco
                  borderRadius: '4px',
                  padding: '2px 6px',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  marginRight: '8px',
                }}
              >
                Proyecto
              </div>

              {/* Etiqueta tipo de operación */}
              <SubtleBadge className="my-2 regular">
                {tipoOperacion}
              </SubtleBadge>
              <p
                style={{
                  fontSize: '13px',
                }}
                className="black_important pb-0 my-auto px-1"
              >
                {tipoPropiedad}
              </p>
            </div>
            <h4 className="black_important fs-8 text-warning d-flex align-items-center mb-0">
              {precio !== null && precio.pen ? (
                <span className="black_important bolddd">
                  &nbsp;S/{precio.pen}
                </span>
              ) : null}
              {oldPrice ? (
                <del className="black_important ms-2 fs-10 text-700">
                  ${oldPrice}
                </del>
              ) : null}
            </h4>
          </Col>
        </Row>

        <Row className="black_important mx-2 g-3" xs={2}>
          <div>
            <div
              className="black_important fs-10 text-1000"
              style={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {calleNumero}
            </div>
            <div
              className="black_important fs-10 text-1000"
              style={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {provincia}, {departamento}
            </div>
          </div>
          <div>
            <div
              className="black_important fs-10 text-1000"
              style={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {areaTotal}m2
            </div>
            <div
              className="black_important fs-10 text-1000"
              style={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {banos > 0 ? `${banos} baño` : null}
              {banos > 1 ? 's' : null}
            </div>
          </div>
        </Row>
      </Card.Body>
    </Card>
  );
};

PropertyGrid.propTypes = {
  property: PropTypes.shape({
    id: PropTypes.string,
    tipoOperacion: PropTypes.string,
    tipoPropiedad: PropTypes.string,
    ubicacion: PropTypes.shape({
      calleNumero: PropTypes.string,
      direccionCompleta: PropTypes.string,
      departamento: PropTypes.string,
      provincia: PropTypes.string,
    }),
    caracteristicas: PropTypes.shape({
      dormitorios: PropTypes.number,
      banos: PropTypes.number,
      areaConstruida: PropTypes.number,
      areaTotal: PropTypes.number,
    }),
    precio: PropTypes.object,
    oldPrice: PropTypes.string,
    multimedia: PropTypes.shape({
      imagenes: PropTypes.arrayOf(PropTypes.string),
    }),
  }),
};

export default PropertyGrid;
