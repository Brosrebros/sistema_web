import React from 'react';
import {
  StandaloneLayoutStyled,
  StandaloneContainer,
  StandaloneNavigate,
  TextContainer,
  CardContainer,
  TextBanner,
  DataCard,
  SideDataContainer,
} from './StandaloneLayout.styles';
import SecondaryCustomButton from '../CustomButtons/SecondaryCustomButton/SecondaryCustomButton';
import arrowIcon from '../../../assets/img/icons/arrow-left.svg';
import arrowDownIcon from '../../../assets/img/icons/arrow-down.svg';
import arrowUpIcon from '../../../assets/img/icons/arrow-up.svg';
import { Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function StandaloneLayout({ type, title, children }) {
  const cardContents = [
    {
      id: 'option-1',
      title: '¿Cuál es la diferencia entre el plan Esencial y el plan Premium?',
      description:
        'El plan Esencial es gratuito y te permite publicar y gestionar propiedades de forma sencilla, con herramientas básicas y una cantidad limitada de publicaciones. El plan Premium desbloquea todos los beneficios, incluyendo publicaciones ilimitadas, mayor visibilidad, herramientas avanzadas de análisis y soporte prioritario.',
    },
    {
      id: 'option-2',
      title:
        '¿Qué sucede si alcanzo el límite de publicaciones en el plan Esencial?',
      description:
        'Si alcanzas el límite de publicaciones en el plan Esencial, puedes eliminar algunas de tus publicaciones activas disponibles para agregar otras nuevas. Si deseas gestionar múltiples anuncios al mismo tiempo, puedes actualizar al plan Premium y disfrutar de publicaciones ilimitadas.',
    },
    {
      id: 'option-3',
      title:
        '¿Qué es el check de verificado y cómo beneficia a los vendedores Premium?',
      description:
        'El check de verificado es una insignia exclusiva para usuarios con el plan Premium que certifica su autenticidad como vendedores confiables. Esto brinda mayor seguridad a los compradores, aumentando la credibilidad de tus publicaciones y mejorando las oportunidades de contacto y cierre de ventas.',
    },
    {
      id: 'option-4',
      title:
        '¿Puedo comenzar con el plan Esencial y actualizar a Premium después?',
      description:
        'Sí, puedes comenzar con el plan Esencial y actualizar a Premium en cualquier momento. La actualización se aplicará de inmediato, y podrás disfrutar de todos los beneficios adicionales sin perder tus publicaciones activas.',
    },
    {
      id: 'option-5',
      title: '¿Puedo gestionar proyectos inmobiliarios con el plan Esencial?',
      description:
        'No, la gestión de proyectos inmobiliarios es una función exclusiva del plan Premium. Con este plan, puedes publicar y administrar desarrollos completos, incluyendo múltiples unidades y fases del proyecto. Además, el plan Premium te permite crear un perfil de vendedor como agente inmobiliario, inmobiliaria o constructora, brindando mayor credibilidad y alcance a tus publicaciones.',
    },
  ];
  const [activeCards, setActiveCards] = useState(
    new Set(cardContents.map(card => card.id))
  );
  const navigate = useNavigate();

  const handleActiveButton = id => {
    setActiveCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <>
      <StandaloneLayoutStyled type={type}>
        <StandaloneContainer>
          <StandaloneNavigate>
            <SecondaryCustomButton
              onClick={() => {
                navigate(-1);
              }}
            >
              <img src={arrowIcon} alt="arrow" />
            </SecondaryCustomButton>
            <h3>{title}</h3>
          </StandaloneNavigate>
          <Outlet />
          {children}
        </StandaloneContainer>

        {type === 'premium' ? (
          <>
            <SideDataContainer>
              <div style={{ height: '100%' }}>
                <TextContainer>
                  <h3>Resuelve tus dudas y elige el plan perfecto para ti</h3>
                  <p>
                    Descubre todo lo que necesitas saber sobre nuestros planes
                    Esencial y Premium. Conoce las diferencias, beneficios y
                    cómo aprovechar al máximo cada uno para impulsar tus
                    publicaciones y ventas.
                  </p>
                </TextContainer>

                <TextBanner>
                  <TextContainer>
                    <h3>Resuelve tus dudas y elige el plan perfecto para ti</h3>
                    <p>
                      Descubre todo lo que necesitas saber sobre nuestros planes
                      Esencial y Premium. Conoce las diferencias, beneficios y
                      cómo aprovechar al máximo cada uno para impulsar tus
                      publicaciones y ventas.
                    </p>
                  </TextContainer>
                </TextBanner>
              </div>

              <CardContainer>
                {cardContents.map(card => (
                  <DataCard
                    key={card.id}
                    isActive={activeCards.has(card.id)}
                    onClick={() => handleActiveButton(card.id)}
                  >
                    <div>
                      <h4>{card.title}</h4>
                      <img
                        src={
                          activeCards.has(card.id) ? arrowUpIcon : arrowDownIcon
                        }
                        alt={
                          activeCards.has(card.id) ? 'arrow up' : 'arrow down'
                        }
                      />
                    </div>
                    <p>{card.description}</p>
                  </DataCard>
                ))}
              </CardContainer>
            </SideDataContainer>
          </>
        ) : type === 'payment' ? (
          <></>
        ) : null}
      </StandaloneLayoutStyled>
    </>
  );
}

export default StandaloneLayout;
