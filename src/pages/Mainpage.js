import { useState } from 'react';
import MainBanner from 'components/custom/MainBanner/MainBanner';
import CardButton from 'components/custom/CustomButtons/CardButton/CardButton';
import ContentInfo from 'components/custom/ContentInfo/ContentInfo';
import ProyectsSection from 'components/custom/ProyectsSection/ProyectsSection';
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

  @media (max-width: 1200px) {
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

  #mobile {
    display: none;
  }

  & + footer {
    margin-top: -100px;

    @media (max-width: 1200px) {
      margin-top: 0px;
    }
  }

  @media (max-width: 1200px) {
    & > div:nth-child(3),
    & > div:nth-child(5),
    & > section {
      margin: 0 auto;
      max-width: calc(100vw - 40px);
    }

    & > form {
      margin-top: -24px;
    }

    margin-top: -24px;

    #mobile {
      display: flex;
    }
  }
`;

const TabButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  background-color: #ffffff;
  border-bottom: 1px solid #c3c3c3;
`;

const CustomButton = styled.button`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border: none;
  outline: none;
  background-color: #ffffff;
  padding: 12px 16px;
  transition: all 0.1s ease;
  border-radius: 12px;
  position: relative;
  margin-bottom: 4px;
  height: 48px;

  /* Fuente */
  font-size: 1rem;
  font-weight: normal;
  font-family: 'Aptos';
  color: #424242;
  line-height: 70%;

  &:hover {
    background-color: ${({ activeSection }) =>
      activeSection ? '#ffffff' : '#f2f2f2'};
  }

  &:active {
    background-color: ${({ activeSection }) =>
      activeSection ? '#ffffff' : '#e4e4e4'};
  }

  ${({ activeSection }) =>
    activeSection &&
    `
    &::before {
      content: "";
      position: absolute;
      bottom: -4px; /* Asegura que la línea esté justo debajo */
      left: 0;
      width: 100%;
      height: 4px;
      background-color: #940000;
      border-radius: 10px;
    }
  `}

  @media (max-width: 1200px) {
    font-size: 0.81rem;
  }
`;

const Mainpage = () => {
  const { isMenuOpen } = useMenu();
  const { propertyState } = usePropertyContext();
  const [activeSection, setActiveSection] = useState('inmobiliaria');
  const navigate = useNavigate();

  const handleActiveSection = section => {
    setActiveSection(section);
  };

  return (
    <>
      <CustomPageLayout>
        <TabButtonContainer id="mobile">
          <CustomButton
            onClick={() => handleActiveSection('inmobiliaria')}
            activeSection={activeSection === 'inmobiliaria'}
          >
            Inmobiliaria
          </CustomButton>
          <CustomButton
            onClick={() => {
              handleActiveSection('vendedores inmobiliarios');
              navigate(`/${rootPaths.sellerRoot}`);
            }}
            activeSection={activeSection === 'vendedores inmobiliarios'}
          >
            Vendedores inmobiliarios
          </CustomButton>
        </TabButtonContainer>
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
