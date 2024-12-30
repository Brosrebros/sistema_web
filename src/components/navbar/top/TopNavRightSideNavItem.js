import React from 'react';
import { useState } from 'react';
import ProfileDropdown from 'components/navbar/top/ProfileDropdown';
import { Nav } from 'react-bootstrap';
import { Col, Button } from 'react-bootstrap';
import icono_de_idioma_gris from 'assets/icons/idioma_gris.svg';
// import icono_de_divisa_gris from "assets/icons/"
import notificacion from 'assets/icons/notificacion.svg';
import CustomSelect from 'components/custom/CustomSelect/CustomSelect';
import SecondaryCustomButton from 'components/custom/CustomButtons/SecondaryCustomButton/SecondaryCustomButton';

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
      style={{ gap: '.8rem' }}
    >
      <div style={{ width: '120px' }}>
        <CustomSelect
          id="divisa"
          name="divisa"
          aria-label="Tipo"
          value="PEN S/."
          onChange={handleCustomChange}
          placeholder="Divisa"
          options={divisaOptions}
          background="nav"
        >
          <img src={icono_de_idioma_gris} width={'16px'} />
        </CustomSelect>
      </div>
      <CustomSelect
        id="idioma"
        name="idioma"
        aria-label="Tipo"
        value="Español"
        onChange={handleCustomChange}
        placeholder="Idioma"
        options={idiomaOptions}
        background="nav"
      >
        <img src={icono_de_idioma_gris} width={'16px'} />
      </CustomSelect>
      <img
        src={notificacion}
        width={'16px'}
        style={{ marginLeft: '5px', marginRight: '15px' }}
      />
      <div>
        <SecondaryCustomButton variant="white">Vender</SecondaryCustomButton>
      </div>

      <ProfileDropdown />
    </Nav>
  );
};

export default TopNavRightSideNavItem;
