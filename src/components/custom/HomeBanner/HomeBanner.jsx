import React from 'react';
import { Banner, Advertising } from './HomeBanner.styles';
import CustomBadge from '../CustomBadge/CustomBadge';
import PrimaryCustomButton from '../CustomButtons/PrimaryCustomButton/PrimaryCustomButton';

function HomeBanner() {
  return (

      <Banner>
        <div style={{ display: 'flex', gap: '12px' }}>
          <CustomBadge color="turquoise">Proyecto</CustomBadge>
          <CustomBadge color="white">Financiamiento directo</CustomBadge>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '20px',
          }}
        >
          <h1>HABILITACIÓN URBANA “SANTA MARIA”</h1>

          <p>
            Se encuentra estratégicamente ubicado en el corazón del circuito
            turístico de Yarinacocha, Pucallpa, a tan solo 3 minutos de la
            espectacular laguna de Cashibococha.
          </p>
        </div>

        <PrimaryCustomButton>Deseo conocer más</PrimaryCustomButton>

        <Advertising>Espacio de publicidad relacionada al servicio</Advertising>
      </Banner>
  );
}

export default HomeBanner;
