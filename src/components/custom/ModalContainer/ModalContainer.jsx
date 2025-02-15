import React from 'react';
import { ModalContainerStyled } from './ModalContainer.styles';
import { useModal } from 'modalContext';

function ModalContainer({ children }) {
  const { closeModal } = useModal();
  return (
    <ModalContainerStyled onClick={closeModal}>{children}</ModalContainerStyled>
  );
}

export default ModalContainer;
