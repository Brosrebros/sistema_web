import React, { useState, useEffect } from 'react';

import {
  TutorialContainer,
  TutorialBanner,
  OptionsContainer,
  OptionsDotContainer,
  Option,
  OptionDot,
  SpanBar,
} from './Tutorial.styles';

const options = ['¿En dónde está?', '¿Cómo es?', '¡Muéstrala!', '¡Véndela!'];

const textOptions = [
  {
    title: 'Indica dónde se ubica tu propiedad',
    paragraph:
      'Introduce la ubicación exacta de tu propiedad. Esto ayudará a los interesados a encontrarla fácilmente y entender su contexto en el mercado local.',
  },
  {
    title: 'Destaca lo que hace especial a tu propiedad',
    paragraph:
      'Proporciona detalles importantes como el tamaño, el número de habitaciones, baños, antigüedad y cualquier característica única que aumente su valor, como una piscina o jardín.',
  },
  {
    title: 'Haz que los compradores se enamoren de tu propiedad',
    paragraph:
      'Sube fotos de alta calidad y videos que muestren cada rincón de tu propiedad. Esto generará mayor interés y confianza en los compradores.',
  },
  {
    title: 'Tu anuncio estará listo con un solo ¡clic!',
    paragraph:
      'Una vez que completes los detalles, haz clic en “Vender” para que tu propiedad esté disponible en nuestra plataforma. ¡Puede ser completamente gratis y siempre sin complicaciones!',
  },
];

function Tutorial() {
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex % textOptions.length) + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleIndexChange = index => {
    setActiveIndex(index);
  }

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
            {options.map((text, index) => (
              <Option key={index} active={index + 1 <= activeIndex} onClick={() => handleIndexChange(index + 1)}>
                {text}
              </Option>
            ))}
          </OptionsContainer>
          <OptionsDotContainer>
            {[1, 2, 3, 4].map(num => (
              <React.Fragment key={num}>
                <OptionDot active={num <= activeIndex}>{num}</OptionDot>
                {num < 4 && <SpanBar active={num < activeIndex} />}
              </React.Fragment>
            ))}
          </OptionsDotContainer>
        </div>
        <div>
          <TutorialBanner />
          <div>
            <h4>{textOptions[activeIndex - 1].title}</h4>
            <p>{textOptions[activeIndex - 1].paragraph}</p>
          </div>
        </div>
      </div>
    </TutorialContainer>
  );
}

export default Tutorial;
