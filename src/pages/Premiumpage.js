import React, { useState } from 'react';
import PremiumCard from 'components/custom/PremiumCard/PremiumCard';
import styled from 'styled-components';
import PrimaryCustomButton from 'components/custom/CustomButtons/PrimaryCustomButton/PrimaryCustomButton';
import { rootPaths } from 'routes/paths';
import { useNavigate } from 'react-router-dom';

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

    @media (max-width: 1200px) {
      font-size: 1.38rem;
      height: 16px;
    }
  }

  p {
    width: 100%;
    font-weight: 400;
    font-size: 1rem;
    line-height: 122%;
    text-align: center;
    color: #424242;
    margin: 0px;

    @media (max-width: 1200px) {
      font-size: 0.81rem;
    }
  }

  @media (max-width: 1200px) {
    gap: 20px;
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
    cursor: pointer;

    @media (max-width: 1200px) {
      height: 36px;
    }
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

    @media (max-width: 1200px) {
      font-size: 0.62rem;
    }
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

  @media (max-width: 1200px) {
    font-size: 0.81rem;
  }
`;

const AnualButtonStyled = styled.button`
  width: auto;
  max-height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;
  outline: none;
  background-color: #00000000;
  border-radius: 12px;
  padding: 12px 16px;

  font-size: 1rem;
  font-weight: normal;
  font-family: 'Aptos';
  color: ${props => (props.isActive ? 'white' : '#424242')};
  line-height: 70%;

  @media (max-width: 1200px) {
    font-size: 0.81rem;
  }
`;

const CardContainer = styled.div`
  width: 100%;
  max-width: 724px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
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

      @media (max-width: 1200px) {
        font-size: 1.12rem;
        line-height: 13px;
      }
    }

    span {
      font-weight: 400;
      font-size: 1rem;
      color: black;

      @media (max-width: 1200px) {
        height: 19px;
      }

      b {
        font-weight: 700;
        font-size: 2.25rem;
        color: black;

        @media (max-width: 1200px) {
          font-size: 1.81rem;
        }
      }
    }

    p {
      font-weight: 400;
      font-size: 1rem;
      line-height: 122%;
      color: #424242;
      margin: 0px;

      @media (max-width: 1200px) {
        font-size: 0.81rem;
      }
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
        padding: 6px;

        @media (max-width: 1200px) {
          font-size: 0.62rem;
        }
      }
    }
  }

  #mobile {
    display: none;
  }

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    padding: 0px 28px;
    gap: 16px;

    #desktop {
      display: none;
    }

    #mobile {
      display: flex;
    }
  }
`;

const PaymentModal = styled.div`
  display: none;

  @media (max-width: 1200px) {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #ffffff;
    border-radius: 12px 12px 0px 0px;
    position: fixed;
    bottom: 0;
    transform: ${({ open }) =>
      open ? 'translateY(0px)' : 'translateY(700px)'};
    transition: all 0.3s ease-in-out;

    & > div:first-child {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 8px;

      & > span {
        width: 60px;
        height: 4px;
        border-radius: 100px;
        background-color: #c3c3c3;
      }
    }

    & > div:nth-child(2) {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 12px 20px 24px 20px;
      gap: 16px;

      & > div:nth-child(7) {
        padding-bottom: 0px;
      }

      & > div:last-child {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #f2f2f2;
        padding: 20px;
        gap: 24px;
        border-radius: 12px;
        margin-top: calc(40px - 16px);

        & > button {
          width: 100%;
        }

        & > p {
          font-family: 'Roboto';
          font-weight: 400;
          font-size: 0.62rem;
          color: #424242;
          margin-bottom: 0px;
        }
      }
    }
  }
`;

const PaymentTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;

  h3 {
    font-weight: 700;
    height: 13px;
    font-size: 1.12rem;
    color: black;
    margin: 0px;
    display: flex;
    align-items: center;
  }

  span {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 10px;
    color: black;

    b {
      font-weight: 700;
      font-size: 1.81rem;
      color: black;
      line-height: 24px;
    }

    p {
      max-height: 24px;
      font-weight: 400;
      font-size: 0.81rem;
      color: black;
      margin: 0px;
      line-height: 11px;
    }
  }
`;

const PaymentData = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  gap: 10px;

  p {
    font-weight: 400;
    font-size: 0.94rem;
    color: black;
    margin: 0px;
    line-height: 9px !important;
  }

  b {
    font-weight: 900;
    color: black;
    margin: 0px;
    line-height: 11px;
  }

  & > p:nth-child(even) {
    text-align: right;
  }

  padding-bottom: 24px;
`;

const Separador = styled.span`
  display: block;
  width: 100%;
  height: 1px;
  background-color: #dbdbdb;
`;

const Wrapper = styled.div`
  display: none;

  @media (max-width: 1200px) {
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: #00000099;
    position: fixed;
    bottom: 0;
    opacity: ${({ open }) => (open ? '1' : '0')};
    pointer-events: ${({ open }) => (open ? 'auto' : 'none')};
    transition: opacity 0.2s ease;
  }
`;

function Premiumpage() {
  const [isActive, setIsActive] = useState('anual');
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleActiveButton = button => {
    setIsActive(button);
  };

  const handleModal = () => {
    setOpen(prev => !prev);
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
          <div
            onClick={() => {
              handleActiveButton('anual');
            }}
          >
            <AnualButtonStyled isActive={isActive === 'anual'}>
              Anual
            </AnualButtonStyled>
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
          price={isActive === 'anual' ? 'S/. 36.00' : 'S/. 45.00'}
          time={isActive === 'anual' ? 'año' : 'mes'}
        />
      </CardContainer>
      <DetailsContainer>
        <div>
          <h3>Premium</h3>
          <span>
            <b>S/. 432.00</b> / año
          </span>
          <p>Facturación anual</p>
        </div>
        <div>
          <PrimaryCustomButton
            onClick={() => {
              navigate(`/${rootPaths.premiumRoot}/${rootPaths.paymentRoot}`);
            }}
            id="desktop"
          >
            Actualizar y pagar
          </PrimaryCustomButton>
          <PrimaryCustomButton
            onClick={() => {
              handleModal();
            }}
            id="mobile"
          >
            Actualizar y pagar
          </PrimaryCustomButton>
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
      <Wrapper
        open={open}
        onClick={() => {
          handleModal();
        }}
      />
      <PaymentModal open={open}>
        <div>
          <span></span>
        </div>

        <div>
          <PaymentTitle>
            <h3>Actualízate a Premium</h3>
            <span>
              <b>S/. 432.00</b>
              <p>/ año</p>
            </span>
          </PaymentTitle>

          <Separador />

          <PaymentData>
            <p>
              <b>Premium</b>
            </p>
            <p>S/. 432.00</p>
            <p>Se factura anualmente</p>
          </PaymentData>

          <Separador />

          <PaymentData>
            <p>Sub total</p>
            <p>S/. 432.00</p>
            <p>Impuesto</p>
            <p>S/. 00.00</p>
          </PaymentData>

          <Separador />

          <PaymentData>
            <p>
              <b>Sub total</b>
            </p>
            <p>
              <b>S/. 432.00</b>
            </p>
          </PaymentData>
          <div>
            <PrimaryCustomButton>Actualizar y pagar</PrimaryCustomButton>
            <p>
              Si confirmas tu suscripción, permitirás que la organización
              Sanchez efectúe cargos de futuros pagos conforme a las condiciones
              estipuladas. Siempre puedes cancelar tu suscripción.
            </p>
          </div>
        </div>
      </PaymentModal>
    </>
  );
}

export default Premiumpage;
