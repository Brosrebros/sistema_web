import React from 'react';
import {
  ProcessBarContainer,
  ProgressBarStepStyled,
  StepTitleContainer,
} from './ProcessBar.styles';

import { useProcess } from 'processContext';

function StepTitle({ type, step, title }) {
  const { activeStep, handleStep } = useProcess();

  return (
    <StepTitleContainer type={type}>
      <div>{step}</div>
      <span>{title}</span>
    </StepTitleContainer>
  );
}

function ProcessBar() {
  const { activeStep, handleStep } = useProcess();

  console.log(activeStep);

  return (
    <ProcessBarContainer>
      <div>
        <StepTitle
          type={activeStep >= 4 ? 'do' : 'doing'}
          step="1"
          title="Aspectos principales"
        />
        <StepTitle
          type={activeStep >= 5 ? 'do' : activeStep >= 4 ? 'doing' : 'todo'}
          step="2"
          title="Multimedia"
        />
        <StepTitle
          type={activeStep >= 6 ? 'do' : activeStep >= 5 ? 'doing' : 'todo'}
          step="3"
          title="Adicionales"
        />
        <StepTitle
          type={activeStep >= 7 ? 'do' : activeStep >= 6 ? 'doing' : 'todo'}
          step="4"
          title="Vender"
        />
      </div>
      <div>
        <ProgressBarStepStyled isActive={activeStep >= 4} />
        <ProgressBarStepStyled isActive={activeStep >= 5} />
        <ProgressBarStepStyled isActive={activeStep >= 6} />
        <ProgressBarStepStyled isActive={activeStep >= 7} />
      </div>
    </ProcessBarContainer>
  );
}

export default ProcessBar;
