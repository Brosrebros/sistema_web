import React from 'react';
import { Banner } from './MainBanner.styles';
import CustomBadge from '../CustomBadge/CustomBadge';
import PrimaryCustomButton from '../CustomButtons/PrimaryCustomButton/PrimaryCustomButton';
import Advertising from '../Advertising/Advertising';
import { useNavigate } from 'react-router-dom';

function HomeBanner({ type }) {
  const navigate = useNavigate();
  return (
    <Banner type={type}>
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
            Se encuentra estratégicamente ubicado en el corazón del circuito
            turístico de Yarinacocha, Pucallpa, a tan solo 3 minutos de la
            espectacular laguna de Cashibococha.
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
            Únete a miles de usuarios que ya confían en Organización Sánchez.
            Nuestra plataforma te conecta con compradores de todo el mundo.
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

      {type === 'home' ? (
        <Advertising>Espacio de publicidad relacionada al servicio</Advertising>
      ) : null}
    </Banner>
  );
}

export default HomeBanner;
