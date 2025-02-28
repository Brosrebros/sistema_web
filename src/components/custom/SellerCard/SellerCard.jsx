import React, { useState } from 'react';
import {
  SellerCardContainer,
  TagDateContainer,
  MainDataContainer,
  SecondaryDataContainer,
  NumberDataContainer,
  VerticalBar,
} from './SellerCard.styles';

import PrimaryCustomButton from '../CustomButtons/PrimaryCustomButton/PrimaryCustomButton';

import CustomBadge from '../CustomBadge/CustomBadge';
import clockIcon from '../../../assets/img/icons/clock.svg';
import checkedIcon from '../../../assets/img/icons/ph_seal-check-fill.svg';
import likeIcon from '../../../assets/img/icons/like.svg';
import callIcon from '../../../assets/img/icons/call.svg';
import SecondaryCustomButton from '../CustomButtons/SecondaryCustomButton/SecondaryCustomButton';
import placeholderIcon from "assets/img/Main-Icon.jpg"

function SellerCard() {
  return (
    <SellerCardContainer>
      <img src={placeholderIcon} alt="Sanchez Real Estate" />
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
          <h4>Sanchez Real Estate</h4>
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
          <SecondaryCustomButton>
            <img src={likeIcon} alt="like" />
            Recomendar
          </SecondaryCustomButton>

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
