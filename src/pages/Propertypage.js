import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { usePropertyContext } from 'providers/PropertyProvider';
import PropertyDetail from 'components/property/propertydetail/PropertyDetail';

const Propertypage = () => {
  const { propertyId } = useParams();
  const {
    propertyState: { properties, property },
    findPropertyById,
  } = usePropertyContext();
  useEffect(() => {
    findPropertyById(propertyId);
  }, [properties]);
  console.log(property);
  // const { propertyState, filterBasic } = propertyReducer();
  return (
    <>
      <PropertyDetail />
    </>
  );
};

export default Propertypage;
