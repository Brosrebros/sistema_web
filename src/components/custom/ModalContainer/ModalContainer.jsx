import React from 'react';
import { ModalContainerStyled } from './ModalContainer.styles';

function ModalContainer({ children }) {
  return <ModalContainerStyled>{children}</ModalContainerStyled>;
}

export default ModalContainer;
