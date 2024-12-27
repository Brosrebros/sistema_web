import React from 'react';
import { CustomSliderButtonStyled } from './CustomSliderButton.styles';

function CustomSliderButton({ children, ...sliderSettings }) {
  return (
    <CustomSliderButtonStyled {...sliderSettings}>
      {children}
    </CustomSliderButtonStyled>
  );
}

export default CustomSliderButton;
