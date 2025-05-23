import React, { useState } from 'react';
import {
  SliderCardContainer,
  ImageContainer,
  TagContainer,
  DataContainer,
  LikeButton,
  ProyectBanner,
} from './SliderCard.styles';
import CustomBadge from '../CustomBadge/CustomBadge';
import { rootPaths } from 'routes/paths';
import heartIcon from '../../../assets/img/icons/archive-add.svg';
import heartIconBold from '../../../assets/img/icons/archive-tick.svg';
import locationIcon from '../../../assets/img/icons/location.svg';
import { useNavigate } from 'react-router-dom';
import { useModal } from 'modalContext';
import placeholderIcon from "assets/img/Main-Icon.jpg"
import { useProperty } from 'propertyContext';

function SliderCard({ property, type }) {
  const { openModal, closeModal } = useModal();
  const {  propertyType, setPropertyType } = useProperty();
  const navigate = useNavigate();

  const {
    multimedia: { imagenes },
    tipoOperacion,
    tipoPropiedad,
    precio,
    ubicacion: { calleNumero, provincia, departamento },
    caracteristicas: { areaTotal, banos },
  } = property;

  return (
    <>
      <SliderCardContainer
        onClick={() => {
          navigate(`/${rootPaths.propertyDetailRoot}/${property.id}`);
          setPropertyType(type === "proyect" ? "proyect" : "property");
        }}
      >
        <ImageContainer>
          <img src={imagenes[0]} alt="" />

          <LikeButton
            onClick={e => {
              e.stopPropagation();
              openModal('loginModal');
            }}
          >
            <img
              src={heartIcon}
              alt="heart"
              style={{ height: '20px', width: '20px' }}
            />
          </LikeButton>

          {type === 'proyect' ? (
            <ProyectBanner>
              En construcción <b>Entrega en junio 2026</b>
            </ProyectBanner>
          ) : null}
        </ImageContainer>

        <TagContainer>
          {type === 'property' ? (
            tipoOperacion === 'Venta' ? (
              <CustomBadge color="red">{tipoOperacion}</CustomBadge>
            ) : (
              <CustomBadge color="green">{tipoOperacion}</CustomBadge>
            )
          ) : (
            <CustomBadge color="turquoise">Proyecto</CustomBadge>
          )}
          {tipoPropiedad}
        </TagContainer>
        <DataContainer>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '4px',
            }}
          >
            <span>Precio</span>
            <h4>S/. {precio.pen.toLocaleString('en-US')}</h4>
          </div>
          <img src={placeholderIcon} alt="icon" />
        </DataContainer>

        <span>
          <img
            src={locationIcon}
            alt="location"
            style={{ width: '15px', height: '15px' }}
          />
          {calleNumero}, Lima, Perú
        </span>

        <TagContainer>
          <CustomBadge color="gray">{areaTotal} m2</CustomBadge>

          {type === 'property' ? (
            <>
              <CustomBadge color="gray">4 Baños</CustomBadge>
              <CustomBadge color="gray">5 Dormitorios</CustomBadge>
            </>
          ) : (
            <CustomBadge color="gray">Financiamiento Directo</CustomBadge>
          )}
        </TagContainer>
      </SliderCardContainer>
    </>
  );
}

export default SliderCard;
