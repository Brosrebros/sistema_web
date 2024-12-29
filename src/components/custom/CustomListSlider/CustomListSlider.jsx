import React from 'react';
import { CustomListSliderStyled } from './CustomListSlider.styles';
// import cameraIcon from "../../../assets/icons/"

function CustomListSlider({ children, ...sliderSettings }) {
  return (
    <CustomListSliderStyled {...sliderSettings}>
      {children}
    </CustomListSliderStyled>
  );
}

export default CustomListSlider;
