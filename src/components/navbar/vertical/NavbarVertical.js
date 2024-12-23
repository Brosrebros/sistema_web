import React, { useEffect, Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Nav, Navbar, Row, Col } from 'react-bootstrap';
import { navbarBreakPoint, topNavbarBreakpoint } from 'config';
import Flex from 'components/common/Flex';
import Logo from 'components/common/Logo';
import NavbarVerticalMenu from './NavbarVerticalMenu';
import ToggleButton from './ToggleButton';
import routes from 'routes/siteMaps';
import { capitalize } from 'helpers/utils';
import NavbarTopDropDownMenus from 'components/navbar/top/NavbarTopDropDownMenus';
import PurchaseCard from './PurchaseCard';
import bgNavbar from 'assets/img/generic/bg-navbar.png';
import { useAppContext } from 'providers/AppProvider';
import styles from 'styles.module.css';
import CustomSelect from 'components/custom/CustomSelect/CustomSelect';

const vendedoresOptions = [
  { value: 'Dueño directo', label: 'Dueño directo' },
  { value: 'Agente inmobiliario', label: 'Agente inmobiliario' },
  {
    value: 'Constructora o desarrolladora',
    label: 'Constructora o desarrolladora',
  },
];

const NavbarVertical = () => {
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

  const {
    config: {
      navbarPosition,
      navbarStyle,
      isNavbarVerticalCollapsed,
      showBurgerMenu,
    },
  } = useAppContext();

  const HTMLClassList = document.getElementsByTagName('html')[0].classList;

  useEffect(() => {
    if (isNavbarVerticalCollapsed) {
      HTMLClassList.add('navbar-vertical-collapsed');
    } else {
      HTMLClassList.remove('navbar-vertical-collapsed');
    }
    return () => {
      HTMLClassList.remove('navbar-vertical-collapsed-hover');
    };
  }, [isNavbarVerticalCollapsed, HTMLClassList]);

  //Control mouseEnter event
  let time = null;
  const handleMouseEnter = () => {
    if (isNavbarVerticalCollapsed) {
      time = setTimeout(() => {
        HTMLClassList.add('navbar-vertical-collapsed-hover');
      }, 100);
    }
  };
  const handleMouseLeave = () => {
    clearTimeout(time);
    HTMLClassList.remove('navbar-vertical-collapsed-hover');
  };

  const NavbarLabel = ({ label }) => (
    <Nav.Item as="p">
      <Row className="mt-1 navbar-vertical-label-wrapper prinnnn">
        <Col
          xs="auto"
          className="navbar-vertical-label navbar-vertical-label"
          style={{ marginLeft: '8px' }}
        >
          {label}
        </Col>
      </Row>
    </Nav.Item>
  );

  return (
    <Navbar
      expand={navbarBreakPoint}
      className={classNames('navbar-vertical', {
        [`navbar-${navbarStyle}`]: navbarStyle !== 'transparent',
      })}
      variant="light"
      style={{ zIndex: 1022 }}
    >
      <Flex alignItems="center" className={'py-0'}>
        <ToggleButton/>
        <Logo at="navbar-vertical" textClass="text-primary" width={40} />
        <CustomSelect
          id="vendedoresInmobiliarios"
          name="vendedoresInmobiliarios"
          aria-label="Vendedores Inmobiliarios"
          value={filterForm.vendedoresOptions}
          onChange={handleCustomChange}
          placeholder="Vendedores Inmobiliarios"
          options={vendedoresOptions}
          background="nav"
          size="large"
        />
      </Flex>
      <Navbar.Collapse
        in={showBurgerMenu}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={'ms-0 ps-0 ' + styles['red-background']}
        style={{
          backgroundImage:
            navbarStyle === 'vibrant'
              ? `linear-gradient(-45deg, rgba(0, 160, 255, 0.86), #0048a2),url(${bgNavbar})`
              : 'none',
          marginTop: '0',
          backgroundColor: '#940000',
        }}
      >
        <div
          className="navbar-vertical-content scrollbar"
          style={{
            marginLeft: '0',
          }}
        >
          <Nav className="flex-column" as="ul">
            {routes.map(route => (
              <Fragment key={route.label}>
                {!route.labelDisable && (
                  <NavbarLabel label={capitalize(route.label)} />
                )}
                <NavbarVerticalMenu routes={route.children} />
                <hr className="mb-0 navbar-vertical-divider"></hr>
              </Fragment>
            ))}
          </Nav>
          <>
            {navbarPosition === 'combo' && (
              <div className={`d-${topNavbarBreakpoint}-none`}>
                <div className="navbar-vertical-divider">
                  <hr className="navbar-vertical-hr my-2" />
                </div>
                <Nav navbar>
                  <NavbarTopDropDownMenus />
                </Nav>
              </div>
            )}
            <PurchaseCard />
          </>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

NavbarVertical.propTypes = {
  label: PropTypes.string,
};

export default NavbarVertical;
