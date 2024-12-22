import React from 'react';
import { CustomLabelStyled } from './CustomLabel.styles';

function CustomLabel({ children }) {
  return <CustomLabelStyled>{children}</CustomLabelStyled>;
}

export default CustomLabel;
