import React from 'react';
import { SecondaryCustomButtonStyled } from './SecondaryCustomButton.styles';

function SecondaryCustomButton({ children, variant, onClick, id }) {
  return (
    <SecondaryCustomButtonStyled
      type="submit"
      variant={variant}
      onClick={onClick}
      id={id}
    >
      {children}
    </SecondaryCustomButtonStyled>
  );
}

export default SecondaryCustomButton;
