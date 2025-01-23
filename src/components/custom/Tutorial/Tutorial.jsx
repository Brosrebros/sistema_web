import React, { useState } from 'react';

import {
  TutorialContainer,
  TutorialBanner,
  OptionsContainer,
  OptionsDotContainer,
  Option,
  OptionDot,
  SpanBar,
} from './Tutorial.styles';

function Tutorial() {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleClick = index => {
    setActiveIndex(index);
  };

  return (
    <TutorialContainer>
      <div>
        <h3>
          Simplificamos el proceso para que puedas concentrarte en cerrar el
          trato.
        </h3>
        <p>
          Publicar tu propiedad nunca ha sido tan sencillo. Solo necesitas unos
          minutos para cargar la información y las fotos, y nuestro sistema
          intuitivo hará el resto.
        </p>
      </div>
      <div>
        <div>
          <OptionsContainer>
            {['¿En dónde está?', '¿Cómo es?', '¡Muéstrala!', '¡Véndela!'].map(
              (text, index) => (
                <Option
                  key={index}
                  active={index + 1 <= activeIndex} // Activo si el índice es menor o igual al clickeado
                  onClick={() => handleClick(index + 1)} // Actualiza el índice al clickeado
                >
                  {text}
                </Option>
              )
            )}
          </OptionsContainer>
          <OptionsDotContainer>
            {[1, 2, 3, 4].map(num => (
              <React.Fragment key={num}>
                <OptionDot
                  active={num <= activeIndex} // Activo si el índice es menor o igual al clickeado
                  onClick={() => handleClick(num)} // Controlador de clic
                >
                  {num}
                </OptionDot>
                {num < 4 && (
                  <SpanBar
                    active={num < activeIndex} // Activa barra si está antes del botón activo
                  />
                )}
              </React.Fragment>
            ))}
          </OptionsDotContainer>

          {/* Botones de texto sincronizados */}
        </div>
        <div>
          <TutorialBanner />
          <div>
            <h4>Indica dónde se ubica tu propiedad</h4>
            <p>
              Introduce la ubicación exacta de tu propiedad. Esto ayudurá a los
              interasados a encontrarla fácilmente y enteder su contexto en el
              mercado local.
            </p>
          </div>
        </div>
      </div>
    </TutorialContainer>
  );
}

export default Tutorial;
