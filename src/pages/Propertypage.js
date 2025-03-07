import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { usePropertyContext } from 'providers/PropertyProvider';
import PropertyDetail from 'components/property/propertydetail/PropertyDetail';
import CustomPageLayout from 'components/custom/CustomPageLayout/CustomPageLayout';
import { useProperty } from 'propertyContext';

const Propertypage = ({ place }) => {
  const { propertyType } = useProperty();
  const { propertyId } = useParams();
  const {
    propertyState: { properties, property },
    findPropertyById,
  } = usePropertyContext();

  useEffect(() => {
    if (!property || property.id !== propertyId) {
      findPropertyById(propertyId);
    }
  }, [propertyId, property, findPropertyById]);

  console.log(property);

  return (
    <CustomPageLayout place={place}>
      {property ? (
        <PropertyDetail type={propertyType} />
      ) : (
        <p>Cargando propiedad...</p>
      )}
    </CustomPageLayout>
  );
};

export default Propertypage;
