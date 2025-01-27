import React from 'react';
import {
  LoginFormContainer,
  LoginInputContainer,
  ButtonContainer,
} from './LoginForm.styles';
import CustomInput from 'components/custom/CustomFormUI/CustomInput/CustomInput';
import PrimaryCustomButton from 'components/custom/CustomButtons/PrimaryCustomButton/PrimaryCustomButton';
import { useNavigate } from 'react-router-dom';
import { rootPaths } from 'routes/paths';

function LoginForm() {

  return (
    <LoginFormContainer>
      <h3>Iniciar sesión</h3>
      <div>
        <LoginInputContainer>
          <CustomInput placeholder="Correo electrónico" type="email" />
          <CustomInput placeholder="Password" type="password" />
          <a>¿Olvidaste tu contraseña?</a>
        </LoginInputContainer>
        <ButtonContainer>
          <PrimaryCustomButton

          >
            Iniciar sesión
          </PrimaryCustomButton>
          <p>
            Al continuar, aceptas las <u>Condiciones de uso</u> y el
            <u>Aviso de privacidad</u> de Organización Sanchez
          </p>
        </ButtonContainer>
      </div>
    </LoginFormContainer>
  );
}

export default LoginForm;
