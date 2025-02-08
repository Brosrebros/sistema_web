import React, { useState } from 'react';
import {
  ProcessFormContainer,
  DataContainer,
  CounterContainer,
} from './ProcessForm.styles';
import CustomSelect from '../CustomSelect/CustomSelect';
import PrimaryCustomButton from '../CustomButtons/PrimaryCustomButton/PrimaryCustomButton';
import SecondaryCustomButton from '../CustomButtons/SecondaryCustomButton/SecondaryCustomButton';
import StepOne from './step-1/StepOne';
import StepTwo from './step-2/StepTwo';

function ProcessForm() {
  const [activeStep, setActiveStep] = useState(1);

  const handleStep = () => {
    setActiveStep(prev => prev + 1);
  };

  return (
    <ProcessFormContainer>
      <h3>Hola Gabriel, ¡Comencemos a crear tu anuncio!</h3>

      {activeStep === 1 ? (
        <StepOne part="one" />
      ) : activeStep === 2 ? (
        <StepOne part="two" />
      ) : activeStep === 3 ? (
        <StepTwo />
      ) : activeStep === 4 ? (
        <></>
      ) : null}

      <div>
        <SecondaryCustomButton>Guardar y salir</SecondaryCustomButton>
        <PrimaryCustomButton onClick={handleStep}>
          Continuar
        </PrimaryCustomButton>
      </div>
    </ProcessFormContainer>
  );
}

export default ProcessForm;
