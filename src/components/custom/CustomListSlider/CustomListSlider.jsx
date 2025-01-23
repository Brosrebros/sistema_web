import React from 'react';
import { CustomListSliderStyled } from './CustomListSlider.styles';

function CustomListSlider({ children, onClick, ...sliderSettings }) {
  return (
    <CustomListSliderStyled {...sliderSettings} onClick={onClick}>
      {children}
    </CustomListSliderStyled>
  );
}

export default CustomListSlider;
