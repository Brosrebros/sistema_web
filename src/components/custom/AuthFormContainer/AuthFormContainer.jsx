import React from 'react';
import {
  AnotherOptionContainer,
  TextContainer,
  AuthFormContainerStyled,
  ButtonsContainer,
  Separator,
} from './AuthFormContainer.styles';

import SecondaryCustomButton from '../CustomButtons/SecondaryCustomButton/SecondaryCustomButton';
import googleIcon from '../../../assets/img/icons/Google.svg';
import appleIcon from '../../../assets/img/icons/Apple.svg';
import Logo from 'assets/img/Sellblink - logo.svg';

import { useNavigate } from 'react-router-dom';
import { rootPaths } from 'routes/paths';

function AuthFormContainer({ children, authType }) {
  const navigate = useNavigate();

  return (
    <AuthFormContainerStyled>
      <img src={Logo} alt="Sellblink" />
      <TextContainer>
        {authType === 'login' ? (
          <>
            <h4>Conecta, compra y crece con el mundo.</h4>
            <p>
              Conéctate al futuro de los negocios. Gestiona, invierte y crece
              con Organización Sánchez.
            </p>
          </>
        ) : (
          <>
            <h4>Únete a Sellblink y expande tus oportunidades</h4>
            <p id="register">
              Regístrate y accede a un ecosistema de oportunidades. Todo lo que
              necesitas para crecer está aquí.
            </p>
          </>
        )}
      </TextContainer>
      <ButtonsContainer>
        <SecondaryCustomButton>
          <img src={googleIcon} alt="google" />
          Iniciar sesión con Google
        </SecondaryCustomButton>
        <SecondaryCustomButton>
          <img src={appleIcon} alt="apple" />
          Iniciar sesión con Apple
        </SecondaryCustomButton>
      </ButtonsContainer>
      <Separator>
        <span></span>
        <p>O también puedes</p>
        <span></span>
      </Separator>
      {children}
      {authType === 'login' ? (
        <AnotherOptionContainer>
          <p>¿Eres nuevo en Sellblink?</p>
          <SecondaryCustomButton
            onClick={() => {
              navigate(
                `/${rootPaths.authRoot}/${rootPaths.authSimpleRoot}/${rootPaths.registerRoot}`
              );
            }}
          >
            Crea tu cuenta
          </SecondaryCustomButton>
        </AnotherOptionContainer>
      ) : (
        <AnotherOptionContainer>
          <p>¿Ya tienes una cuenta?</p>
          <SecondaryCustomButton
            onClick={() => {
              navigate(
                `/${rootPaths.authRoot}/${rootPaths.authSimpleRoot}/${rootPaths.loginRoot}`
              );
            }}
          >
            Iniciar sesión
          </SecondaryCustomButton>
        </AnotherOptionContainer>
      )}
    </AuthFormContainerStyled>
  );
}

export default AuthFormContainer;
