import React, { useEffect, useState } from 'react';
import PropertyDetailAdvertiser from './PropertyDetailAdvertiser';
import { usePropertyContext } from 'providers/PropertyProvider';
import PropertySlider from '../PropertySlider';
import { useNavigate, useParams } from 'react-router-dom';
import { useMenu } from 'menuContext';
import PropertyData from 'components/custom/PropertyData/PropertyData';
import styled from 'styled-components';

const CustomLayout = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  gap: 24px;
`;

const PropertyDetail = () => {
  const { isMenuOpen } = useMenu();
  const { propertyState, fetchPropertyById } = usePropertyContext();
  const { id } = useParams();
  const navigate = useNavigate();

  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    if (id) {
      fetchPropertyById(id);
    }
  }, [id, fetchPropertyById]);

  const handlePropertyClick = propertyId => {
    navigate(`/properties/${propertyId}`);
    fetchPropertyById(propertyId);
    setRefreshKey(prevKey => prevKey + 1);
  };

  return (
    <>
      {propertyState.property && (
        <CustomLayout>
          <div style={{maxWidth:"783px"}}>
            <PropertyDetailAdvertiser property={propertyState.property} />
          </div>
          
          <PropertyData property={propertyState.property} />
        </CustomLayout>
      )}

      <PropertySlider
        slidesToShow={isMenuOpen ? 5.2 : 5.8}
        data={propertyState.properties}
        title="Encuentra propiedades similares"
        onPropertyClick={handlePropertyClick}
      />

      <PropertySlider
        slidesToShow={isMenuOpen ? 5.2 : 5.8}
        data={propertyState.properties}
        title="Propiedades recomendadas (24)"
        onPropertyClick={handlePropertyClick}
      />
    </>
  );
};

export default PropertyDetail;
