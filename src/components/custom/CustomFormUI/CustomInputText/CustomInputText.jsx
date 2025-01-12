import React from 'react';
import { CustomInputTextContainer, InputText } from './CustomInputText.styles';
import searchIcon from '../../../../assets/img/icons/buscar_gris.svg';

function CustomInputText() {
  return (
    <CustomInputTextContainer>
      <img src={searchIcon} alt="search" />
      <InputText placeholder='¿En dónde lo buscas?'/>
    </CustomInputTextContainer>
  );
}

export default CustomInputText;
