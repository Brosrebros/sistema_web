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
import { useNavigate } from 'react-router-dom';
import CustomListSlider from '../CustomListSlider/CustomListSlider';
import CustomBadge from '../CustomBadge/CustomBadge';
import pinIcon from '../../../assets/img/icons/location.svg';
import cameraIcon from '../../../assets/img/icons/camera.svg';
import { rootPaths } from 'routes/paths';
import { useMenu } from 'menuContext';
import callIcon from '../../../assets/img/icons/call.svg';
import heartIcon from '../../../assets/img/icons/heart.svg';
import heartIconBold from '../../../assets/img/icons/heart-bold.svg';
import PrimaryCustomButton from '../CustomButtons/PrimaryCustomButton/PrimaryCustomButton';

function CatalogCard({ property }) {
  const { isMenuOpen } = useMenu();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFavourite, setIsFavourite] = useState(false);
  const navigate = useNavigate();

  const handleFavourite = () => {
    setIsFavourite(prev => !prev);
  };

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
      isMenuOpen={isMenuOpen}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          height: '100%',
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
                <div key={index} style={{ width: '100%', height: '100%' }}>
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

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            opacity: '1',
            top: '12px',
            right: '12px',
            padding: '12px',
            borderRadius: '100px',
            backgroundColor: '#ffffff',
            cursor: 'pointer',
          }}
          onClick={handleFavourite}
        >
          <img
            src={isFavourite ? heartIconBold : heartIcon}
            alt="heart"
            style={{ height: '20px', width: '20px' }}
          />
        </div>
        <div
          style={{
            width: '100px',
            height: '44px',
            position: 'absolute',
            opacity: '0',
            bottom: '12px',
            left: '12px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 16px',
            margin: '0px',
            backgroundColor: 'white',
            borderRadius: '8px',
            transition: 'all 0.1s ease',
          }}
        >
          <img src={cameraIcon} style={{ height: '20px', width: '20px' }} />
          <p
            style={{
              color: '#424242',
              fontSize: '1rem',
              margin: '0px',
              lineHeight: '65%',
            }}
          >
            {`${currentSlide + 1}/${imagenes.length}`}
          </p>
        </div>
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
                  : 'gray'
              }
            >
              {tipoOperacion}
            </CustomBadge>
            {tipoPropiedad}
          </div>

          <div>
            <CustomBadge color="gray">{areaTotal} m2</CustomBadge>
            <CustomBadge color="gray">5 Habitaciones</CustomBadge>
            <CustomBadge color="gray">{banos} Baños</CustomBadge>
          </div>
        </TagContainer>

        <MainDataContainer>
          <span>Precio</span>
          <h3>S/. {precio.pen.toLocaleString('en-US')}</h3>
          <div>
            <img src={pinIcon} alt="location" />
            <p>{direccionCompleta}</p>
          </div>
        </MainDataContainer>

        <DataDescription>
          <h3>{titulo}</h3>
          <p>{detalle}</p>
        </DataDescription>

        <OptionsContainer>
          <img src="#" alt="" />

          <PrimaryCustomButton>
            <img src={callIcon} alt="sms" />
            Contactar
          </PrimaryCustomButton>
        </OptionsContainer>
      </CatalogDataContainer>
    </CatalogCardContainer>
  );
}

export default CatalogCard;
