import React from 'react';
import { CustomListSliderStyled } from './CustomListSlider.styles';

function CustomListSlider({ children, onClick, id, ...sliderSettings }) {
  return (
    <CustomListSliderStyled {...sliderSettings} onClick={onClick} id={id}>
      {children}
    </CustomListSliderStyled>
  );
}

export default CustomListSlider;
