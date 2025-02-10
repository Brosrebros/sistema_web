import React from 'react';
import { StyledWrapped, TitleContainer } from './StepFour.styles';
import clockIcon from 'assets/img/icons/clock-white.svg';
import grayClockIcon from 'assets/img/icons/clock.svg';

function StepFour() {
  return (
    <>
      <StyledWrapped>
        <TitleContainer>
          <h3>Tu suscripción actual</h3>
          <p>
            Recuerda todos los beneficios que ofrece tu plan actual y revisa su
            estado para aprovechar cada una de sus características
          </p>
        </TitleContainer>
        <div>
          <div>
            <h3>Plan Esencial</h3>
            <span>
              <img src={grayClockIcon} alt="clock" />{' '}
              <p>
                Disponible hasta el <b>fin de los tiempos</b>
              </p>
            </span>
          </div>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
        <span>
          <img src={clockIcon} alt="clock" />
          ¡Todo listo! Este anuncio está cubierto por tu Plan Esencial. Puedes
          continuar con el proceso sin costo adicional.
        </span>
      </StyledWrapped>
      <TitleContainer>
        <h3>
          Destaca tu anuncio y llega a mas personas en menos tiempo (Opcional)
        </h3>
        <p>
          Las publicaciones destacadas captan mayor atención y se posicionan en
          los primeros lugares de búsqueda. Elige el tiempo de duración que
          mejor se adapte a tus necesidades.
        </p>
      </TitleContainer>
    </>
  );
}

export default StepFour;
