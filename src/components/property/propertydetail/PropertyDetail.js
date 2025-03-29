import React, { useEffect, useState } from 'react';
import { usePropertyContext } from 'providers/PropertyProvider';
import PropertySlider from '../PropertySlider';
import { useNavigate, useParams } from 'react-router-dom';
import { useMenu } from 'menuContext';
import PropertyData from 'components/custom/PropertyData/PropertyData';
import PropertyDetailMedia from './PropertyDetailMedia';
import PropertyAdvertiser from 'components/custom/PropertyAdvertiser/PropertyAdvertiser';
import SecondaryCustomButton from 'components/custom/CustomButtons/SecondaryCustomButton/SecondaryCustomButton';
import arrowLeft from 'assets/img/icons/arrow-left.svg';
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

    & + div + div {
      margin: 0px;
    }
  }
`;

const SliderLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > div {
    padding: 20px;
  }

  & > div:last-child {
    margin-top: -100px;

    @media (max-width: 1200px) {
      margin: 0px;
    }
  }
`;

const MainData = styled.div`
  width: ${({ isMenuOpen }) => (isMenuOpen ? '785px' : '865px')};

  @media (max-width: 1200px) {
    max-width: 100vw;
  }
`;

const StandaloneNavigate = styled.div`
  width: 100vw;
  display: none;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 40px;
  margin-top: -24px;
  background-color: #ffffff;

  button {
    border: 0px;

    @media (max-width: 1200px) {
      position: absolute;
      left: 20px;
    }
  }

  h3 {
    display: none;
  }

  @media (max-width: 1200px) {
    display: flex;
    padding: 0px;
    height: 56px;
    position: relative;
    justify-content: center;

    h3 {
      display: block;
      font-weight: 700;
      font-size: 0.94rem;
      line-height: 122%;
      text-align: center;
      color: black;
      margin: 0px;
    }
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
      <StandaloneNavigate>
        <SecondaryCustomButton
          onClick={() => {
            navigate(-1);
          }}
        >
          <img src={arrowLeft} alt="arrow" />
        </SecondaryCustomButton>
        <h3>Descripción del anuncio</h3>
      </StandaloneNavigate>
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

      <SliderLayout>
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
      </SliderLayout>
    </>
  );
};

export default PropertyDetail;
