import classNames from 'classnames';
import FalconCardFooterLink from 'components/common/FalconCardFooterLink';
import FalconCardHeader from 'components/common/FalconCardHeader';
import PropTypes from 'prop-types';
import React from 'react';
import { Card, Col, Form, ProgressBar, Row } from 'react-bootstrap';

const Project = ({ project, isLast }) => {
  const { progress, duration } = project;
  return (
    <Row
      className={classNames('position-relative align-items-center py-2 g-0', {
        'border-bottom border-200': !isLast,
      })}
    >
      <Col className="py-1 ps-x1">
 
      </Col>
      <Col>
        <Row className="justify-content-end align-items-center g-0">
          <Col xs="auto pe-2">
            <div className="fs-10 fw-semibold">{duration}</div>
          </Col>
          <Col xs="5" className="ps-2 pe-x1">
            <ProgressBar now={progress} style={{ height: 5 }} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

Project.propTypes = {
  project: PropTypes.shape({
    color: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired,
    duration: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  isLast: PropTypes.bool,
};

const RunningProjects = ({ data }) => {
  return (
    <Card>
      <FalconCardHeader
        title="Running Projects"
        light
        titleTag="h6"
        endEl={
          <Form.Select size="sm" className="me-2">
            <option>Working Time</option>
            <option>Estimated Time</option>
            <option>Billable Time</option>
          </Form.Select>
        }
      />

      <Card.Body className="p-0">
        {data.map((project, index) => (
          <Project
            project={project}
            isLast={index === data.length - 1}
            key={project.id}
          />
        ))}
      </Card.Body>

      <FalconCardFooterLink title="Show all projects" size="sm" />
    </Card>
  );
};

RunningProjects.propTypes = {
  data: PropTypes.arrayOf(Project.propTypes.project).isRequired,
};

export default RunningProjects;
