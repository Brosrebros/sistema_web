import React, { useState } from 'react';
import {
  SellerFormContainer,
  OptionsContainer,
  Option,
} from './SellerForm.styles';

import CustomInputText from '../CustomFormUI/CustomInput/CustomInput';
import CustomSelect from '../CustomSelect/CustomSelect';
import PrimaryCustomButton from '../CustomButtons/PrimaryCustomButton/PrimaryCustomButton';
import sortIcon from '../../../assets/img/icons/sort.svg';
import lupaIcon from '../../../assets/img/icons/search-white.svg';
import lupaIconGray from '../../../assets/img/icons/search-normal.svg';
import locationIcon from "../../../assets/img/icons/location.svg"

function SellerForm() {
  const [isActive, setIsActive] = useState('opcion-1');

  const handleActiveButton = button => {
    setIsActive(button);
  };

  const ordenarPorOptions = [
    { value: 'Mayor a menor precio', label: 'Mayor a menor precio' },
    { value: 'Menor a mayor precio', label: 'Menor a mayor precio' },
  ];

  return (
    <SellerFormContainer>
      <OptionsContainer>
        <Option
          onClick={() => handleActiveButton('opcion-1')}
          isActive={isActive === 'opcion-1'}
        >
          Inmobiliaria
        </Option>
        <Option
          onClick={() => handleActiveButton('opcion-2')}
          isActive={isActive === 'opcion-2'}
        >
          Agente inmobiliario
        </Option>
        <Option
          onClick={() => handleActiveButton('opcion-3')}
          isActive={isActive === 'opcion-3'}
        >
          Dueño directo
        </Option>
      </OptionsContainer>
      <CustomInputText placeholder="Buscar" icon={lupaIconGray} />
      <CustomInputText placeholder="¿En dónde lo buscas?" icon={locationIcon} />
      <CustomSelect
        id="tipoPropiedad"
        name="tipoPropiedad"
        aria-label="Tipo"
        value="tipoPropiedad"
        placeholder="Ordenar por"
        options={ordenarPorOptions}
        background="form"
      >
        <img src={sortIcon} alt="type" />
      </CustomSelect>
      <PrimaryCustomButton>
        <img src={lupaIcon} alt="search" />
        Buscar
      </PrimaryCustomButton>
    </SellerFormContainer>
  );
}

export default SellerForm;
