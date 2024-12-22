import LeafletMap from 'components/dashboards/project-management/project-location/LeafletMap';
import React from 'react';
import PropTypes from 'prop-types';

const PropertyDetailLocation = ({ markers }) => {

  console.log(markers)

  return (
    <>
      <LeafletMap
        data={[{ ...markers, id: 0 }]}
        className="h-100 bg-body-tertiary"
        style={{
          minHeight: '600px',
          borderRadius: '12px',
        }}
      />
      {/* <iframe
        style={{ border: '0' }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        width={'100%'}
        height={'500px'}
        src="https://www.google.com/maps/embed/v1/place?key=API_KEY&q=Space+Needle,Seattle+WA"
      ></iframe> */}
    </>
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
