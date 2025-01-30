import LeafletMap from 'components/dashboards/project-management/project-location/LeafletMap';
import React from 'react';
import PropTypes from 'prop-types';

const PropertyDetailLocation = ({ markers }) => {
  return (
    <LeafletMap
      data={[{ ...markers, id: 0 }]}
      style={{
        width: '100%',
        minHeight: '554px',
        borderRadius: '12px',
      }}
    />
  );
};

PropertyDetailLocation.propTypes = {
  markers: PropTypes.shape({
    lat: PropTypes.number,
    long: PropTypes.number,
    name: PropTypes.string,
    street: PropTypes.string,
    location: PropTypes.string,
  }),
};

export default PropertyDetailLocation;
