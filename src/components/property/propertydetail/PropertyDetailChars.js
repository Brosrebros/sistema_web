import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Row, Col } from 'react-bootstrap';
// Card, Col, Row, Form
// import Flex from 'components/common/Flex';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import AudienceChart from 'components/dashboards/analytics/audience/AudienceChart';
// import FalconLink from 'components/common/FalconLink';
import classNames from 'classnames';

const CharDescription = ({ charList }) => {
  return (
    <>
      {charList.length > 0 &&
        charList.map((element, index) => <p key={index}>{element}</p>)}
    </>
  );
};

const PropertyDetailChars = ({ className, chars }) => {
  const [tab, setTab] = useState('caracteristicas');
  return (
    <div className={classNames(className, 'overflow-hidden')}>
      <div
        style={{
          display: 'flex',
          gap: '10px',
          flexWrap: 'wrap',
        }}
      >
        <Button
          className="fs-10 d-flex p-1 gap-1 align-items-center"
          onClick={() => setTab('caracteristicas')}
          variant="danger"
        >
          Caracteristicas generales
        </Button>
        <Button
          className="fs-10 d-flex p-1 gap-1 align-items-center"
          onClick={() => setTab('servicios')}
          variant="danger"
        >
          Servicios
        </Button>
        <Button
          className="fs-10 d-flex p-1 gap-1 align-items-center"
          onClick={() => setTab('ambientes')}
          variant="danger"
        >
          Ambientes
        </Button>
        <Button
          className="fs-10 d-flex p-1 gap-1 align-items-center"
          onClick={() => setTab('alrededores')}
          variant="danger"
        >
          Alrededores
        </Button>
      </div>

      <Row>
        <Col xs={12}>
          <div className="p-3">
            {tab === 'caracteristicas' ? (
              <CharDescription charList={chars.caracteristicasGenerales} />
            ) : tab === 'servicios' ? (
              <CharDescription charList={chars.servicios} />
            ) : tab === 'ambientes' ? (
              <CharDescription charList={chars.areasComunes} />
            ) : tab === 'alrededores' ? (
              <CharDescription charList={chars.exteriores} />
            ) : null}
          </div>
        </Col>
      </Row>

      {/* <Card.Footer className="bg-body-tertiary py-2">
        <Row className="g-0 flex-between-center">
          <Col xs="auto">
            <Form.Select size="sm" className="me-2">
              <option>Last 7 days</option>
              <option>Last Month</option>
              <option>Last Year</option>
            </Form.Select>
          </Col>
          <Col xs="auto">
            <FalconLink title="Visitors overview" className="px-0 fw-medium" />
          </Col>
        </Row>
      </Card.Footer> */}
    </div>
  );
};

CharDescription.propTypes = {
  charList: PropTypes.arrayOf(PropTypes.string),
};

PropertyDetailChars.propTypes = {
  className: PropTypes.string.isRequired,
  chars: PropTypes.shape({
    caracteristicasGenerales: PropTypes.arrayOf(PropTypes.string),
    exteriores: PropTypes.arrayOf(PropTypes.string),
    servicios: PropTypes.arrayOf(PropTypes.string),
    areasComunes: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default PropertyDetailChars;
