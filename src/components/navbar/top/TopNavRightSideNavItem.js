import React, { useState } from 'react';
import ProfileDropdown from 'components/navbar/top/ProfileDropdown';
import { Nav } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import icono_de_idioma_gris from 'assets/icons/idioma_gris.svg';
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
    divisa: divisaOptions[0].value,  // Selecciona PEN por defecto
    idioma: idiomaOptions[0].value,  // Selecciona Español por defecto
  });

  const handleCustomChange = (name, value) => {
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
      <CustomSelect
        id="divisa"
        name="divisa"
        aria-label="Divisa"
        value={filterForm.divisa}
        onChange={e => handleCustomChange('divisa', e.target.value)}
        options={divisaOptions}
        background="nav"
      >
        <img src={icono_de_idioma_gris} width={'16px'} alt="divisa-icon" />
      </CustomSelect>

      <Col className="px-2">
        <CustomSelect
          id="idioma"
          name="idioma"
          aria-label="Idioma"
          value={filterForm.idioma}
          onChange={e => handleCustomChange('idioma', e.target.value)}
          options={idiomaOptions}
          background="nav"
        >
          <img src={icono_de_idioma_gris} width={'16px'} alt="idioma-icon" />
        </CustomSelect>
      </Col>

      <img
        src={notificacion}
        width={'16px'}
        style={{ marginLeft: '5px', marginRight: '15px' }}
        alt="notificacion-icon"
      />

      <SecondaryCustomButton variant="white">
        Vender
      </SecondaryCustomButton>

      <ProfileDropdown />
    </Nav>
  );
};

export default TopNavRightSideNavItem;
