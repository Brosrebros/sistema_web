import React from 'react';
import {
  NavbarContainer,
  NavbarMainDataContainer,
  NavbarLogoMenuContainer,
  NavbarOptionsContainer,
  NavbarButtonsContainer,
} from './NavbarStyles';
import { useState } from 'react';
import CustomSelect from 'components/custom/CustomSelect/CustomSelect';
import navbarLogo from '../../assets/img/Organización Sanchez Logo.svg';
import divisaIcon from '../../assets/img/icons/money-change.svg';
import languageIcon from '../../assets/img/icons/global.svg';
import notificationIcon from '../../assets/img/icons/notification.svg';
import menuIcon from '../../assets/img/icons/menu.svg';
import PrimaryCustomButton from 'components/custom/CustomButtons/PrimaryCustomButton/PrimaryCustomButton';
import { useMenu } from '../../menuContext';
import { rootPaths } from 'routes/paths';
import { useNavigate } from 'react-router-dom';
import SecondaryCustomButton from 'components/custom/CustomButtons/SecondaryCustomButton/SecondaryCustomButton';

function Navbar({ type }) {
  const { toggleMenu } = useMenu();
  const navigate = useNavigate();

  const idiomaOptions = [
    { value: 'Español', label: 'Español' },
    { value: 'Ingles', label: 'Ingles' },
    { value: 'Chino', label: 'Chino' },
  ];

  const divisaOptions = [
    { value: 'PEN S/.', label: 'PEN S/.' },
    { value: 'USD $', label: 'USD $' },
    { value: 'CNY ¥', label: 'CNY ¥' },
  ];

  const [filterForm, setFilterForm] = useState({
    tipoPropiedad: '',
  });

  const handleCustomChange = e => {
    const { name, value } = e.target;
    setFilterForm(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <NavbarContainer>
      {type === 'auth' ? (
        <NavbarLogoMenuContainer style={{ margin: '0 auto' }}>
          <img
            src={navbarLogo}
            alt="inmobiliaria sanchez"
            onClick={() => {
              navigate(`/`);
            }}
            style={{ cursor: 'pointer' }}
          />
        </NavbarLogoMenuContainer>
      ) : (
        <>
          <NavbarMainDataContainer>
            <NavbarLogoMenuContainer>
              <SecondaryCustomButton onClick={toggleMenu} variant="white">
                <img src={menuIcon} alt="menu" />
              </SecondaryCustomButton>

              <img
                src={navbarLogo}
                alt="inmobiliaria sanchez"
                onClick={() => {
                  navigate(`/`);
                }}
                style={{ cursor: 'pointer' }}
              />
            </NavbarLogoMenuContainer>
            <SecondaryCustomButton variant="white">Vendedores Inmobiliarios</SecondaryCustomButton>
          </NavbarMainDataContainer>
          <NavbarOptionsContainer>
            <NavbarButtonsContainer>
              <CustomSelect
                id="divisa"
                name="divisa"
                aria-label="Divisa"
                value={filterForm.divisaOptions}
                onChange={handleCustomChange}
                placeholder="Divisa"
                options={divisaOptions}
                background="form"
              >
                <img src={divisaIcon} alt="divisa" />
              </CustomSelect>
              <CustomSelect
                id="lenguaje"
                name="lenguaje"
                aria-label="Lenguaje"
                value={filterForm.idiomaOptions}
                onChange={handleCustomChange}
                placeholder="Lenguaje"
                options={idiomaOptions}
                background="form"
              >
                <img src={languageIcon} alt="lenguaje" />
              </CustomSelect>
            </NavbarButtonsContainer>
            <NavbarButtonsContainer>
              <PrimaryCustomButton
                type="main"
                onClick={() => {
                  navigate(`/${rootPaths.saleRoot}`);
                }}
              >
                Vender
              </PrimaryCustomButton>
              <SecondaryCustomButton variant="white">
                <img src={notificationIcon} alt="lenguaje" />
              </SecondaryCustomButton>
            </NavbarButtonsContainer>

            <PrimaryCustomButton
              type="main"
              onClick={() => {
                navigate(
                  `/${rootPaths.authRoot}/${rootPaths.authSimpleRoot}/${rootPaths.loginRoot}`
                );
              }}
            >
              Iniciar Sesión
            </PrimaryCustomButton>
            <SecondaryCustomButton
              variant="white"
              onClick={() => {
                navigate(
                  `/${rootPaths.authRoot}/${rootPaths.authSimpleRoot}/${rootPaths.loginRoot}`
                );
              }}
            >
              Registrarse
            </SecondaryCustomButton>
          </NavbarOptionsContainer>
        </>
      )}
    </NavbarContainer>
  );
}

export default Navbar;
