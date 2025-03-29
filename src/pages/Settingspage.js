import React, { useState } from 'react';
import CustomSelect from 'components/custom/CustomSelect/CustomSelect';
import arrowIcon from 'assets/img/icons/arrow-down.svg';
import settingsIcon from 'assets/img/icons/setting-2.svg';
import styled from 'styled-components';
import CustomInput from 'components/custom/CustomFormUI/CustomInput/CustomInput';
import lupeIcon from 'assets/img/icons/search-normal.svg';
import brushIcon from 'assets/img/icons/brush-2.svg';
import boxIcon from 'assets/img/icons/box.svg';
import SecondaryCustomButton from 'components/custom/CustomButtons/SecondaryCustomButton/SecondaryCustomButton';
import arrowRight from 'assets/img/icons/arrow-right.svg';
import arrowLeft from 'assets/img/icons/arrow-left.svg';
import { useNavigate } from 'react-router-dom';

const SettingsModalContainer = styled.div`
  width: 100%;
  height: calc(100vh - 73px - 48px);
  display: grid;
  grid-template-columns: 420px 1px auto;
  background-color: #ffffff;
  border-radius: 12px;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    h3 {
      height: 16px;
      font-weight: 700;
      font-size: 1.44rem;
      line-height: 122%;
      color: black;
      margin: 0px;

      @media (max-width: 1200px) {
        display: none;
      }
    }
  }

  & > div:first-child {
    padding: 32px 24px;
    gap: 32px;

    & > h3 + div {
      width: 100%;
    }

    @media (max-width: 1200px) {
      width: 100vw;
      padding: 20px;
      gap: 20px;
      height: 100vh;
      filter: ${({ isActive }) =>
        isActive === 'access' ? 'brightness(60%)' : 'brightness(100%)'};
      transform: ${({ isActive }) =>
        isActive === 'access' ? 'translateX(-25vw)' : 'translateX(0vw)'};
      transition: all 0.2s ease-in-out;
      background-color: #ffffff;

      & > div:first-child {
        margin-left: -20px;
      }
    }
  }

  & > div:last-child {
    padding: 32px;
    gap: 40px;

    & > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 20px;

      p {
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 1rem;
        line-height: 137%;
        color: #424242;
        margin: 0px;

        @media (max-width: 1200px) {
          font-size: 0.81rem;
          text-align: center;
          width: 100%;
        }
      }

      @media (max-width: 1200px) {
        width: 100%;
      }
    }

    @media (max-width: 1200px) {
      position: absolute;
      height: 100vh;
      width: 100vw;
      top: 0px;
      transform: ${({ isActive }) =>
        isActive === 'access' ? 'translateX(0vw)' : 'translateX(100vw)'};
      background-color: #ffffff;
      transition: all 0.2s ease-in-out;
      padding: 20px;
      gap: 20px;

      & > div:first-child {
        margin-left: -20px;

        h3 {
          display: flex;

          @media (max-width: 1200px) {
            font-size: 0.94rem;
          }
        }
      }
    }
  }

  & > span {
    display: block;
    height: 100%;
    background-color: #c3c3c3;
    width: 1px;

    @media (max-width: 1200px) {
      display: none;
    }
  }

  & + footer,
  & + footer + footer {
    display: none;
  }

  @media (max-width: 1200px) {
    margin-top: -24px;
    grid-template-columns: 1fr;
    height: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 0px;
    height: 100vh;
    background-color: #ffffff;
  }
`;

const AltButton = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-radius: 12px;
  background-color: ${({ isActive }) => (isActive ? '#f2f2f2' : '#ffffff')};
  outline: ${({ isActive }) => (isActive ? '1px solid #c3c3c3' : '#ffffff')};
  transition: all 0.1s ease;
  cursor: pointer;
  box-sizing: border-box;

  & > span {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    font-size: 1em;
    font-weight: normal;
    color: #424242;
    line-height: 106%;

    img {
      width: 20px;
      height: 20px;
    }
  }

  &:hover {
    background-color: #f2f2f2;
  }

  &:active {
    background-color: #e4e4e4;
  }

  @media (max-width: 1200px) {
    background-color: #ffffff;
    outline: none;
    font-size: 0.81rem;
  }
`;

const AltButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
`;

const OptionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;

  #mobile {
    display: none;
  }

  h4 {
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 1.19rem;
    line-height: 116%;
    color: black;
    margin: 0px;

    @media (max-width: 1200px) {
      font-size: 0.94rem;
      margin: auto 0;
    }
  }

  & > div:last-child {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > div:last-child {
      display: flex;

      & > img {
        position: absolute;
        right: 16px;
        z-index: 2;
        background-color: white;
        transition: all 0.1s ease;
      }

      & > img + div {
        width: 100%;
      }
    }

    & > div:last-child:hover > img {
      background-color: #f9f9f9;
    }

    & > div:last-child:active > img {
      background-color: #ececec;
    }

    p {
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 1rem;
      line-height: 137%;
      color: #424242;
      margin: 0px;

      @media (max-width: 1200px) {
        font-size: 0.81rem;
      }
    }

    @media (max-width: 1200px) {
      grid-column: span 2;
    }
  }

  @media (max-width: 1200px) {
    display: grid;
    grid-template-columns: 2fr auto;

    #desktop {
      display: none;
    }

    #mobile {
      display: flex;
    }

    & > div:nth-child(2) {
      display: flex;

      & > img {
        position: absolute;
        right: 16px;
        z-index: 2;
        background-color: white;
        transition: all 0.1s ease;
      }

      & > img + div {
        width: 100%;
      }

      & > div:last-child:hover > img {
        background-color: #f9f9f9;
      }

      & > div:last-child:active > img {
        background-color: #ececec;
      }
    }
  }
