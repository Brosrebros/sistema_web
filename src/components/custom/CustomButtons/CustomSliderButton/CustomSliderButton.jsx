import React, { useState } from 'react';
import { CustomSliderButtonStyled } from './CustomSliderButton.styles';

function CustomSliderButton({ children, ...sliderSettings }) {
  const [isVisible, setIsVisible] = useState(false);

  const handleIsVisible = () => {
    setIsVisible(prev => !prev);
  };

  return (
    <CustomSliderButtonStyled {...sliderSettings}>
      {children}
    </CustomSliderButtonStyled>
  );
}

export default CustomSliderButton;
