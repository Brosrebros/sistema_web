import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav } from 'react-bootstrap';
import classNames from 'classnames';
import Logo from 'components/common/Logo';
// import SearchBox from './SearchBox';
import NavbarTopDropDownMenus from './NavbarTopDropDownMenus';
import { navbarBreakPoint, topNavbarBreakpoint } from 'config';
// import autoCompleteInitialItem from 'data/autocomplete/autocomplete';
import TopNavRightSideNavItem from './TopNavRightSideNavItem';
import { useLocation } from 'react-router-dom';
import { useAppContext } from 'providers/AppProvider';
import CustomSelect from 'components/custom/CustomSelect/CustomSelect';

const vendedoresOptions = [
  { value: 'Dueño directo', label: 'Dueño directo' },
  { value: 'Agente inmobiliario', label: 'Agente inmobiliario' },
  {
    value: 'Constructora o desarrolladora',
    label: 'Constructora o desarrolladora',
  },
];

const NavbarTop = () => {
  const {
    config: { showBurgerMenu, navbarPosition, navbarCollapsed },
    setConfig,
  } = useAppContext();

  const { pathname } = useLocation();
  const isChat = pathname.includes('chat');

  const [showDropShadow, setShowDropShadow] = useState(false);
  const [filterForm, setFilterForm] = useState({
    tipoPropiedad: '',
    // Agregar otros campos si es necesario
  });

  const handleBurgerMenu = () => {
    (navbarPosition === 'top' || navbarPosition === 'double-top') &&
      setConfig('navbarCollapsed', !navbarCollapsed);
    (navbarPosition === 'vertical' || navbarPosition === 'combo') &&
      setConfig('showBurgerMenu', !showBurgerMenu);
  };

  const setDropShadow = () => {
    const el = document.documentElement;
    if (el.scrollTop > 0) {
      setShowDropShadow(true);
    } else {
      setShowDropShadow(false);
    }
  };

  const handleCustomChange = e => {
    const { name, value } = e.target;
    setFilterForm(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    window.addEventListener('scroll', setDropShadow);
    return () => window.removeEventListener('scroll', setDropShadow);
  }, []);

  const burgerMenuRef = useRef();

  return (
    <Navbar
      className={classNames(
        'navbar-glass fs-10 navbar-top sticky-kit py-1 nazi',
        {
          // 'navbar-glass-shadow': showDropShadow
          'navbar-glass-shadow': showDropShadow && !isChat,
        }
      )}
      style={{
        minHeight: 'fit-content',
        height: 'fit-content',
      }}
      expand={
        navbarPosition === 'top' ||
        navbarPosition === 'combo' ||
        navbarPosition === 'double-top'
          ? topNavbarBreakpoint
          : true
      }
    >
      <CustomSelect
        id="vendedoresInmobiliarios"
        name="vendedoresInmobiliarios"
        aria-label="Vendedores Inmobiliarios"
        value={filterForm.vendedoresOptions}
        onChange={handleCustomChange}
        placeholder="Vendedores Inmobiliarios"
        options={vendedoresOptions}
        background="nav"
      />

      {navbarPosition === 'double-top' ? (
        <div className="w-100">
          <div className="d-flex flex-between-center">
            <NavbarTopElements
              navbarCollapsed={navbarCollapsed}
              navbarPosition={navbarPosition}
              handleBurgerMenu={handleBurgerMenu}
              burgerMenuRef={burgerMenuRef}
            />
          </div>
          <hr className="my-2 d-none d-lg-block" />
          <Navbar.Collapse in={navbarCollapsed} className="scrollbar py-2">
            <Nav navbar>
              <NavbarTopDropDownMenus />
            </Nav>
          </Navbar.Collapse>
        </div>
      ) : (
        <NavbarTopElements
          navbarCollapsed={navbarCollapsed}
          navbarPosition={navbarPosition}
          handleBurgerMenu={handleBurgerMenu}
          burgerMenuRef={burgerMenuRef}
        />
      )}
    </Navbar>
  );
};

const NavbarTopElements = ({
  navbarPosition,
  handleBurgerMenu,
  navbarCollapsed,
}) => {
  const burgerMenuRef = useRef();
  return (
    <>
      <Navbar.Toggle
        ref={burgerMenuRef}
        className={classNames('toggle-icon-wrapper me-md-3 me-2', {
          'd-lg-none':
            navbarPosition === 'top' || navbarPosition === 'double-top',
          [`d-${navbarBreakPoint}-none`]:
            navbarPosition === 'vertical' || navbarPosition === 'combo',
        })}
        as="div"
      >
        <button
          className="navbar-toggler-humburger-icon btn btn-link d-flex flex-center"
          onClick={handleBurgerMenu}
          id="burgerMenu"
        >
          <span className="navbar-toggle-icon">
            <span className="toggle-line" />
          </span>
        </button>
      </Navbar.Toggle>

      <Logo at="navbar-top" textClass="text-primary" width={40} id="topLogo" />

      {navbarPosition === 'top' || navbarPosition === 'combo' ? (
        <Navbar.Collapse
          in={navbarCollapsed}
          className="scrollbar pb-3 pb-lg-0"
        >
          <Nav navbar>
            <NavbarTopDropDownMenus />
          </Nav>
        </Navbar.Collapse>
      ) : (
        <Nav
          navbar
          className={`align-items-center d-none d-${topNavbarBreakpoint}-block`}
          as="ul"
        >
          {/* <Nav.Item as="li">
            <SearchBox autoCompleteItem={autoCompleteInitialItem} />
          </Nav.Item> */}
        </Nav>
      )}
      <TopNavRightSideNavItem />
    </>
  );
};

NavbarTopElements.propTypes = {
  navbarPosition: PropTypes.string,
  handleBurgerMenu: PropTypes.func,
  navbarCollapsed: PropTypes.bool,
};
export default NavbarTop;
