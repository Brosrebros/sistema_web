import React, { useState } from 'react';
import {
  MenuContainer,
  MenuSection,
  MenuOptionsContainer,
  MenuOption,
  CustomCorner,
  PremiumPack,
  MobileHeader,
  Wrapper
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
import { useMenu } from '../../menuContext';
import { useNavigate } from 'react-router-dom';
import { rootPaths } from 'routes/paths';
import { useModal } from 'modalContext';
import menuIcon from 'assets/img/icons/menu.svg';
import PrimaryCustomButton from 'components/custom/CustomButtons/PrimaryCustomButton/PrimaryCustomButton';
import SecondaryCustomButton from 'components/custom/CustomButtons/SecondaryCustomButton/SecondaryCustomButton';

function Menu({ active }) {
  const navigate = useNavigate();
  const { isMenuOpen, toggleMenu } = useMenu();

  return (
    <>
      <MenuContainer isMenuOpen={isMenuOpen}>
        <CustomCorner>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 0H0V12C0 5.37258 5.37258 0 12 0Z"
              fill="white"
            />
          </svg>
        </CustomCorner>
        <MenuSection isMenuOpen={isMenuOpen}>
          <MobileHeader>
            <SecondaryCustomButton onClick={toggleMenu} variant="white">
              <img src={menuIcon} alt="menu" />
            </SecondaryCustomButton>

            <PrimaryCustomButton
              type="main"
              onClick={() => {
                navigate(
                  `/${rootPaths.authRoot}/${rootPaths.authSimpleRoot}/${rootPaths.loginRoot}`
                );
              }}
            >
              Iniciar sesión
            </PrimaryCustomButton>
          </MobileHeader>

          <h6 id="desktop">Categorias</h6>
          <MenuOptionsContainer id="desktop">
            <MenuOption
              isMenuOpen={isMenuOpen}
              active={active === 'inmobiliaria'}
              onClick={() => {
                navigate(`/`);
              }}
            >
              <img src={buildingIcon} alt="inmobiliaria" />{' '}
              <span>Inmobiliaria</span>
            </MenuOption>
            {/* <MenuOption isMenuOpen={isMenuOpen} active={active === 'inicio'}>
            <img src={homeIcon} alt="home" /> <span>Inicio</span>
          </MenuOption>
          <MenuOption isMenuOpen={isMenuOpen} active={active === 'nosotros'}>
            <img src={peopleIcon} alt="people" /> <span>Nosotros</span>
          </MenuOption> */}
          </MenuOptionsContainer>

          <PremiumPack isMenuOpen={isMenuOpen}>
            <div>
              <h4>Premiun</h4>
              <p>
                Accede a herramientas avanzadas y maximiza tus ventas con un
                solo clic.
              </p>
            </div>
            <PrimaryCustomButton
              onClick={() => {
                navigate(`/${rootPaths.premiumRoot}`);
              }}
            >
              Actualizar a Premium
            </PrimaryCustomButton>
          </PremiumPack>
        </MenuSection>
        {/* <MenuSection isMenuOpen={isMenuOpen}>
        <h6>Servicios</h6>
        <MenuOptionsContainer>
          <MenuOption
            isMenuOpen={isMenuOpen}
            active={active === 'inmobiliaria'}
            onClick={() => {
              navigate(`/`);
            }}
          >
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
      </MenuSection> */}

        <MenuSection isMenuOpen={isMenuOpen}>
          <h6>Otros</h6>
          <MenuOptionsContainer>
            <MenuOption
              isMenuOpen={isMenuOpen}
              onClick={() => navigate(`/${rootPaths.settingsRoot}`)}
              active={active === 'settings'}
            >
              <img src={settingIcon} alt="configuraciones" />
              <span>Configuración</span>
            </MenuOption>
            <MenuOption
              isMenuOpen={isMenuOpen}
              active={active === 'soporte'}
              onClick={() => {
                navigate(`/${rootPaths.supportRoot}`);
              }}
            >
              <img
                src={supportIcon}
                alt="soporte"
                active={active === 'soporte'}
              />
              <span>Soporte</span>
            </MenuOption>
          </MenuOptionsContainer>
        </MenuSection>
      </MenuContainer>
      <Wrapper isMenuOpen={isMenuOpen}/>
    </>
  );
}

export default Menu;
