import React from 'react';
import {
  CatalogCardContainer,
  CatalogDataContainer,
  TagContainer,
  MainDataContainer,
  DataDescription,
  OptionsContainer,
  ImagesCounter,
  ProyectBanner,
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
import heartIcon from '../../../assets/img/icons/archive-add.svg';
import heartIconBold from '../../../assets/img/icons/archive-tick.svg';
import premiumIcon from 'assets/img/icons/ph_seal-check-fill.svg';
import PrimaryCustomButton from '../CustomButtons/PrimaryCustomButton/PrimaryCustomButton';
import SecondaryCustomButton from '../CustomButtons/SecondaryCustomButton/SecondaryCustomButton';
import { useModal } from 'modalContext';
import placeholderIcon from 'assets/img/Main-Icon.jpg';
import lineDownIcon from 'assets/img/icons/Line arrow-down.svg';

function CatalogCard({ property, type }) {
  const { isMenuOpen } = useMenu();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFavourite, setIsFavourite] = useState(false);
  const { openModal, closeModal } = useModal();
  const navigate = useNavigate();

  const handleFavourite = e => {
    e.stopPropagation();
    openModal('loginModal');
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
      <div onClick={e => e.stopPropagation()}>
        <CustomListSlider
          {...sliderSettings}
          id="proyects"
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

        {type === 'offers' ? (
          <div
            style={{
              width: '100%',
              position: 'absolute',
              opacity: '1',
              top: '12px',
              left: '12px',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              transition: 'all 0.1s ease',
            }}
          >
            <CustomBadge color="light-green">Bajó de precio</CustomBadge>
          </div>
        ) : (
          <div></div>
        )}
        <ImagesCounter type="proyects">
          <img src={cameraIcon} />
          <p>{`${currentSlide + 1}/${imagenes.length}`}</p>
        </ImagesCounter>

        {type === 'proyects' ? (
          <ProyectBanner>
            <p>En construcción</p>
            <p>Entrega en junio 2026</p>
          </ProyectBanner>
        ) : null}
      </div>

      <CatalogDataContainer>
        <TagContainer>
          <div>
            {type === 'proyects' ? (
              <CustomBadge color="turquoise">Proyecto</CustomBadge>
            ) : (
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
            )}

            {tipoPropiedad}
          </div>

          <div>
            <CustomBadge color="gray">{areaTotal} m2</CustomBadge>
            {type === 'proyects' ? (
              <CustomBadge color="gray">Financiamiento directo</CustomBadge>
            ) : (
              <CustomBadge color="gray">5 habitaciones</CustomBadge>
            )}
            <CustomBadge color="gray">{banos} Baños</CustomBadge>
          </div>
        </TagContainer>

        <DataDescription>
          <div>
            <h3>{titulo}</h3>
            <div>
              <img src={pinIcon} alt="pin" />
              <p>Jr. Salaverry N°475, Calleria, Ucayali, Perú</p>
            </div>
          </div>

          <p>{detalle}</p>
        </DataDescription>

        <MainDataContainer>
          <span>Precio</span>
          <h3>
            S/. {precio.pen.toLocaleString('en-US')}
            {type === 'offers' ? (
              <CustomBadge color="light-green">
                <img src={lineDownIcon} alt="line" />
                %15
              </CustomBadge>
            ) : null}
          </h3>
          <img src={placeholderIcon} alt="Sanchez Real Estate" id="mobile" />
        </MainDataContainer>
        <OptionsContainer>
          <div>
            <img src={placeholderIcon} alt="Sanchez Real Estate" />

            <div>
              <h5>
                Sanchez Real Estate <img src={premiumIcon} alt="#" />
              </h5>
              <CustomBadge color="turquoise">Inmobiliaria</CustomBadge>
            </div>
          </div>
          <div>
            <SecondaryCustomButton
              onClick={e => {
                e.stopPropagation();
                openModal('loginModal');
              }}
              id="desktop"
            >
              <img
                src={heartIcon}
                alt="heart"
                style={{ height: '20px', width: '20px' }}
              />
              Guardar
            </SecondaryCustomButton>
            <SecondaryCustomButton
              onClick={e => {
                e.stopPropagation();
                openModal('loginModal');
              }}
              id="mobile"
            >
              <img
                src={heartIcon}
                alt="heart"
                style={{ height: '20px', width: '20px' }}
              />
            </SecondaryCustomButton>
            <PrimaryCustomButton
              onClick={e => {
                e.stopPropagation();
                openModal('contactModal');
              }}
            >
              <img src={callIcon} alt="sms" />
              Contactar
            </PrimaryCustomButton>
          </div>
        </OptionsContainer>
      </CatalogDataContainer>
    </CatalogCardContainer>
  );
}

export default CatalogCard;
