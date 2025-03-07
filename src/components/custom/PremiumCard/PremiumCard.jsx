import React from 'react';
import { PremiumCardContainer } from './PremiumCard.styles';
import checkIcon from '../../../assets/img/icons/Circle.svg';
import alertIcon from 'assets/img/icons/info-circle.svg';
import CustomBadge from '../CustomBadge/CustomBadge';
import SecondaryCustomButton from '../CustomButtons/SecondaryCustomButton/SecondaryCustomButton';

function PremiumCard({ title, type, time, price }) {
  const essentialFeatures = [
    'Hasta 5 publicaciones activas',
    'Nivel de visibilidad normal',
    'Sistema de destacados',
    'Panel de control básico',
  ];

  const premiumFeatures = [
    'Sin límite de publicaciones activas',
    'Publicación y gestión de proyectos inmobiliarios',
    'Nivel de visibilidad alto',
    'Sin anuncios',
    'Marca de verificación',
    'Creación de grupos',
    'Panel del control avanzado',
  ];

  const features = type === 'esencial' ? essentialFeatures : premiumFeatures;

  return (
    <PremiumCardContainer type={type}>
      <h3>{title}</h3>
      <span>
        <b>{price}</b> <p>/ {type === 'esencial' ? 'siempre' : 'mes'}</p>
      </span>
      {type !== 'esencial' && (
        <div>
          {time === 'año' ? (
            <>
              <p>S/. 432.00 facturados anualmente</p>
              <CustomBadge color="red">Ahorra un 20%</CustomBadge>
            </>
          ) : (
            <p>Facturación mensual</p>
          )}
        </div>
      )}
      <ul>
        {type !== 'esencial' && (
          <h4>Todas las funciones del plan esencial y</h4>
        )}
        {features.map((feature, index) => (
          <li key={index}>
            <img src={checkIcon} alt="check" />
            {feature}
            {type === 'premium' && index === 4 && (
              <img src={alertIcon} alt="alert" />
            )}
          </li>
        ))}
      </ul>
      {type === 'esencial' ? (
        <SecondaryCustomButton variant="gray">
          Tu plan actual
        </SecondaryCustomButton>
      ) : null}
    </PremiumCardContainer>
  );
}

export default PremiumCard;
