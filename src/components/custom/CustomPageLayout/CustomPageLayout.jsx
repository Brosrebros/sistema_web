import React from 'react';
import { CustomPageLayoutStyled } from './CustomPageLayout.styles';

function CustomPageLayout({ children, place }) {
  return (
    <CustomPageLayoutStyled place={place}>{children}</CustomPageLayoutStyled>
  );
}

export default CustomPageLayout;
