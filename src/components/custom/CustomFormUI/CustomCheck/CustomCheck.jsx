import React from 'react';
import { CustomCheckContainer } from './CustomCheck.styles';

function CustomCheck({ label, type, htmlFor }) {
  return (
    <CustomCheckContainer>
      <label htmlFor={htmlFor}>{label}</label>
      <input type={type} id={htmlFor} />
    </CustomCheckContainer>
  );
}

export default CustomCheck;
