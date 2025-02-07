import React from 'react';
import { CardButtonContainer } from './CardButton.styles';
import HomeOnSale from '../../../../assets/img/icons/Home on Sale Illustration.svg';
import HomeComputer from '../../../../assets/img/icons/House Computer.svg';
import HomeContract from '../../../../assets/img/icons/House Contract.svg';

const cardOptions = {
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
