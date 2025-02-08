import React from 'react';
import {
  ProcessResumeContainer,
  ProcessStepsContainer,
  ProcessStep,
  ProcessWarning,
  ProcessResumeStyled,
} from './ProcessResume.styles';
import checkedIcon from "assets/img/icons/tick-circle.svg"
import checkedBoldIcon from "assets/img/icons/tick-circle-checked.svg"
import keyIcon from "assets/img/icons/key.svg"
import houseIcon from "assets/img/icons/house-2.svg"
import pinIcon from "assets/img/icons/location.svg"

function ProcessResume() {
  return (
    <ProcessResumeContainer>
      <div>
        <h3>Define los aspectos principales de tu inmueble</h3>
        <p>
          Completa la información básica de tu inmueble para que los compradores
          encuentren justo lo que buscan.
        </p>
      </div>

      <ProcessStepsContainer>
        <ProcessStep>
          <div>
            ¿Que quieres anunciar?
          </div>
          <img src={checkedIcon} alt="checked" />
        </ProcessStep>
        <ProcessStep>
          <div>
            ¿Que quieres anunciar?
          </div>
          <img src={checkedIcon} alt="checked" />
        </ProcessStep>
        <ProcessStep>
          <div>
            ¿Que quieres anunciar?
          </div>
          <img src={checkedIcon} alt="checked" />
        </ProcessStep>
      </ProcessStepsContainer>

      <ProcessResumeStyled>
        <h4>Resumen del anuncio</h4>
        <span>
            <img src={keyIcon} alt="key" />
            En venta
        </span>
        <span>
            <img src={houseIcon} alt="house" />
            Casa, Casa de ciudad
        </span>
      </ProcessResumeStyled>
    </ProcessResumeContainer>
  );
}

export default ProcessResume;
