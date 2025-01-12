import React, { useState } from 'react';
import {
  SectionContainer,
  TextButtonContainer,
  OptionsContainer,
  CustomButton,
} from './ProyectsSection.styles';
import PrimaryCustomButton from '../CustomButtons/PrimaryCustomButton/PrimaryCustomButton';
import PropertySliderValdemar from '../../../PropertySliderValdemar';
import { usePropertyContext } from '../../../providers/PropertyProvider';
import icon from '../../../assets/img/icons/conocetodoslosdesarrollos_blanco.svg';

function ProyectsSection() {
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
            Sé parte del crecimiento desde el inicio. Descubre proyectos en
            construcción con precios preferenciales y asegura tu lugar en
            futuras propiedades que prometen alta valorización.
          </p>
        </div>
        <PrimaryCustomButton>
          <img src={icon} alt="conoce nuestros desarrollos" />
          Descubre todos los proyectos inmobiliarios
        </PrimaryCustomButton>
      </TextButtonContainer>

      <div>
        <OptionsContainer>
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
        </OptionsContainer>
        <PropertySliderValdemar
          slidesToShow={3.5}
          data={propertyState.properties}
          type="proyect"
        />
      </div>
    </SectionContainer>
  );
}

export default ProyectsSection;