`;

const StandaloneNavigate = styled.div`
  width: 100vw;
  display: none;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 40px;
  margin-top: -24px;
  background-color: #ffffff;

  button {
    border: 0px;

    @media (max-width: 1200px) {
      position: absolute;
      left: 4px;
    }
  }

  h3 {
    display: none;
  }

  @media (max-width: 1200px) {
    display: flex;
    padding: 0px;
    height: 56px;
    position: relative;
    justify-content: center;

    h3 {
      display: block !important;
      font-weight: 700;
      font-size: 0.94rem !important;
      line-height: 122%;
      text-align: center;
      color: black;
      margin: 0px;
    }
  }
`;

const temaOptions = [
  { value: 'Sistema', label: 'Sistema' },
  { value: 'Oscuro', label: 'Oscuro' },
  { value: 'Claro', label: 'Claro' },
];

const regionOptions = [
  { value: 'Perú', label: 'Perú' },
  { value: 'Argentina', label: 'Argentina' },
];

function Settingspage() {
  const [isActive, setIsActive] = useState('');
  const navigate = useNavigate();
  const [selecciones, setSelecciones] = useState({
    tema: temaOptions.length > 0 ? temaOptions[0].value : '',
    idioma: regionOptions.length > 0 ? regionOptions[0].value : '',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setSelecciones(prev => ({ ...prev, [name]: value }));
  };

  const handleActive = button => {
    setIsActive(button);
  };

  return (
    <SettingsModalContainer isActive={isActive}>
      <div>
        <StandaloneNavigate>
          <SecondaryCustomButton
            onClick={() => {
              navigate(-1);
            }}
          >
            <img src={arrowLeft} alt="arrow" />
          </SecondaryCustomButton>
          <h3>Configuración</h3>
        </StandaloneNavigate>
        <h3>Configuración</h3>
        <CustomInput
          placeholder={'Búsqueda de configuración'}
          icon={lupeIcon}
        />
        <AltButtonContainer>
          <AltButton
            isActive={isActive === 'access'}
            onClick={() => handleActive('access')}
          >
            <span>
              <img src={brushIcon} alt="brush" />
              Accesibilidad y pantalla
            </span>
            <img src={arrowRight} alt="arrow" />
          </AltButton>
          {/* <AltButton
            isActive={isActive === 'resources'}
            onClick={() => handleActive('resources')}
          >
            <span>
              <img src={boxIcon} alt="box" />
              Recursos adicionales
            </span>
            <img src={arrowRight} alt="arrow" />
          </AltButton> */}
        </AltButtonContainer>
      </div>
      <span></span>
      <div>
        <StandaloneNavigate>
          <SecondaryCustomButton
            onClick={() => {
              handleActive(' ');
            }}
          >
            <img src={arrowLeft} alt="arrow" />
          </SecondaryCustomButton>
          <h3>Accesibilidad y pantalla</h3>
        </StandaloneNavigate>
        <div>
          <h3>Accesibilidad y pantalla</h3>
          <p>Gestiona como ves el contenido en Sellblink</p>
        </div>
        <OptionContainer>
          <h4>Tema</h4>
          <CustomSelect
            name="tema"
            value={selecciones.tema}
            onChange={handleChange}
            placeholder="Tema"
            options={temaOptions}
            background="form"
            id="mobile"
          >
            <img src={arrowIcon} alt="arrow" />
          </CustomSelect>
          <div>
            <p>
              Personaliza la apariencia de la página alternando entre el modo
              claro y oscuro, diseñado para tu comodidad visual en cualquier
              momento del día.
            </p>
            <CustomSelect
              name="tema"
              value={selecciones.tema}
              onChange={handleChange}
              placeholder="Tema"
              options={temaOptions}
              background="form"
              id="desktop"
            >
              <img src={arrowIcon} alt="arrow" />
            </CustomSelect>
          </div>
        </OptionContainer>
        <OptionContainer>
          <h4>Región</h4>
          <CustomSelect
            name="idioma"
            value={selecciones.idioma}
            onChange={handleChange}
            placeholder="Región"
            options={regionOptions}
            background="form"
            id="mobile"
          >
            <img src={arrowIcon} alt="arrow" />
          </CustomSelect>
          <div>
            <p>
              Personaliza tu experiencia configurando tu región. Esto te
              permitirá recibir resultados más relevantes y ofertas locales
              adaptadas a tu ubicación.
            </p>

            <CustomSelect
              name="idioma"
              value={selecciones.idioma}
              onChange={handleChange}
              placeholder="Región"
              options={regionOptions}
              background="form"
              id="desktop"
            >
              <img src={arrowIcon} alt="arrow" />
            </CustomSelect>
          </div>
        </OptionContainer>
      </div>
    </SettingsModalContainer>
  );
}

export default Settingspage;
