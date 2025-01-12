import SectionLayout from 'components/custom/SectionLayout/SectionLayout';
import HomeBanner from 'components/custom/HomeBanner/HomeBanner';
import CardButton from 'components/custom/CustomButtons/CardButton/CardButton';
import ContentInfo from 'components/custom/ContentInfo/ContentInfo';
import ProyectsSection from 'components/custom/ProyectsSection/ProyectsSection';
import React, { useState } from 'react';
import PropertyForm from 'components/custom/PropertyForm/PropertyForm';
import PropertySlider from 'components/property/PropertySlider';
import { useFrontpage } from 'hooks/useFrontpage';
import { usePropertyContext } from 'providers/PropertyProvider';
import { useNavigate } from 'react-router-dom';
import CustomPageLayout from 'components/custom/CustomPageLayout/CustomPageLayout';
import styled from 'styled-components';

const ButtonContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 24px;
  padding: 0px;

  @media (max-width: 1200px) {
    gap: 12px;
  }

  @media (max-width: 968px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const Mainpage = () => {
  const [state] = useFrontpage();
  const { propertyState } = usePropertyContext();
  const navigate = useNavigate();
  const [filterForm, setFilterForm] = useState({
    tipoOperacion: '',
    direccionCompleta: '',
    tipoPropiedad: '',
    presupuesto: '',
    ordenarPor: '',
  });

  return (
    <>
      <CustomPageLayout>
        <SectionLayout title="Inmobiliaria">
          <HomeBanner />
        </SectionLayout>

        <ButtonContainer>
          <CardButton option="option1" />
          <CardButton option="option2" />
          <CardButton option="option3" />
        </ButtonContainer>

        <SectionLayout title="Encuentra tu propiedad ideal">
          <PropertyForm />
        </SectionLayout>

        <PropertySlider
          slidesToShow={5.4}
          data={propertyState.properties}
          title="Descubre las propiedades recomendadas (24)"
        />

        <ContentInfo type="left" />

        <ProyectsSection />
      </CustomPageLayout>
    </>
  );
};

export default Mainpage;
