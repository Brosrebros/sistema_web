import { useEffect, useRef } from 'react';
import {
  NavbarContainer,
  NavbarMainDataContainer,
  NavbarLogoMenuContainer,
  NavbarOptionsContainer,
  NavbarButtonsContainer,
  NavbarExtraButtonsContainer,
} from './NavbarStyles';
import { useState } from 'react';
import CustomSelect from 'components/custom/CustomSelect/CustomSelect';
import navbarLogo from 'assets/img/Sellblink - logo.svg';
import divisaIcon from '../../assets/img/icons/money-change.svg';
import languageIcon from '../../assets/img/icons/global.svg';
import notificationIcon from '../../assets/img/icons/notification.svg';
import menuIcon from '../../assets/img/icons/menu.svg';
import PrimaryCustomButton from 'components/custom/CustomButtons/PrimaryCustomButton/PrimaryCustomButton';
import { useMenu } from '../../menuContext';
import { rootPaths } from 'routes/paths';
import { useNavigate } from 'react-router-dom';
import SecondaryCustomButton from 'components/custom/CustomButtons/SecondaryCustomButton/SecondaryCustomButton';
import Notifications from 'components/custom/Notifications/Notifications';

function Navbar({ type, id }) {
  const { toggleMenu } = useMenu();
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const notificationRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = event => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setIsActive(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
    divisaOptions: divisaOptions[0].value,
    idiomaOptions: idiomaOptions[0].value,
  });

  const handleActive = () => {
    setIsActive(prev => !prev);
  };

  const handleCustomChange = (selectedOption, field) => {
    setFilterForm(prev => ({
      ...prev,
      [field]: selectedOption.value,
    }));
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <NavbarContainer isScrolled={isScrolled}>
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
              <SecondaryCustomButton
                variant="white"
                onClick={() => handleActive()}
                id="desktop"
              >
                {isActive && <Notifications ref={notificationRef} />}
                <img src={notificationIcon} alt="lenguaje" />
              </SecondaryCustomButton>
            </NavbarLogoMenuContainer>

            <SecondaryCustomButton
              variant="white"
              onClick={() => {
                navigate(`/${rootPaths.sellerRoot}`);
              }}
            >
              Vendedores inmobiliarios
            </SecondaryCustomButton>
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
                placeholder="Idioma"
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
              <SecondaryCustomButton
                variant="white"
                onClick={() => handleActive()}
              >
                {isActive && <Notifications ref={notificationRef} />}
                <img src={notificationIcon} alt="lenguaje" />
              </SecondaryCustomButton>
            </NavbarButtonsContainer>
            <NavbarExtraButtonsContainer>
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
              <SecondaryCustomButton
                variant="white"
                onClick={() => {
                  navigate(
                    `/${rootPaths.authRoot}/${rootPaths.authSimpleRoot}/${rootPaths.registerRoot}`
                  );
                }}
              >
                Registrarse
              </SecondaryCustomButton>
            </NavbarExtraButtonsContainer>
          </NavbarOptionsContainer>
        </>
      )}
    </NavbarContainer>
  );
}

export default Navbar;
