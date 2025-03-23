import React from 'react';
import {
  RegisterFormContainer,
  RegisterInputContainer,
  RegisterDataContainer,
} from './RegisterForm.styles';
import CustomInput from 'components/custom/CustomFormUI/CustomInput/CustomInput';
import PrimaryCustomButton from 'components/custom/CustomButtons/PrimaryCustomButton/PrimaryCustomButton';

function RegisterForm() {
  return (
    <RegisterFormContainer>
      <h3>Crear usuario</h3>
      <div>
        <RegisterDataContainer>
          <h4>Datos personales</h4>
          <RegisterInputContainer>
            <CustomInput placeholder="Nombres" type="text" />
            <CustomInput placeholder="Apellidos" type="text" />
            <CustomInput
              placeholder="Documento de identidad (DNI/RUC/Pasasporte)"
              type="text"
            />
            <CustomInput placeholder="Correo electrónico" type="email" />
            <CustomInput placeholder="N° de Teléfono" type="text" />
          </RegisterInputContainer>
        </RegisterDataContainer>

        <RegisterDataContainer>
          <h4>Datos de la cuenta</h4>
          <RegisterInputContainer>
            <CustomInput placeholder="Nombre de usuario" type="text" />
            <CustomInput placeholder="Contraseña" type="password-hidden" />
            <CustomInput
              placeholder="Confirmar contraseña"
              type="password-hidden"
            />
          </RegisterInputContainer>
        </RegisterDataContainer>
        <PrimaryCustomButton>Registrarse</PrimaryCustomButton>
        <p>
          Al continuar, aceptas las <u>Condiciones de uso</u>y el{' '}
          <u>Aviso de privacidad</u>{' '}
          de Sellblink
        </p>
      </div>
    </RegisterFormContainer>
  );
}

export default RegisterForm;
