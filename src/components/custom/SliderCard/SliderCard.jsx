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
import { LuMapPin } from 'react-icons/lu';
import { rootPaths } from 'routes/paths';
import heartIcon from '../../../assets/img/icons/heart.svg';
import heartIconBold from '../../../assets/img/icons/heart-bold.svg';
import { useNavigate } from 'react-router-dom';
import placeholderImage from '../../../assets/img/placeholder-image.png';

function SliderCard({ property, type }) {
  const [isFavourite, setIsFavourite] = useState(false);
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
    <SliderCardContainer
      onClick={() => {
        navigate(`/${rootPaths.propertyDetailRoot}/${property.id}`);
      }}
    >
      <ImageContainer>
        <img src={imagenes[0]} alt="" />

        <LikeButton
          onClick={e => {
            e.stopPropagation();
            setIsFavourite(prev => !prev);
          }}
        >
          <img
            src={isFavourite ? heartIconBold : heartIcon}
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
            gap: '10px',
          }}
        >
          <span>Precio</span>
          <h4>S/. {precio.pen.toLocaleString('en-US')}</h4>
        </div>
        <img src="" alt="" />
      </DataContainer>

      <span>
        <LuMapPin />
        {calleNumero}, {departamento}, {provincia}
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
  );
}

export default SliderCard;
