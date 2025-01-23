import HomeBanner from 'components/custom/HomeBanner/HomeBanner';
import CardButton from 'components/custom/CustomButtons/CardButton/CardButton';
import ContentInfo from 'components/custom/ContentInfo/ContentInfo';
import ProyectsSection from 'components/custom/ProyectsSection/ProyectsSection';
import React from 'react';
import PropertyForm from 'components/custom/PropertyForm/PropertyForm';
import PropertySlider from 'components/property/PropertySlider';
import { usePropertyContext } from 'providers/PropertyProvider';
import CustomPageLayout from 'components/custom/CustomPageLayout/CustomPageLayout';
import { useMenu } from 'menuContext';
import styled from 'styled-components';

const ButtonContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 16px;
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
  const { isMenuOpen } = useMenu();
  const { propertyState } = usePropertyContext();

  return (
    <>
      <CustomPageLayout>
        <HomeBanner />

        <ButtonContainer>
          <CardButton option="option1" />
          <CardButton option="option2" />
          <CardButton option="option3" />
        </ButtonContainer>

        <PropertyForm />

        <PropertySlider
          slidesToShow={isMenuOpen ? 5.5 : 6.1}
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
