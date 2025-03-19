import React, { useEffect, useState } from 'react';
import { usePropertyContext } from 'providers/PropertyProvider';
import PropertySlider from '../PropertySlider';
import { useNavigate, useParams } from 'react-router-dom';
import { useMenu } from 'menuContext';
import PropertyData from 'components/custom/PropertyData/PropertyData';
import PropertyDetailMedia from './PropertyDetailMedia';
import PropertyAdvertiser from 'components/custom/PropertyAdvertiser/PropertyAdvertiser';
import styled from 'styled-components';

const CustomLayout = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  gap: 24px;

  & + div + div {
    margin-top: -100px;
  }

  & + footer {
    margin-top: -100px;
  }

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
  }
`;

const MainData = styled.div`
  width: ${({ isMenuOpen }) => (isMenuOpen ? '785px' : '865px')};

  @media (max-width: 1200px) {
    max-width: 100vw;
  }
`;

const PropertyDetail = ({ type }) => {
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
          <MainData isMenuOpen={isMenuOpen}>
            <PropertyDetailMedia
              imagenes={propertyState.property.multimedia.imagenes}
            />
            {window.innerWidth <= 1200 && (
              <PropertyData property={propertyState.property} type={type} />
            )}
            <PropertyAdvertiser />
          </MainData>

          {window.innerWidth > 1200 && (
            <PropertyData property={propertyState.property} type={type} />
          )}
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
        title="Propiedades recomendadas"
        onPropertyClick={handlePropertyClick}
      />
    </>
  );
};

export default PropertyDetail;
