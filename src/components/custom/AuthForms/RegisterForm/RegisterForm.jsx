import React from 'react';
import {
  RegisterFormContainer,
  RegisterInputContainer,
  RegisterDataContainer,
} from './RegisterForm.styles';
import CustomInputText from 'components/custom/CustomFormUI/CustomInput/CustomInput';
import PrimaryCustomButton from 'components/custom/CustomButtons/PrimaryCustomButton/PrimaryCustomButton';

function RegisterForm() {
  return (
    <RegisterFormContainer>
      <h3>Iniciar sesión</h3>
      <div>
        <RegisterDataContainer>
          <h4>Datos personales</h4>
          <RegisterInputContainer>
            <CustomInputText placeholder="Nombres" type='text'/>
            <CustomInputText placeholder="Apellidos" type='text'/>
            <CustomInputText placeholder="Documento de identidad (DNI/RUC/Pasasporte)" type='number'/>
            <CustomInputText placeholder="Correo electrónico" type='email'/>
            <CustomInputText placeholder="N° de Teléfono" type='number'/>
          </RegisterInputContainer>
        </RegisterDataContainer>

        <RegisterDataContainer>
          <h4>Datos de la cuenta</h4>
          <RegisterInputContainer>
            <CustomInputText placeholder="Nombre de usuario" type='text'/>
            <CustomInputText placeholder="Contraseña" type='password-hidden'/>
            <CustomInputText placeholder="Confirmar contraseña" type='password-hidden'/>
          </RegisterInputContainer>
        </RegisterDataContainer>
        <PrimaryCustomButton>Registrarse</PrimaryCustomButton>
      </div>
    </RegisterFormContainer>
  );
}

export default RegisterForm;
