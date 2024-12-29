import React from 'react';
import { SecondaryCustomButtonStyled } from './SecondaryCustomButton.styles';

function SecondaryCustomButton({ children, variant, onClick }) {
  return (
    <SecondaryCustomButtonStyled
      type="submit"
      variant={variant}
      onClick={onClick}
    >
      {children}
    </SecondaryCustomButtonStyled>
  );
}

export default SecondaryCustomButton;
