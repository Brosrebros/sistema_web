import React from 'react';
// import eventBanner from 'assets/img/generic/13.jpg';
// import { Card } from 'react-bootstrap';
// , Row, Col, Button
// import Flex from 'components/common/Flex';
// import Calendar from 'components/common/Calendar';
// import { Link } from 'react-router-dom';
// import IconButton from 'components/common/IconButton';
import { Imagebanner } from 'components/common/Imagebanner';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
// Form, Button, Stack
import { Title } from './Title';
import { Recommendations } from './Recommendations';
import img1 from 'assets/icons/mainpage-banner-card-propiedadesquebajarondeprecio.svg';
import img2 from 'assets/icons/mainpage-banner-card-proyectosconfinanciamientodirecto.svg';
import img3 from 'assets/icons/mainpage-banner-card-publicaaqui.svg';

const intelligence = [
  {
    title: 'Propiedades que bajaron de precio',
    icon: img1,
    description:
      'Aprovecha las mejores ofertas en casas, departamentos y terrenos con precios recien reducidos',
  },
  {
    title: 'Proyectos con financiamiento directo',
    icon: img2,
    description:
      'Descubre desarrollos inmobiliarios que ofrecen planes de pago sin intermediarios bancarios',
  },
  {
    title: ' ¡Publica aquí!',
    icon: img3,
    description:
      ' Dale visivilidad a tu propiedad en nuestra plataforma y encuentra compradores o inquilinos rapidamente',
  },
];

export const MainpageBanner = ({ src }) => {
  return (
    <div>
      <Row>
        <Imagebanner classname="d-lg-none d-grid px-0" src={src} />
      </Row>
      <Row className="g-2 mt-0">
        <Col xl={8} lg={6} className="m-0">
          <Title classname={'d-lg-flex d-none m-0 titulo_primera_pagina'}>
            Inmobiliaria
          </Title>
        </Col>
        <Col xl={4} lg={6} className="m-0">
          <Title classname={'d-lg-flex d-none m-0 titulo_primera_pagina'}>
            Encuentra lo que te puede interesar
          </Title>
        </Col>
        <Col xl={8} lg={6} xs={12} className="d-lg-grid d-none">
          <Imagebanner
            extraStyles={{ borderRadius: '10px' }}
            src={src}
            height="auto"
          />
        </Col>
        <Col xl={4} lg={6} xs={12}>
          <Title classname={'d-lg-none d-xs-flex'}>
            Encuentra lo que te puede interesar
          </Title>
          <Recommendations data={intelligence} />
        </Col>
      </Row>
    </div>
  );
};

MainpageBanner.propTypes = {
  src: PropTypes.string,
};
