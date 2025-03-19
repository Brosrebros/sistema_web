import React from 'react';
import { CardButtonContainer } from './CardButton.styles';
import HomeOnSale from 'assets/img/icons/Home on Sale Illustration.svg';
import HomeComputer from 'assets/img/icons/House Computer.svg';
import HomeContract from 'assets/img/icons/House Contract.svg';
import SpreadSheet from 'assets/img/icons/SpreadSheet.svg';
import Comments from 'assets/img/icons/Comments.svg';
import Document from 'assets/img/icons/Document.svg';

const cardOptions =
  window.innerWidth >= 968
    ? {
        option1: {
          img: HomeOnSale,
          title: 'Propiedades que bajaron de precio',
          paragraph:
            'Aprovecha las mejores ofertas en propiedades con precios recién reducidos.',
          alt: 'home sale',
        },
        option2: {
          img: HomeContract,
          title: 'Proyectos con financiamiento directo',
          paragraph:
            'Descubre desarrollos inmobiliarios que ofrecen planes de pago sin intermediarios bancarios.',
          alt: 'home computer',
        },
        option3: {
          img: HomeComputer,
          title: '¡Vende tu propiedad aquí!',
          paragraph:
            'Dale visibilidad a tu propiedad en nuestra plataforma y vende rápidamente.',
          alt: 'home contract',
        },
        option4: {
          img: SpreadSheet,
          title: 'Términos legales',
          paragraph:
            'Información esencial sobre los acuerdos y positivas que rigen el uso de nuestros servicios.',
          alt: 'spreadsheet',
        },
        option5: {
          img: Comments,
          title: 'Guías y Preguntas Frecuentes (FAQs)',
          paragraph:
            'Respuestas a las preguntas más comunes y guías para resolver problemas técnicos.',
          alt: 'comments',
        },
        option6: {
          img: Document,
          title: 'Actualizaciones y Mantenimiento',
          paragraph:
            'Información sobre las últimas actualizaciones y mejoras en nuestros servicios.',
          alt: 'contract',
        },
      }
    : {
        option1: {
          img: HomeOnSale,
          title: 'Propiedades que bajaron de precio',
          paragraph: 'Aprovecha las mejores ofertas en todas las propiedades',
          alt: 'home sale',
        },
        option2: {
          img: HomeContract,
          title: 'Proyectos con financiamiento directo',
          paragraph: 'Proyectos inmobiliarios planes de pago ajustables',
          alt: 'home computer',
        },
        option3: {
          img: HomeComputer,
          title: '¡Vende tu propiedad aquí!',
          paragraph: 'Dale visibilidad a tu propiedad en nuestra plataforma.',
          alt: 'home contract',
        },
        option4: {
          img: SpreadSheet,
          title: 'Términos legales',
          paragraph:
            'Información esencial sobre los acuerdos y positivas que rigen el uso de nuestros servicios.',
          alt: 'spreadsheet',
        },
        option5: {
          img: Comments,
          title: 'Guías y Preguntas Frecuentes (FAQs)',
          paragraph:
            'Respuestas a las preguntas más comunes y guías resolver problemas técnicos.',
          alt: 'comments',
        },
        option6: {
          img: Document,
          title: 'Actualizaciones y Mantenimiento',
          paragraph:
            'Información sobre las últimas actualizaciones y mejoras en nuestros servicios.',
          alt: 'contract',
        },
      };

function CardButton({ option, onClick }) {
  const { img, title, paragraph, alt } = cardOptions[option];
  return (
    <CardButtonContainer onClick={onClick}>
      <img src={img} alt={alt} />
      <div>
        <h4>{title}</h4>
        <p>{paragraph}</p>
      </div>
    </CardButtonContainer>
  );
}

export default CardButton;
