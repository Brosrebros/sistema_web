import React from 'react';
import { motion } from 'framer-motion';
import { ModalContainerStyled } from './ModalContainer.styles';
import { useModal } from 'modalContext';

function ModalContainer({ children }) {
  const { closeModal } = useModal();

  return (
    <ModalContainerStyled onClick={closeModal}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="modal-backdrop"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background:"rgba(22, 22, 22, 0.5)"
        }}
      >
        {children}
      </motion.div>
    </ModalContainerStyled>
  );
}

export default ModalContainer;
