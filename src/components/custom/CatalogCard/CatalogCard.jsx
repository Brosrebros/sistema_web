import React from 'react';
import {
  CatalogCardContainer,
  CatalogDataContainer,
  TagContainer,
  MainDataContainer,
  DataDescription,
  OptionsContainer,
} from './CatalogCard.styles';
import { useState } from 'react';
import { defer, useNavigate } from 'react-router-dom';
import CustomListSlider from '../CustomListSlider/CustomListSlider';
import CustomBadge from '../CustomBadge/CustomBadge';
import pinIcon from '../../../assets/img/icons/location.svg';
import cameraIcon from '../../../assets/img/icons/camera.svg';
import placeholder from '../../../assets/img/placeholder-image.png';
import { rootPaths } from 'routes/paths';

function CatalogCard({ property }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  console.log('aca', property);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: index => setCurrentSlide(index),
  };

  const {
    multimedia: { imagenes },
    tipoOperacion,
    tipoPropiedad,
    precio,
    oldPrice,
    ubicacion: { calleNumero, provincia, departamento, direccionCompleta },
    caracteristicas: { areaTotal, banos },
    descripcion: { detalle, titulo },
  } = property;

  return (
    <CatalogCardContainer
      onClick={() => {
        navigate(`/${rootPaths.propertyDetailRoot}/${property.id}`);
      }}
    >
      <div
        style={{
          width: '354px',
          height: '282px',
          borderRadius: '12px',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <CustomListSlider
          {...sliderSettings}
          style={{ width: '100%', height: '100%' }}
        >
          {imagenes && imagenes.length > 0
            ? imagenes.map((img, index) => (
                <div key={index} style={{ height: '100%' }}>
                  <img
                    src={img}
                    alt={`Imagen ${index + 1}`}
                    style={{
                      objectFit: 'cover',
                      width: '100%',
                      height: '100%',
                    }}
                  />
                </div>
              ))
            : null}
        </CustomListSlider>
        <p
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: '0.4rem',
            opacity: '0',
            position: 'absolute',
            left: '10px',
            bottom: '10px',
            backgroundColor: 'white',
            color: '#424242',
            fontSize: '0.8rem',
            padding: '0.2rem 0.4rem',
            borderRadius: '8px',
            margin: '0px',
          }}
        >
          {`${currentSlide + 1}/${imagenes.length}`}
          <img src={cameraIcon} style={{ height: '1rem', width: 'auto' }} />
        </p>
      </div>

      <CatalogDataContainer>
        <TagContainer>
          <div>
            <CustomBadge
              color={
                tipoOperacion === 'Alquiler'
                  ? 'green'
                  : tipoOperacion === 'Venta'
                  ? 'red'
                  : 'white'
              }
            >
              {tipoOperacion}
            </CustomBadge>
            {tipoPropiedad}
          </div>

          <div>
            <CustomBadge color="white">{areaTotal} m2</CustomBadge>
            <CustomBadge color="white">5 Habitaciones</CustomBadge>
            <CustomBadge color="white">{banos} Baños</CustomBadge>
          </div>
        </TagContainer>

        <MainDataContainer>
          <span>Precio</span>
          <h3>S/. {precio.pen.toLocaleString('en-US')}</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <img src={pinIcon} alt="location" />
            {direccionCompleta}
          </div>
        </MainDataContainer>

        <DataDescription>
          <h3>{titulo}</h3>
          <p>{detalle}</p>
        </DataDescription>

        <OptionsContainer>
          <img src={placeholder} alt="inmobiliaria" />

          <div></div>
        </OptionsContainer>
      </CatalogDataContainer>
    </CatalogCardContainer>
  );
}

export default CatalogCard;
