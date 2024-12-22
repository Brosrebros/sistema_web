import React from 'react';
import { Form, Card, Col, Row } from 'react-bootstrap';
import { Title } from 'components/mainpage/Title';
import Icon from 'components/common/icon/Icon';
import PropTypes from 'prop-types';
import actualizacionesYMantenimientoImg from 'assets/icons/soporte-actualizacionesymantenimiento.svg';
import guiasYPreguntasFrecuentesImg from 'assets/icons/soporte-guiasypreguntasfrecuentes.svg';
import soportePersonalizadoImg from 'assets/icons/soporte-soportepersonalizado.svg';
import terminosLegalesImg from 'assets/icons/soporte-terminoslegales.svg';
import locationIcon from 'assets/icons/simplenavbar-endondelabuscas.svg';
import CustomCardLayout from 'components/custom/CustomCardLayout/CustomCardLayout';
import CustomTitle from 'components/custom/CustomText/CustomTitle/CustomTitle';
import { rootPaths } from 'routes/paths';

const SupportOptions = [
  {
    id: 0,
    icon: terminosLegalesImg,
    title: 'Términos legales',
    description:
      ' Este apartado contiene información esencial sobre los acuerdos y políticas que rigen el uso de nuestros servicios. Te invitamos a leer detenidamente estos documentos para garantizar una experiencia transparente y confiable.',
  },
  {
    id: 1,
    icon: guiasYPreguntasFrecuentesImg,
    title: 'Guías y Preguntas Frecuentes (FAQs)',
    description:
      ' Aquí encontrarás respuestas a las preguntas más comunes y guías paso a paso para resolver problemas técnicos y aprender a utilizar nuestros servicios de manera efectiva.',
  },
  {
    id: 2,
    icon: soportePersonalizadoImg,
    title: 'Soporte Personalizado',
    description:
      ' Si necesitas asistencia específica, nuestro equipo de soporte está aquí para ayudarte. Utiliza cualquiera de los siguientes métodos para ponerte en contacto con nosotros.',
  },
  {
    id: 3,
    icon: actualizacionesYMantenimientoImg,
    title: 'Actualizaciones y Mantenimiento',
    description:
      'Mantente informado sobre las últimas actualizaciones, interrupciones planificadas y mejoras en nuestros servicios.',
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
          padding: '10px',
          alignItems: 'center',
          height: '100%',
          boxShadow: 'none',
        }}
      >
        <a
          href={`/${rootPaths.supportRoot}/terms`}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            padding: '10px',
            textAlign: 'center',
            height: '100%',
            textDecoration: 'none',
          }}
        >
          <Icon src={item.icon} width="85px" height="105px" />
          <Title>{item.title}</Title>
          <p
            style={{
              color: '#424242',
            }}
          >
            {item.description}
          </p>
        </a>
      </Card>
    </Col>
  );
};

const Supportpage = () => {
  return (
    <>
      <Row className=" m-2 justify-content-center mx-auto">
        <Col xs={12} lg={8} xxl={6}>
          <Row>
            <Col xs={6}>
              <Title>Hola, ¿en qué podemos ayudarte?</Title>
            </Col>

            <Col
              xs={6}
              // lg={3} md={6} xs={12}
              className="px-2 pb-5"
            >
              <div
                style={{
                  display: 'flex',
                  borderRadius: '0.6rem',
                  alignItems: 'center',
                  backgroundColor: '#fff',
                  padding: '0 8px',
                  width: '100%',
                  height: '36px',
                }}
              >
                <img src={locationIcon} width="16px" />
                <Form.Control
                  type="text"
                  id="direccionCompleta"
                  name="direccionCompleta"
                  aria-describedby="Buscar palabras clave"
                  placeholder="Buscar palabras clave"
                  style={{
                    fontSize: '14px',
                    border: 'none',
                    height: '100%',
                    boxShadow: 'none',
                    fontFamily: 'Aptos !important',
                  }}
                />
              </div>
            </Col>
          </Row>
          <CustomTitle>
            Resolvemos dudas y potenciamos tu experiencia
          </CustomTitle>
          <CustomCardLayout>
            {SupportOptions.map(item => (
              <TagCard item={item} key={item.id} />
            ))}
          </CustomCardLayout>
        </Col>
      </Row>
    </>
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

export default Supportpage;
