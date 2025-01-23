import React from 'react';
import { CustomInputTextContainer, InputText } from './CustomInputText.styles';

function CustomInputText({placeholder, icon}) {
  return (
    <CustomInputTextContainer>
      <img src={icon} alt="icon" />
      <InputText placeholder={placeholder}/>
    </CustomInputTextContainer>
  );
}

export default CustomInputText;
