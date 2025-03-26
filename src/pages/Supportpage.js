import React from 'react';
import styled from 'styled-components';
import CustomInput from 'components/custom/CustomFormUI/CustomInput/CustomInput';
import CardButton from 'components/custom/CustomButtons/CardButton/CardButton';
import wtspIcon from 'assets/img/icons/whatsapp.svg';
import { rootPaths } from 'routes/paths';
import { useNavigate } from 'react-router-dom';
import arrowLeft from 'assets/img/icons/arrow-left.svg';

const SupportContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  @media (max-width: 1200px) {
    background-color: #ffffff;
    margin-top: -24px;
    padding: 20px;
    gap: 20px;

    & + footer {
      margin-top: -24px;
    }
  }
`;

const SupportBanner = styled.div`
  width: 100%;
  height: 444px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  background-color: #940000;
  border-radius: 12px;

  #mobile {
    display: none;
  }

  & > div:first-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;

    h2 {
      max-width: 39ch;
      font-family: 'Roboto';
      font-weight: 700;
      font-size: 1.75rem;
      line-height: 114%;
      text-align: center;
      color: #ffffff;
      margin: 0px;

      @media (max-width: 1200px) {
        font-size: 1.38rem;
        max-width: 100%;
      }
    }

    p {
      max-width: 70ch;
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 1rem;
      line-height: 137%;
      text-align: center;
      color: #ffffff;
      margin: 0px;

      @media (max-width: 1200px) {
        font-size: 0.81rem;
      }
    }

    @media (max-width: 1200px) {
      gap: 20px;
    }
  }

  & > div:last-child {
    width: 100%;
    max-width: 621px;
    display: grid;
    grid-template-columns: 500px auto;
    gap: 8px;

    @media (max-width: 1200px) {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 1200px) {
    height: 282px;
    gap: 24px;
    padding: 32px 20px;

    #mobile {
      display: flex;
    }

    #desktop {
      display: none;
    }
  }
`;

const CustomButton = styled.button`
  width: auto;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: 1px solid #ffffff;
  outline: none;
  background-color: rgba(148, 0, 0, 0);
  border-radius: 12px;
  padding: 12px 16px;
  transition: all 0.1 ease;
  font-size: 1em;
  font-weight: normal;
  font-family: 'Roboto';
  color: #ffffff;
  line-height: 100%;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  &:active {
    background: rgba(0, 0, 0, 0.1);
  }

  img {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 1200px) {
    font-size: 0.81rem;
  }
`;

const ButtonContainer = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  padding: 0px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    gap: 16px;

    & > div p {
      max-width: 24ch;
    }
  }
`;

const WhatsappBanner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  background-color: #233f75;
  border-radius: 12px;
  padding: 40px 24px;

  & > div:first-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 16px;

    h3 {
      font-family: 'Roboto';
      font-weight: 700;
      font-size: 1.44rem;
      line-height: 16px;
      text-align: center;
      color: #ffffff;
      margin: 0px;

      @media (max-width: 1200px) {
        font-size: 1.12rem;
        text-align: start;
      }
    }

    p {
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 1rem;
      line-height: 11px;
      text-align: center;
      color: #ffffff;
      margin: 0px;

      @media (max-width: 1200px) {
        font-size: 0.81rem;
        text-align: start;
      }
    }

    @media (max-width: 1200px) {
      gap: 12px;
    }
  }

  @media (max-width: 1200px) {
    width: 100vw;
    padding: 32px 20px;
    gap: 22px;
    border-radius: 0px;
  }
`;

const MobileHeader = styled.div`
  display: none;
  width: 100vw;
  height: 56px;
  justify-content: center;
  align-items: center;
  margin-top: -24px;
  background-color: #ffffff;
  padding: 0px 20px;

  & > div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    h4 {
      font-weight: 700;
      font-size: 0.94rem;
      line-height: 133%;
      text-align: center;
      color: black;
      margin: 0px;
    }

    img {
      width: 20px;
      height: 20px;
      position: absolute;
      left: 0;
    }
  }

  @media (max-width: 1200px) {
    display: flex;
  }
`;

function Supportpage() {
  const navigate = useNavigate();

  return (
    <>
      <MobileHeader>
        <div>
          <img src={arrowLeft} onClick={() => navigate(-1)} />
          <h4>Soporte</h4>
        </div>
      </MobileHeader>
      <SupportContainer>
        <SupportBanner>
          <div>
            <h2 id="desktop">Te damos la bienvenida al soporte de Sellblink</h2>
            <p id="desktop">
              ¿Con qué te gustaría recibir ayuda hoy? Puedes encargarte
              rápidamente de la mayoría de las cosas aquí, o conectarte con
              nosotros.
            </p>

            <h2 id="mobile">¿Con qué te gustaría recibir ayuda hoy?</h2>
            <p id="mobile">
              Puedes encargarte rápidamente de la mayoría de las cosas aquí, o
              conectarte con nosotros.
            </p>
          </div>

          <div>
            <CustomInput placeholder="Escribe aquí" />
            <CustomButton>Buscar</CustomButton>
          </div>
        </SupportBanner>

        <ButtonContainer>
          <CardButton
            option="option4"
            onClick={() => {
              navigate(`/${rootPaths.supportRoot}/terms`);
            }}
          />
          <CardButton option="option5" />
          <CardButton
            option="option6"
            onClick={() => {
              navigate(`/${rootPaths.supportRoot}/updates`);
            }}
          />
        </ButtonContainer>

        <WhatsappBanner>
          <div>
            <h3>¿No encontraste lo que buscabas?</h3>
            <p>
              Escríbenos directamente y nuestro equipo se pondrá en contacto.
            </p>
          </div>
          <CustomButton>
            <img src={wtspIcon} alt="whatsapp" />
            WhatsApp
          </CustomButton>
        </WhatsappBanner>
      </SupportContainer>
    </>
  );
}

export default Supportpage;
