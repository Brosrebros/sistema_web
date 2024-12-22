import React from 'react';
import { CustomCounterStyled } from './CustomCounter.styles';

function CustomCounter({ children }) {
  return <CustomCounterStyled>{children}</CustomCounterStyled>;
}

export default CustomCounter;
