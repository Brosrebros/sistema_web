import React from 'react';
import { PremiumCardContainer } from './PremiumCard.styles';
import checkIcon from '../../../assets/img/icons/Circle.svg';

function PremiumCard({ title, type, time }) {
  const essentialFeatures = [
    'Hasta 5 publicaciones activas',
    'Nivel de visibilidad normal',
    'Sistema de destacados',
    'Panel de control básico',
  ];

  const premiumFeatures = [
    'Publicaciones ilimitadas',
    'Nivel de visibilidad alta',
    'Soporte prioritario 24/7',
    'Análisis detallado de interacciones',
    'Acceso a herramientas de marketing',
    'Integraciones avanzadas con CRM',
  ];

  const features = type === 'Esencial' ? essentialFeatures : premiumFeatures;

  return (
    <PremiumCardContainer type={type}>
      <h3>{title}</h3>
      <span>
        <b>{price}</b> / {time}
      </span>
      <ul>
        {type !== 'Esencial' && (
          <h4>Todas las funciones del plan esencial y</h4>
        )}
        {features.map((feature, index) => (
          <li key={index}>
            <img src={checkIcon} alt="check" />
            {feature}
          </li>
        ))}
      </ul>
    </PremiumCardContainer>
  );
}

export default PremiumCard;
