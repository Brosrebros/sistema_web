import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { usePropertyContext } from 'providers/PropertyProvider';
import PropertyDetail from 'components/property/propertydetail/PropertyDetail';
import CustomPageLayout from 'components/custom/CustomPageLayout/CustomPageLayout';

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
    <CustomPageLayout>
      <PropertyDetail/>
    </CustomPageLayout>
  );
};

export default Propertypage;
