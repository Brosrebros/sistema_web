import { ResetFormContainer, ButtonContainer } from './ResetForm.styles';
import CustomInput from 'components/custom/CustomFormUI/CustomInput/CustomInput';
import PrimaryCustomButton from 'components/custom/CustomButtons/PrimaryCustomButton/PrimaryCustomButton';

function ResetForm() {
  return (
    <ResetFormContainer>
      <h3>Recuperar cuenta</h3>
      <div>
        <CustomInput placeholder="Correo electrónico" type="email" />
        <ButtonContainer>
          <PrimaryCustomButton >Enviar código</PrimaryCustomButton>
          <p>
            Al continuar, aceptas las <u>Condiciones de uso</u> y el{' '}
            <u>Aviso de privacidad</u> de Sellblink.
          </p>
        </ButtonContainer>
      </div>
    </ResetFormContainer>
  );
}

export default ResetForm;
