import React from 'react';
import PropTypes from 'prop-types';
// import { Card } from 'react-bootstrap';
import Flex from 'components/common/Flex';
// import signalImg from 'assets/img/icons/signal.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
// import FalconLink from 'components/common/FalconLink';
// import SimpleBar from 'simplebar-react';
import { Row, Col, Card } from 'react-bootstrap';
import Icon from 'components/common/icon/Icon';
// Stack

const SingleItem = ({ icon, title, description }) => {
  return (
    // <div className="border border-1 border-300 rounded-2 p-1 ask-analytics-item position-relative mb-2">
    <Card
      className="px-1"
      style={{
        boxShadow: 'none', // Elimina cualquier sombra
      }}
    >
      <Flex alignItems="center" className="m-2">
        <Icon src={icon} width="75px" height="75px" />
        <div>
          <Link to="#!" className="stretched-link text-decoration-none">
            <h5 className="fs-10  mb-1 ps-3 black_important bolddd">{title}</h5>
            <h5 className="fs-10 text-800 mb-0 ps-3 black_important">
              {description}
            </h5>
          </Link>
        </div>
      </Flex>
    </Card>
    // </div>
  );
};

SingleItem.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export const Recommendations = ({ data }) => {
  return (
    <>
      <div className="pt-0">
        <Row xs={1} md={2} lg={1} className="g-2">
          {data.map(item => (
            <Col key={item.title}>
              <SingleItem
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

Recommendations.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(SingleItem.propTypes)).isRequired,
};
