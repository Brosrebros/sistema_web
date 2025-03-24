import { ResetFormContainer, ButtonContainer } from './ResetForm.styles';
import CustomInput from 'components/custom/CustomFormUI/CustomInput/CustomInput';
import PrimaryCustomButton from 'components/custom/CustomButtons/PrimaryCustomButton/PrimaryCustomButton';
import { useNavigate } from 'react-router-dom';
import { rootPaths } from 'routes/paths';

function ResetForm() {
  const navigate = useNavigate();

  return (
    <ResetFormContainer>
      <h3>Recuperar cuenta</h3>
      <div>
        <CustomInput placeholder="Correo electrónico" type="email" />
        <ButtonContainer>
          <PrimaryCustomButton
            onClick={() => {
              navigate(
              `/${rootPaths.authRoot}/${rootPaths.authSimpleRoot}/${rootPaths.sentRoot}`
              );
            }}
          >
            Enviar código
          </PrimaryCustomButton>
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
