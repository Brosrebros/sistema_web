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
import navbarLogo from '../../assets/img/icons/Logo comercial - blanco.svg';
import divisaIcon from '../../assets/img/icons/money-change.svg';
import languageIcon from '../../assets/img/icons/global.svg';
import notificationIcon from '../../assets/img/icons/notification.svg';
import menuIcon from '../../assets/img/icons/menu.svg';
import PrimaryCustomButton from 'components/custom/CustomButtons/PrimaryCustomButton/PrimaryCustomButton';
import { useMenu } from '../../menuContext';
import styled from 'styled-components';
import { rootPaths } from 'routes/paths';
import { useNavigate } from 'react-router-dom';

const CustomButton = styled.button`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid white;
  outline: none;
  background-color: ${({ type }) => (type === 'main' ? 'white' : '#940000')};
  border-radius: 12px;
  padding: 12px 16px;
  transition: all 0.2s ease;
  font-size: 1em;
  font-weight: normal;
  font-family: 'Aptos';
  color: ${({ type }) => (type === 'main' ? '#424242' : 'white')};
  line-height: 100%;

  img {
    height: 20px;
    width: 20px;
  }

  &:hover {
    filter: brightness(0.9);
  }
`;

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
              <PrimaryCustomButton onClick={toggleMenu}>
                <img src={menuIcon} alt="menu" />
              </PrimaryCustomButton>

              <img
                src={navbarLogo}
                alt="inmobiliaria sanchez"
                onClick={() => {
                  navigate(`/`);
                }}
                style={{ cursor: 'pointer' }}
              />
            </NavbarLogoMenuContainer>
            <CustomButton>Vendedores Inmobiliarios</CustomButton>
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
                background="nav"
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
                background="nav"
              >
                <img src={languageIcon} alt="lenguaje" />
              </CustomSelect>
            </NavbarButtonsContainer>
            <NavbarButtonsContainer>
              <CustomButton
                type="main"
                onClick={() => {
                  navigate(`/${rootPaths.saleRoot}`);
                }}
              >
                Vender
              </CustomButton>
              <PrimaryCustomButton>
                <img src={notificationIcon} alt="lenguaje" />
              </PrimaryCustomButton>
            </NavbarButtonsContainer>

            <NavbarButtonsContainer>
              <CustomButton
                type="main"
                onClick={() => {
                  navigate(
                    `/${rootPaths.authRoot}/${rootPaths.authSimpleRoot}/${rootPaths.loginRoot}`
                  );
                }}
              >
                Iniciar Sesión
              </CustomButton>
              <CustomButton type="secondary">Registrarse</CustomButton>
            </NavbarButtonsContainer>
          </NavbarOptionsContainer>
        </>
      )}
    </NavbarContainer>
  );
}

export default Navbar;
