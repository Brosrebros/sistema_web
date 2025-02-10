import React from 'react';
import {
  ProcessResumeContainer,
  ProcessStepsContainer,
  ProcessStep,
  ProcessWarning,
  ProcessResumeStyled,
} from './ProcessResume.styles';

import checkedIcon from 'assets/img/icons/tick-circle.svg';
import checkedBoldIcon from 'assets/img/icons/tick-circle-checked.svg';
import keyIcon from 'assets/img/icons/key.svg';
import houseIcon from 'assets/img/icons/house-2.svg';
import pinIcon from 'assets/img/icons/location.svg';
import lampIcon from 'assets/img/icons/lamp-on.svg';

import { useProcess } from 'processContext';

function ProcessResume() {
  const { activeStep, handleStep } = useProcess();

  return (
    <ProcessResumeContainer>
      <div>
        <h3>Define los aspectos principales de tu inmueble</h3>
        <p>
          Completa la información básica de tu inmueble para que los compradores
          encuentren justo lo que buscan.
        </p>
      </div>
      {activeStep === 4 ? (
        <ProcessWarning>
          <img src={lampIcon} alt="lamp" />
          Para que tu inmueble tenga más impacto te recomendamos evitar incluir
          bordes, logos, marcas de agua, o textos promocionales.
        </ProcessWarning>
      ) : null}
      <ProcessStepsContainer>
        {activeStep < 4 ? (
          <>
            <ProcessStep isActive={activeStep >= 1}>
              <div>¿Que quieres anunciar?</div>

              {activeStep >= 2 ? (
                <img src={checkedBoldIcon} alt="checked" />
              ) : (
                <img src={checkedIcon} alt="checked" />
              )}
            </ProcessStep>
            <ProcessStep isActive={activeStep >= 2}>
              <div>¿En donde esta ubicado tu inmueble?</div>
              {activeStep >= 3 ? (
                <img src={checkedBoldIcon} alt="checked" />
              ) : (
                <img src={checkedIcon} alt="checked" />
              )}
            </ProcessStep>
            <ProcessStep isActive={activeStep >= 3}>
              <div>Caracteristicas principales</div>
              {activeStep >= 4 ? (
                <img src={checkedBoldIcon} alt="checked" />
              ) : (
                <img src={checkedIcon} alt="checked" />
              )}
            </ProcessStep>
          </>
        ) : activeStep >= 4 && activeStep < 6 ? (
          <ProcessStep isActive={true}>
            <div>
              {activeStep === 4
                ? '¿Cómo se ve tu inmueble?'
                : 'Características adicionales'}
            </div>
            <img src={checkedIcon} alt="checked" />
          </ProcessStep>
        ) : activeStep >= 6 ? (
          <>
            <ProcessStep isActive={activeStep >= 6}>
              <div>¡Impulsa tu anuncio!</div>

              {activeStep >= 7 ? (
                <img src={checkedBoldIcon} alt="checked" />
              ) : (
                <img src={checkedIcon} alt="checked" />
              )}
            </ProcessStep>
            <ProcessStep isActive={activeStep >= 7}>
              <div>Realiza el pago</div>
              {activeStep >= 8 ? (
                <img src={checkedBoldIcon} alt="checked" />
              ) : (
                <img src={checkedIcon} alt="checked" />
              )}
            </ProcessStep>
            <ProcessStep isActive={activeStep >= 8}>
              <div>Confirma la venta</div>
              {activeStep >= 9 ? (
                <img src={checkedBoldIcon} alt="checked" />
              ) : (
                <img src={checkedIcon} alt="checked" />
              )}
            </ProcessStep>
          </>
        ) : null}
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

        {activeStep >= 3 ? (
          <span>
            <img src={pinIcon} alt="pin" />
            Av. Las Magnolias, Lurigancho, Lima
          </span>
        ) : null}
      </ProcessResumeStyled>
    </ProcessResumeContainer>
  );
}

export default ProcessResume;
