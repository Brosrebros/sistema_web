import React from 'react';
import {
  CustomSupportBannerStyled,
  CustomSupportBannerTitle,
} from './CustomSupportBanner.styles';
import PageLogo from '../../../assets/img/icons/logodelapagina_blanco.svg';
import CustomSelect from '../CustomSelect/CustomSelect';
import icono_de_idioma_gris from '../../../assets/icons/idioma_gris.svg';
import { useState } from 'react';

function CustomSupportBanner() {
  const idiomaOptions = [
    { value: 'Español', label: 'Español' },
    { value: 'Ingles', label: 'Ingles' },
    { value: 'Chino', label: 'Chino' },
  ];

  const [filterForm, setFilterForm] = useState({
    tipoPropiedad: '',
  });

  const handleCustomChange = e => {
    console.log(e.target);
    const { name, value } = e.target;
    setFilterForm(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <CustomSupportBannerStyled>
      <CustomSupportBannerTitle>
        <a href="/">
          <img src={PageLogo} alt="logo" />
        </a>
        <h2>Soporte</h2>
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
          <img src={icono_de_idioma_gris} width={'16px'} />
        </CustomSelect>
      </CustomSupportBannerTitle>
    </CustomSupportBannerStyled>
  );
}

export default CustomSupportBanner;
