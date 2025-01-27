import React from 'react';
import {
  MenuContainer,
  MenuSection,
  MenuOptionsContainer,
  MenuOption,
  MarginIcon,
} from './MenuStyles';

import homeIcon from '../../assets/img/icons/home.svg';
import peopleIcon from '../../assets/img/icons/people.svg';
import buildingIcon from '../../assets/img/icons/buliding.svg';
import securityIcon from '../../assets/img/icons/security.svg';
import briefcaseIcon from '../../assets/img/icons/briefcase.svg';
import tagIcon from '../../assets/img/icons/tag.svg';
import calendarIcon from '../../assets/img/icons/calendar-2.svg';
import diagramIcon from '../../assets/img/icons/diagram.svg';
import settingIcon from '../../assets/img/icons/setting-2.svg';
import supportIcon from '../../assets/img/icons/24-support.svg';
import exportIcon from '../../assets/img/icons/export.svg';
import { useMenu } from '../../menuContext';
import { useNavigate } from 'react-router-dom';
import { rootPaths } from 'routes/paths';

function Menu() {
  const navigate = useNavigate();
  const { isMenuOpen } = useMenu();

  return (
    <MenuContainer isMenuOpen={isMenuOpen}>
      <MenuSection isMenuOpen={isMenuOpen}>
        <h6>Principal</h6>
        <MenuOptionsContainer>
          <MenuOption isMenuOpen={isMenuOpen}>
            <img src={homeIcon} alt="home" /> <span>Inicio</span>
          </MenuOption>
          <MenuOption isMenuOpen={isMenuOpen}>
            <img src={peopleIcon} alt="people" /> <span>Nosotros</span>
          </MenuOption>
        </MenuOptionsContainer>
      </MenuSection>
      <MenuSection isMenuOpen={isMenuOpen}>
        <h6>Servicios</h6>
        <MenuOptionsContainer>
          <MenuOption isMenuOpen={isMenuOpen}>
            <img src={buildingIcon} alt="inmobiliaria" />{' '}
            <span>Inmobiliaria</span>
          </MenuOption>
          <MenuOption
            isMenuOpen={isMenuOpen}
            onClick={() => {
              navigate(`/${rootPaths.premiumRoot}`);
            }}
          >
            <img src={securityIcon} alt="premium" />
            <span>Premium</span>
          </MenuOption>
        </MenuOptionsContainer>
      </MenuSection>
      <MenuSection isMenuOpen={isMenuOpen}>
        <h6>Novedades</h6>
        <MenuOptionsContainer>
          <MenuOption isMenuOpen={isMenuOpen}>
            <img src={briefcaseIcon} alt="empleos" /> <span>Empleos</span>
          </MenuOption>
          <MenuOption isMenuOpen={isMenuOpen}>
            <img src={tagIcon} alt="promociones" /> <span>Promociones</span>
          </MenuOption>
          <MenuOption isMenuOpen={isMenuOpen}>
            <img src={calendarIcon} alt="eventos" /> <span>Eventos</span>
          </MenuOption>
          <MenuOption isMenuOpen={isMenuOpen}>
            <img src={diagramIcon} alt="tendencias" /> <span>Tendencias</span>
          </MenuOption>
        </MenuOptionsContainer>
      </MenuSection>
      <MenuSection isMenuOpen={isMenuOpen}>
        <h6>Otros</h6>
        <MenuOptionsContainer>
          <MenuOption isMenuOpen={isMenuOpen}>
            <img src={settingIcon} alt="configuraciones" />
            <span>Configuración</span>
          </MenuOption>
          <MenuOption isMenuOpen={isMenuOpen}>
            <img src={supportIcon} alt="soporte" />
            <span>Soporte</span>
            <MarginIcon isMenuOpen={isMenuOpen}>
              <img src={exportIcon} alt="exportar" />
            </MarginIcon>
          </MenuOption>
        </MenuOptionsContainer>
      </MenuSection>
    </MenuContainer>
  );
}

export default Menu;
