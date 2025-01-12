import React from 'react';
import {
  MenuContainer,
  MenuSection,
  MenuOptionsContainer,
  MenuOption,
} from './MenuStyles';

function Menu() {
  return (
    <MenuContainer>
      <MenuSection>
        <h6>Principal</h6>
        <MenuOptionsContainer>
          <MenuOption>Inicio</MenuOption>
          <MenuOption>Nosotros</MenuOption>
        </MenuOptionsContainer>
      </MenuSection>
      <MenuSection>
        <h6>Servicios</h6>
        <MenuOptionsContainer>
          <MenuOption>Inmobiliaria</MenuOption>
          <MenuOption>Vehículos y transporte</MenuOption>
          <MenuOption>Maquinarias y equipos</MenuOption>
          <MenuOption>Tecnología y electrónica</MenuOption>
          <MenuOption>Consumo y estilo de vida</MenuOption>
          <MenuOption>Inversiones y finanzas</MenuOption>
        </MenuOptionsContainer>
      </MenuSection>
      <MenuSection>
        <h6>Novedades</h6>
        <MenuOptionsContainer>
          <MenuOption>Empleos</MenuOption>
          <MenuOption>Promociones</MenuOption>
          <MenuOption>Eventos</MenuOption>
          <MenuOption>Tendencias</MenuOption>
        </MenuOptionsContainer>
      </MenuSection>
      <MenuSection>
        <h6>Otros</h6>
        <MenuOptionsContainer>
          <MenuOption>Soporte</MenuOption>
          <MenuOption>Configuración</MenuOption>
        </MenuOptionsContainer>
      </MenuSection>
    </MenuContainer>
  );
}

export default Menu;
