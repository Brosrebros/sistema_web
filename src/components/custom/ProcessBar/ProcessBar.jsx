import React from 'react';
import {
  ProcessBarContainer,
  ProgressBarStepStyled,
  StepTitleContainer
} from './ProcessBar.styles';

function ProcessBar() {
  return (
    <ProcessBarContainer>
      <div>
        <StepTitleContainer>
          <div>
            1
          </div>
          <span>
          Aspectos principales
          </span>
        </StepTitleContainer>
        <StepTitleContainer>
          <div>
            1
          </div>
          <span>
          Aspectos principales
          </span>
        </StepTitleContainer>
        <StepTitleContainer>
          <div>
            1
          </div>
          <span>
          Aspectos principales
          </span>
        </StepTitleContainer>
        <StepTitleContainer>
          <div>
            1
          </div>
          <span>
          Aspectos principales
          </span>
        </StepTitleContainer>
      </div>
      <div>
        <ProgressBarStepStyled />
        <ProgressBarStepStyled />
        <ProgressBarStepStyled />
        <ProgressBarStepStyled />
      </div>
    </ProcessBarContainer>
  );
}

export default ProcessBar;
