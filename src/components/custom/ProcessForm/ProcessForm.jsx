import React, { useState } from 'react';
import { ProcessFormContainer } from './ProcessForm.styles';
import PrimaryCustomButton from '../CustomButtons/PrimaryCustomButton/PrimaryCustomButton';
import SecondaryCustomButton from '../CustomButtons/SecondaryCustomButton/SecondaryCustomButton';
import StepOne from './step-1/StepOne';
import StepTwo from './step-2/StepTwo';
import StepThree from './step-3/StepThree';
import StepFour from './step-4/StepFour';
import { useProcess } from 'processContext';

function ProcessForm() {
  const { activeStep, handleStep } = useProcess();

  return (
    <ProcessFormContainer>
      {activeStep === 4 ? null : activeStep === 5 ? null : activeStep === 6 ? (
        <h3 style={{ color: '#940000' }}>¡Estas a un paso de terminar!</h3>
      ) : (
        <h3>Hola Gabriel, ¡Comencemos a crear tu anuncio!</h3>
      )}

      {activeStep === 1 ? (
        <StepOne part="one" />
      ) : activeStep === 2 ? (
        <StepOne part="two" />
      ) : activeStep === 3 ? (
        <StepOne part="three" />
      ) : activeStep === 4 ? (
        <StepTwo />
      ) : activeStep === 5 ? (
        <StepThree />
      ) : (
        <StepFour />
      )}

      <div>
        <SecondaryCustomButton>Guardar y salir</SecondaryCustomButton>
        <PrimaryCustomButton onClick={handleStep}>
          {activeStep >= 6 ? 'Vender' : 'Continuar'}
        </PrimaryCustomButton>
      </div>
    </ProcessFormContainer>
  );
}

export default ProcessForm;
