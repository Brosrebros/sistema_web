import React, { useState } from 'react';
import {
  SellerCardContainer,
  TagDateContainer,
  MainDataContainer,
  SecondaryDataContainer,
  NumberDataContainer,
  VerticalBar,
  CircleButton,
} from './SellerCard.styles';

import PrimaryCustomButton from '../CustomButtons/PrimaryCustomButton/PrimaryCustomButton';

import CustomBadge from '../CustomBadge/CustomBadge';
import clockIcon from '../../../assets/img/icons/clock.svg';
import checkedIcon from '../../../assets/img/icons/ph_seal-check-fill.svg';
import heartIcon from '../../../assets/img/icons/heart.svg';
import heartIconBold from '../../../assets/img/icons/heart-bold.svg';
import callIcon from '../../../assets/img/icons/call.svg';

function SellerCard() {
const [isFavourite, setIsFavourite] = useState(false);

const handleFavourite = () => {
    setIsFavourite(prev => !prev)
}

  return (
    <SellerCardContainer>
      <img src="#" alt="#" />
      <div>
        <TagDateContainer>
          <div>
            <CustomBadge color="turquoise">Inmobiliaria</CustomBadge>
            <CustomBadge color="gray">
              Santiago de Chile, Santiago de Chile, Chile
            </CustomBadge>
          </div>

          <div>
            <h6>
              Anuncia <b>desde 2024</b>
            </h6>
            <img src={clockIcon} alt="clock" />
          </div>
        </TagDateContainer>
        <MainDataContainer>
        <div>
          <h4>Inmobiliaria Los Robles</h4>
          <img src={checkedIcon} alt="checked" />
        </div>
        <p>
          Empresa especializada en la compra, venta y alquiler de propiedades.
          Ofrecemos un amplio portafolio de inmuebles y asesoría profesional en
          cada etapa del proceso.
        </p>
      </MainDataContainer>
      <SecondaryDataContainer>
        <div>
          <NumberDataContainer>
            <h4>10</h4>
            <div>
              <h5>Propiedades</h5>
              <span>en venta</span>
            </div>
          </NumberDataContainer>
          <VerticalBar />
          <NumberDataContainer>
            <h4>2</h4>
            <div>
              <h5>Proyectos</h5>
              <span>en entrega inmediata</span>
            </div>
          </NumberDataContainer>
          <VerticalBar />
          <NumberDataContainer>
            <h4>2</h4>
            <div>
              <h5>Proyectos</h5>
              <span>en construccion</span>
            </div>
          </NumberDataContainer>
        </div>
        <div>
          <CircleButton onClick={handleFavourite}>
            <img src={isFavourite ? heartIconBold : heartIcon} alt="heart" />
          </CircleButton>

          <PrimaryCustomButton>
            <img src={callIcon} alt="sms" />
            Contactar
          </PrimaryCustomButton>
        </div>
      </SecondaryDataContainer>
      </div>
      
    </SellerCardContainer>
  );
}

export default SellerCard;
