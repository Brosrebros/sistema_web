import React from 'react';
import ModalContainer from 'components/custom/ModalContainer/ModalContainer';
import { LoginModalContainer, CloseButton } from './LoginModal.styles';
import AuthFormContainer from 'components/custom/AuthFormContainer/AuthFormContainer';
import LoginForm from 'components/custom/AuthForms/LoginForm/LoginForm';
import { useModal } from 'modalContext';
import closeIcon from 'assets/img/icons/close.svg';

function LoginModal() {
  const { modals, closeModal } = useModal();
  if (!modals.loginModal) return null;

  return (
    <ModalContainer>
      <LoginModalContainer>
        <CloseButton onClick={() => closeModal('loginModal')}>
          <img src={closeIcon} alt="close" />
        </CloseButton>
        <AuthFormContainer authType={'login'}>
          <LoginForm />
        </AuthFormContainer>
      </LoginModalContainer>
    </ModalContainer>
  );
}

export default LoginModal;
