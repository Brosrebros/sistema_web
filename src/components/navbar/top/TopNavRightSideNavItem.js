import React from 'react';
import { useState } from 'react';
// import CartNotification from 'components/navbar/top/CartNotification';
import ProfileDropdown from 'components/navbar/top/ProfileDropdown';
import { Nav } from 'react-bootstrap';
// import NineDotMenu from './NineDotMenu';
// import ThemeControlDropdown from './ThemeControlDropdown';
import { Col, Button } from 'react-bootstrap';
import icono_de_idioma_rojo from 'assets/icons/idioma_gris.svg';
import notificacion from 'assets/icons/notificacion.svg';
import CustomSelect from 'components/custom/CustomSelect/CustomSelect';

const idiomaOptions = [
  { value: 'Español', label: 'Español' },
  { value: 'Ingles', label: 'Ingles' },
  { value: 'Chino', label: 'Chino' },
];

const TopNavRightSideNavItem = () => {
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
    <Nav
      navbar
      className="navbar-nav-icons ms-auto flex-row align-items-center"
      as="ul"
    >
      <Col className="px-2">
        <CustomSelect
          id="idioma"
          name="idioma"
          aria-label="Tipo"
          value={filterForm.idiomaOptions}
          onChange={handleCustomChange}
          placeholder="Idioma"
          options={idiomaOptions}
          background="nav"
        >
          <img src={icono_de_idioma_rojo} width={'16px'} />
        </CustomSelect>
      </Col>
      <img
        src={notificacion}
        width={'16px'}
        style={{ marginLeft: '5px', marginRight: '15px' }}
      />
      {/* <NotificationDropdown /> */}

      <Button
        type="submit"
        // variant="gray"
        style={{
          fontFamily: 'Aptos_display',
          backgroundColor: 'white',
          color: '#6d6d6d',
          marginRight: '10px',
          border: 'transparent',
        }}
      >
        Vender
      </Button>

      <ProfileDropdown />
    </Nav>
  );
};

export default TopNavRightSideNavItem;
