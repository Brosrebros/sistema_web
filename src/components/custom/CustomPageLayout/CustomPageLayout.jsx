import React from 'react';
import { CustomPageLayoutStyled } from './CustomPageLayout.styles';

function CustomPageLayout({ children }) {
  return <CustomPageLayoutStyled>{children}</CustomPageLayoutStyled>;
}

export default CustomPageLayout;
