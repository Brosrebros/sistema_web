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
      {authType === 'reset' ||
      authType === 'sent' ||
      authType === 'new-pass' ? null : (
        <img src={Logo} alt="Sellblink" />
      )}
      <TextContainer>
        {authType === 'login' ? (
          <>
            <h4>Conecta, compra y crece con el mundo.</h4>
            <p>
              Conéctate al futuro de los negocios. Gestiona, invierte y crece
              con Organización Sánchez.
            </p>
          </>
        ) : authType === 'register' ? (
          <>
            <h4>Únete a Sellblink y expande tus oportunidades</h4>
            <p id="start">
              Regístrate y accede a un ecosistema de oportunidades. Todo lo que
              necesitas para crecer está aquí.
            </p>
          </>
        ) : authType === 'reset' ? (
          <>
            <h4 id="mobile">Olvidé mi contraseña</h4>
            <p id="start">
              Ingresa tu correo electrónico y te enviaremos un código de
              verificación para restablecer tu contraseña de forma segura.
            </p>
          </>
        ) : authType === 'sent' ? (
          <>
            <h4 id="start">¡Correo enviado con exito!</h4>
            <p id="start">
              Hemos enviado un código de verificación a{' '}
              <b>gabrielm@hotmail.com.</b> Revisa tu bandeja de entrada y sigue
              las instrucciones para restablecer tu contraseña.
            </p>
          </>
        ) : authType === 'new-pass' ? (
          <>
            <h4 id="mobile">Crea una nueva contraseña</h4>
            <p id="start">
              Ingresa una nueva contraseña segura y diferente a la anterior para
              proteger tu cuenta. Asegúrate de que cumpla con los requisitos de
              seguridad.
            </p>
          </>
        ) : null}
      </TextContainer>
      {authType === 'reset' ||
      authType === 'sent' ||
      authType === 'new-pass' ? null : (
        <>
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
        </>
      )}

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
      ) : authType === 'new-pass' ? null : (
        <AnotherOptionContainer>
          {authType === 'reset' ? (
            <p>¿Recordaste la contraseña? </p>
          ) : authType === 'sent' ? (
            <p>¿No recibiste el correo electrónico?</p>
          ) : (
            <p>¿Ya tienes una cuenta?</p>
          )}
          <SecondaryCustomButton
            onClick={() => {
              navigate(
                `/${rootPaths.authRoot}/${rootPaths.authSimpleRoot}/${rootPaths.loginRoot}`
              );
            }}
          >
            {authType === 'sent'
              ? 'Reenviar correo electrónico'
              : 'Iniciar sesión'}
          </SecondaryCustomButton>
        </AnotherOptionContainer>
      )}
    </AuthFormContainerStyled>
  );
}

export default AuthFormContainer;
