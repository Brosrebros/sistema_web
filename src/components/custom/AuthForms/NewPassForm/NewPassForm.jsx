import {
  NewPassFormContainer,
  NewPassInputContainer,
} from './NewPassForm.styles';
import CustomInput from 'components/custom/CustomFormUI/CustomInput/CustomInput';
import PrimaryCustomButton from 'components/custom/CustomButtons/PrimaryCustomButton/PrimaryCustomButton';

function NewPassForm() {
  return (
    <NewPassFormContainer>
      <h3>Nueva contraseña</h3>
      <div>
        <NewPassInputContainer>
          <CustomInput placeholder="Contraseña" type="password" />
          <CustomInput placeholder="Confirmar contraseña" type="password" />
        </NewPassInputContainer>
        <PrimaryCustomButton>Reiniciar contraseña</PrimaryCustomButton>
      </div>
    </NewPassFormContainer>
  );
}

export default NewPassForm;
