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
    if (!property || property.id !== propertyId) {
      findPropertyById(propertyId);
    }
  }, [propertyId, property, findPropertyById])

  console.log(property);

  return (
    <CustomPageLayout>
      {property ? <PropertyDetail /> : <p>Cargando propiedad...</p>}
    </CustomPageLayout>
  );
};

export default Propertypage;