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
  }, [propertyId, findPropertyById]);  // Agregar propertyId como dependencia

  console.log(property);

  return (
    <CustomPageLayout>
      {/* Solo renderiza el detalle si hay una propiedad cargada */}
      {property ? <PropertyDetail /> : <p>Cargando propiedad...</p>}
    </CustomPageLayout>
  );
};

export default Propertypage;
