import React from 'react';
import { Banner, BannerWrapper } from './MainBanner.styles';
import CustomBadge from '../CustomBadge/CustomBadge';
import PrimaryCustomButton from '../CustomButtons/PrimaryCustomButton/PrimaryCustomButton';
import Advertising from '../Advertising/Advertising';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useMenu } from 'menuContext';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const StyledSlider = styled(Slider)`
  width: 1900px;

  .custom-dots li button {
    background-color: #ffffff !important;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    transition: background-color 0.3s ease;
  }

  .custom-dots li.slick-active button {
    background-color: #940000 !important;
  }

  .slick-dots li.slick-active button:before {
    display: none !important;
  }

  .slick-dots li button:before {
    display: none !important;
  }

  .slick-dots li {
    width: 10px;
    height: 10px;
  }

  .slick-dots {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${({isMenuOpen}) => (isMenuOpen ? '1530px' : '1700px')};
    padding: 10px;
    bottom: 0;
  }
`;

function HomeBanner({ type }) {
  const navigate = useNavigate();
  const { isMenuOpen } = useMenu();

  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: 'slick-dots custom-dots',
  };

  return (
    <Banner type={type}>
      {type === 'home' ? (
        <StyledSlider {...settings} isMenuOpen={isMenuOpen}>
          <BannerWrapper>
            {type === 'home' ? (
              <div style={{ display: 'flex', gap: '12px' }}>
                <CustomBadge color="turquoise">Proyecto</CustomBadge>
                <CustomBadge color="white">Financiamiento directo</CustomBadge>
              </div>
            ) : null}
            {type === 'home' ? (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '10px',
                  maxWidth: '521px',
                }}
              >
                <h1>Habilitación urbana “Santa Maria”</h1>

                <p>
                  Se encuentra estratégicamente ubicado en el corazón del
                  circuito turístico de Yarinacocha, Pucallpa, a tan solo 3
                  minutos de la espectacular laguna de Cashibococha.
                </p>
              </div>
            ) : (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '10px',
                  maxWidth: '521px',
                }}
              >
                <h2>¡Vende tu propiedad rápidamente y sin complicaciones!</h2>

                <p>
                  Únete a miles de usuarios que ya confían en Organización
                  Sánchez. Nuestra plataforma te conecta con compradores de todo
                  el mundo.
                </p>
              </div>
            )}
            {type === 'home' ? (
              <PrimaryCustomButton
                onClick={() => navigate(`/inmuebles/676a364f3592cc2e8247f214`)}
              >
                Deseo conocer más
              </PrimaryCustomButton>
            ) : (
              <PrimaryCustomButton>Vende tu inmueble ahora</PrimaryCustomButton>
            )}
          </BannerWrapper>
          <BannerWrapper>
            {type === 'home' ? (
              <div style={{ display: 'flex', gap: '12px' }}>
                <CustomBadge color="turquoise">Proyecto</CustomBadge>
                <CustomBadge color="white">Financiamiento directo</CustomBadge>
              </div>
            ) : null}
            {type === 'home' ? (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '10px',
                  maxWidth: '521px',
                }}
              >
                <h1>Habilitación urbana “Santa Maria”</h1>

                <p>
                  Se encuentra estratégicamente ubicado en el corazón del
                  circuito turístico de Yarinacocha, Pucallpa, a tan solo 3
                  minutos de la espectacular laguna de Cashibococha.
                </p>
              </div>
            ) : (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '10px',
                  maxWidth: '521px',
                }}
              >
                <h2>¡Vende tu propiedad rápidamente y sin complicaciones!</h2>

                <p>
                  Únete a miles de usuarios que ya confían en Organización
                  Sánchez. Nuestra plataforma te conecta con compradores de todo
                  el mundo.
                </p>
              </div>
            )}
            {type === 'home' ? (
              <PrimaryCustomButton
                onClick={() => navigate(`/inmuebles/676a364f3592cc2e8247f214`)}
              >
                Deseo conocer más
              </PrimaryCustomButton>
            ) : (
              <PrimaryCustomButton>Vende tu inmueble ahora</PrimaryCustomButton>
            )}
          </BannerWrapper>
          <BannerWrapper>
            {type === 'home' ? (
              <div style={{ display: 'flex', gap: '12px' }}>
                <CustomBadge color="turquoise">Proyecto</CustomBadge>
                <CustomBadge color="white">Financiamiento directo</CustomBadge>
              </div>
            ) : null}
            {type === 'home' ? (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '10px',
                  maxWidth: '521px',
                }}
              >
                <h1>Habilitación urbana “Santa Maria”</h1>

                <p>
                  Se encuentra estratégicamente ubicado en el corazón del
                  circuito turístico de Yarinacocha, Pucallpa, a tan solo 3
                  minutos de la espectacular laguna de Cashibococha.
                </p>
              </div>
            ) : (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '10px',
                  maxWidth: '521px',
                }}
              >
                <h2>¡Vende tu propiedad rápidamente y sin complicaciones!</h2>

                <p>
                  Únete a miles de usuarios que ya confían en Organización
                  Sánchez. Nuestra plataforma te conecta con compradores de todo
                  el mundo.
                </p>
              </div>
            )}
            {type === 'home' ? (
              <PrimaryCustomButton
                onClick={() => navigate(`/inmuebles/676a364f3592cc2e8247f214`)}
              >
                Deseo conocer más
              </PrimaryCustomButton>
            ) : (
              <PrimaryCustomButton>Vende tu inmueble ahora</PrimaryCustomButton>
            )}
          </BannerWrapper>
          <BannerWrapper>
            {type === 'home' ? (
              <div style={{ display: 'flex', gap: '12px' }}>
                <CustomBadge color="turquoise">Proyecto</CustomBadge>
                <CustomBadge color="white">Financiamiento directo</CustomBadge>
              </div>
            ) : null}
            {type === 'home' ? (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '10px',
                  maxWidth: '521px',
                }}
              >
                <h1>Habilitación urbana “Santa Maria”</h1>

                <p>
                  Se encuentra estratégicamente ubicado en el corazón del
                  circuito turístico de Yarinacocha, Pucallpa, a tan solo 3
                  minutos de la espectacular laguna de Cashibococha.
                </p>
              </div>
            ) : (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '10px',
                  maxWidth: '521px',
                }}
              >
                <h2>¡Vende tu propiedad rápidamente y sin complicaciones!</h2>

                <p>
                  Únete a miles de usuarios que ya confían en Organización
                  Sánchez. Nuestra plataforma te conecta con compradores de todo
                  el mundo.
                </p>
              </div>
            )}
            {type === 'home' ? (
              <PrimaryCustomButton
                onClick={() => navigate(`/inmuebles/676a364f3592cc2e8247f214`)}
              >
                Deseo conocer más
              </PrimaryCustomButton>
            ) : (
              <PrimaryCustomButton>Vende tu inmueble ahora</PrimaryCustomButton>
            )}
          </BannerWrapper>
        </StyledSlider>
      ) : null}

      {type === 'home' ? (
        <Advertising>Espacio de publicidad relacionada al servicio</Advertising>
      ) : null}
    </Banner>
  );
}

export default HomeBanner;
