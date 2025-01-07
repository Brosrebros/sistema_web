import React, { useState } from 'react';
import ProfileDropdown from 'components/navbar/top/ProfileDropdown';
import { Nav } from 'react-bootstrap';
import icono_de_idioma_gris from 'assets/icons/idioma_gris.svg';
import icono_de_divisa_gris from "../../../assets/img/icons/alerta_gris.svg"
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
    divisa: divisaOptions[0].value,
    idioma: idiomaOptions[0].value,
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
        placeholder='Divisa'
      >
        <img src={icono_de_divisa_gris} width={'16px'} alt="divisa-icon" />
      </CustomSelect>

      <CustomSelect
        id="idioma"
        name="idioma"
        aria-label="Idioma"
        value={filterForm.idioma}
        onChange={e => handleCustomChange('idioma', e.target.value)}
        options={idiomaOptions}
        background="nav"
        placeholder="Idioma"
      >
        <img src={icono_de_idioma_gris} width={'16px'} alt="idioma-icon" />
      </CustomSelect>

      <img
        src={notificacion}
        width={'16px'}
        style={{ marginLeft: '5px', marginRight: '15px' }}
        alt="notificacion-icon"
      />
      
      <div>
        <SecondaryCustomButton variant="white">Vender</SecondaryCustomButton>
      </div>

      <ProfileDropdown />
    </Nav>
  );
};

export default TopNavRightSideNavItem;
