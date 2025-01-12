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
      'Aprovecha las mejores ofertas en casas, departamentos y terrenos con precios recién reducidos',
    alt: 'home sale',
  },
  option2: {
    img: HomeComputer,
    title: 'Propiedades que bajaron de precio',
    paragraph:
      'Aprovecha las mejores ofertas en casas, departamentos y terrenos con precios recién reducidos',
    alt: 'home computer',
  },
  option3: {
    img: HomeContract,
    title: 'Propiedades que bajaron de precio',
    paragraph:
      'Aprovecha las mejores ofertas en casas, departamentos y terrenos con precios recién reducidos',
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
