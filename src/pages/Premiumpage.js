import React, { useState } from 'react';
import PremiumCard from 'components/custom/PremiumCard/PremiumCard';
import styled from 'styled-components';
import PrimaryCustomButton from 'components/custom/CustomButtons/PrimaryCustomButton/PrimaryCustomButton';

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  max-width: 534px;

  h3 {
    font-weight: 700;
    font-size: 1.44rem;
    color: black;
    margin: 0px;
  }

  p {
    width: 100%;
    font-weight: 400;
    font-size: 1rem;
    line-height: 122%;
    text-align: center;
    color: #424242;
    margin: 0px;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px;
  background-color: #f2f2f2;
  border: 1px solid #dbdbdb;
  border-radius: 16px;

  & > div:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 0px 3px;
    background-color: ${props => (props.isActive ? '#940000' : '#f2f2f2')};
    border-radius: 12px;
  }

  span {
    height: 29px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 12px;
    background-color: #ffffff;
    border-radius: 12px;
    border: 1px solid #dbdbdb;

    font-weight: 400;
    font-size: 0.81rem;
    line-height: 122%;
    color: #424242;
  }
`;

const TabButtonStyled = styled.button`
  width: auto;
  max-height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;
  outline: none;
  background-color: ${props => (props.isActive ? '#940000' : '#f2f2f2')};
  border-radius: 12px;
  padding: 12px 16px;
  transition: all 0.2s ease;

  font-size: 1rem;
  font-weight: normal;
  font-family: 'Aptos';
  color: ${props => (props.isActive ? 'white' : '#424242')};
  line-height: 70%;

  &:hover {
    filter: brightness(0.9);
  }
`;

const CardContainer = styled.div`
  width: 100%;
  max-width: 724px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;
`;

const DetailsContainer = styled.div`
  width: 100%;
  max-width: 724px;
  display: grid;
  grid-template-columns: 290px auto;
  gap: 10px;
  padding: 10px;

  & > div:first-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;

    h3 {
      font-weight: 700;
      font-size: 1.44rem;
      color: black;
      margin: 0px;
    }

    span {
      font-weight: 400;
      font-size: 1rem;
      color: black;

      b {
        font-weight: 700;
        font-size: 2.25rem;
        color: black;
      }
    }

    p {
      font-weight: 400;
      font-size: 1rem;
      line-height: 122%;
      color: #424242;
      margin: 0px;
    }
  }

  & > div:last-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    button {
      width: 100%;
    }

    & > div:last-child {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 6px;

      p {
        font-weight: 400;
        font-size: 0.81rem;
        line-height: 122%;
        color: #424242;
        margin: 0px;
      }
    }
  }
`;

function Premiumpage() {
  const [isActive, setIsActive] = useState('anual');

  const handleActiveButton = button => {
    setIsActive(button);
  };

  return (
    <>
      <TitleContainer>
        <h3>Actualízate a premium</h3>
        <p>
          Lleva tus publicaciones al siguiente nivel con mayor visibilidad,
          herramientas avanzadas y acceso prioritario a beneficios exclusivos.
          Destaca tus propiedades y maximiza tus ventas con un solo clic.
        </p>
        <ButtonsContainer isActive={isActive === 'anual'}>
          <div>
            <TabButtonStyled
              isActive={isActive === 'anual'}
              onClick={() => {
                handleActiveButton('anual');
              }}
            >
              Anual
            </TabButtonStyled>
            <span>Mejor precio</span>
          </div>
          <TabButtonStyled
            isActive={isActive === 'mensual'}
            onClick={() => {
              handleActiveButton('mensual');
            }}
          >
            Mensual
          </TabButtonStyled>
        </ButtonsContainer>
      </TitleContainer>
      <CardContainer>
        <PremiumCard
          type="esencial"
          title="Esencial"
          price="Gratis"
          time="siempre"
        />
        <PremiumCard
          type="premium"
          title="Premium"
          price={isActive === 'anual' ? 'S/ . 36.00' : 'S/ . 45.00'}
          time={isActive === 'anual' ? 'año' : 'mes'}
        />
      </CardContainer>
      <DetailsContainer>
        <div>
          <h3>Premium</h3>
          <span>
            <b>S/.432.00</b> / año
          </span>
          <p>Facturación anual</p>
        </div>
        <div>
          <PrimaryCustomButton>Actualizar y pagar</PrimaryCustomButton>
          <div>
            <p>
              Si te suscribes, aceptas los{' '}
              <u>Términos de servicio de contratación</u>. Las suscripciones se
              renuevan automáticamente hasta que se cancelan.{' '}
              <u>Cancelar en cualquier momento</u>, al menos 24 horas antes de
              la renovación para evitar cargos adicionales. Administra tu
              suscripción a través de la plataforma en la que te suscribiste.
            </p>
          </div>
        </div>
      </DetailsContainer>
    </>
  );
}

export default Premiumpage;
