import MainBanner from 'components/custom/MainBanner/MainBanner';
import CardButton from 'components/custom/CustomButtons/CardButton/CardButton';
import ContentInfo from 'components/custom/ContentInfo/ContentInfo';
import ProyectsSection from 'components/custom/ProyectsSection/ProyectsSection';
import React from 'react';
import PropertyForm from 'components/custom/PropertyForm/PropertyForm';
import PropertySlider from 'components/property/PropertySlider';
import { usePropertyContext } from 'providers/PropertyProvider';
import { useMenu } from 'menuContext';
import styled from 'styled-components';
import { rootPaths } from 'routes/paths';
import { useNavigate } from 'react-router-dom';

const ButtonContainer = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  padding: 0px;

  & > div {
    & > div {
      h4 {
        max-width: 22ch;
        max-height: 35px;
        line-height: 115%;
      }
    }
  }

  & > div:last-child {
    & > div {
      h4 {
        line-height: 12px;
      }
    }
  }

  @media (max-width: 1200px) {
    gap: 12px;
  }

  @media (max-width: 968px) {
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

const CustomPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  font-family: 'Aptos_display';
  transition: all 0.15s linear;
  margin: 0 auto;

  & + footer {
    margin-top: -100px;

    @media (max-width: 968px) {
      margin-top: 0px;
    }
  }

  @media (max-width: 968px) {
    & > div:nth-child(2),
    & > div:nth-child(4),
    & > form,
    & > section {
      margin-right: 20px;
      margin-left: 20px;
      max-width: calc(100vw - 40px);
    }
  }
`;

const Mainpage = () => {
  const { isMenuOpen } = useMenu();
  const { propertyState } = usePropertyContext();
  const navigate = useNavigate();

  return (
    <>
      <CustomPageLayout>
        <PropertyForm page="main" />
        <MainBanner type="home" />
        <ButtonContainer>
          <CardButton
            option="option1"
            onClick={() => {
              navigate(`/${rootPaths.offersRoot}`);
            }}
          />
          <CardButton
            option="option2"
            onClick={() => {
              navigate(`/${rootPaths.proyectsRoot}`);
            }}
          />
          <CardButton
            option="option3"
            onClick={() => {
              navigate(`/${rootPaths.saleRoot}`);
            }}
          />
        </ButtonContainer>
        <PropertySlider
          slidesToShow={isMenuOpen ? 5.2 : 5.8}
          data={propertyState.properties}
          title="Descubre las propiedades recomendadas"
        />
        <ContentInfo type="left" />
        <ProyectsSection />
      </CustomPageLayout>
    </>
  );
};

export default Mainpage;
