import React from 'react';
import ModalContainer from 'components/custom/ModalContainer/ModalContainer';
import { LoginModalContainer, CloseButton } from './LoginModal.styles';
import AuthFormContainer from 'components/custom/AuthFormContainer/AuthFormContainer';
import LoginForm from 'components/custom/AuthForms/LoginForm/LoginForm';
import { useModal } from 'modalContext';
import closeIcon from 'assets/img/icons/close.svg';
import { motion } from 'framer-motion';

function LoginModal() {
  const { modals, closeModal } = useModal();
  if (!modals.loginModal) return null;

  return (
    <ModalContainer>
      <motion.div
        initial={{ y: 1080, opacity: 1 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 1080, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.3, 0.3, 0.6, 1] }}
      >
        <LoginModalContainer onClick={e => e.stopPropagation()}>
          <CloseButton onClick={() => closeModal('loginModal')}>
            <img src={closeIcon} alt="close" />
          </CloseButton>
          <AuthFormContainer authType={'login'}>
            <LoginForm />
          </AuthFormContainer>
        </LoginModalContainer>
      </motion.div>
    </ModalContainer>
  );
}

export default LoginModal;
