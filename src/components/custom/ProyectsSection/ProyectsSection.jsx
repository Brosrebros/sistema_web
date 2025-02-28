import React, { useState } from 'react';
import {
  SectionContainer,
  TextButtonContainer,
  OptionsContainer,
  CustomButton,
  Options,
} from './ProyectsSection.styles';
import PrimaryCustomButton from '../CustomButtons/PrimaryCustomButton/PrimaryCustomButton';
import PropertySliderValdemar from '../../../PropertySliderValdemar';
import { usePropertyContext } from '../../../providers/PropertyProvider';
import icon from '../../../assets/img/icons/conocetodoslosdesarrollos_blanco.svg';
import { useMenu } from 'menuContext';
import { useNavigate } from 'react-router-dom';
import { rootPaths } from 'routes/paths';

function ProyectsSection() {
  const { isMenuOpen } = useMenu();
  const navigate = useNavigate()
  const [activeButton, setActiveButton] = useState('en construccion');
  const { propertyState } = usePropertyContext();

  return (
    <SectionContainer>
      <TextButtonContainer>
        <div>
          <h3>
            Invierte en proyectos inmobiliarios que crecen y aumentan su valor
            día a día
          </h3>
          <p>
            Descubre proyectos en construcción con precios 
            preferenciales y asegura tu lugar en futuras 
            propiedades que prometen alta valorización.
          </p>
        </div>
        <PrimaryCustomButton onClick={() => navigate(`/${rootPaths.proyectsRoot}`)}>
          <img src={icon} alt="conoce nuestros desarrollos" />
          Descubre todos los proyectos inmobiliarios
        </PrimaryCustomButton>
      </TextButtonContainer>

      <div>
        <OptionsContainer>
          <Options>
            <CustomButton
              isActive={activeButton === 'en construccion'}
              onClick={() => setActiveButton('en construccion')}
            >
              En construcción
            </CustomButton>
            <CustomButton
              isActive={activeButton === 'en planos'}
              onClick={() => setActiveButton('en planos')}
            >
              En planos
            </CustomButton>
            <CustomButton
              isActive={activeButton === 'entrega inmediata'}
              onClick={() => setActiveButton('entrega inmediata')}
            >
              Entrega inmediata
            </CustomButton>
          </Options>
        </OptionsContainer>
        <PropertySliderValdemar
          slidesToShow={isMenuOpen ? 3.4 : 3.75}
          data={propertyState.properties}
          type="proyect"
        />
      </div>
    </SectionContainer>
  );
}

export default ProyectsSection;
