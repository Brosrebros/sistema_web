import React from 'react';
import { SecondaryCustomButtonStyled } from './SecondaryCustomButton.styles';

function SecondaryCustomButton({ children }) {
  return (
    <SecondaryCustomButtonStyled type="submit">
      {children}
    </SecondaryCustomButtonStyled>
  );
}

export default SecondaryCustomButton;
