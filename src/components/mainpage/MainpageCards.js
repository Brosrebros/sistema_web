import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Title } from './Title';
import PropTypes from 'prop-types';
import busquedaClaraYRapidaImg from 'assets/icons/mainpage-cards-busquedaclarayrapida.svg';
import ampliaVariedadDeOpcionesImg from 'assets/icons/mainpage-cards-ampliavariedaddeopciones.svg';
import informacionClaraYDetalladaImg from 'assets/icons/mainpage-cards-informacionconfiableydetallada.svg';
import soporteATuAlcanceImg from 'assets/icons/mainpage-cards-soporteatualcance.svg';
import Icon from 'components/common/icon/Icon';

const data = [
  {
    id: 0,
    icon: busquedaClaraYRapidaImg,
    title: 'Búsqueda clara y rápida',
    description:
      'Nuestros filtros inteligentes y mapas interactivos están diseñados para que encuentres lo que buscas sin complicaciones.',
  },
  {
    id: 1,
    icon: ampliaVariedadDeOpcionesImg,
    title: 'Amplia variedad de opciones',
    description:
      'Desde casas y departamentos hasta terrenos y proyectos nuevos, tenemos la propiedad que se adapta a tus necesidades.',
  },
  {
    id: 2,
    icon: informacionClaraYDetalladaImg,
    title: 'Información confiable y detallada',
    description:
      'Publicamos datos precisos, fotos de calidad y toda la información que necesitas para tomar una decisión informada.',
  },
  {
    id: 4,
    icon: soporteATuAlcanceImg,
    title: 'Soporte a tu alcance',
    description:
      'Nuestro equipo está siempre disponible para ayudarte y responder tus consultas en cada etapa de tu búsqueda.',
  },
];

const TagCard = ({ item }) => {
  return (
    <Col>
      <Card
        style={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          justifyContent: 'space-between', // Asegura el espacio interno balanceado
          padding: '10px',
          alignItems: 'center',
          height: '100%', // Asegura que las tarjetas llenen su contenedor
          boxShadow: 'none',
        }}
      >
        <Icon src={item.icon} width="105px" height="115px" />
        <Title >{item.title}</Title>
        <h5 className='fs-10 '>{item.description}</h5>
      </Card>
    </Col>
  );
};

TagCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    icon: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};

const MainpageCards = () => {
  return (
    <Row
      className="g-2 mt-0"
      lg={4}
      md={2}
      xs={1}
      style={{ alignItems: 'stretch' }}
    >
      {data.map(item => (
        <TagCard item={item} key={item.id} />
      ))}
    </Row>
  );
};

export default MainpageCards;
