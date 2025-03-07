import React, { useState } from 'react';
import CustomSelect from 'components/custom/CustomSelect/CustomSelect';
import arrowIcon from 'assets/img/icons/arrow-down.svg';
import settingsIcon from 'assets/img/icons/setting-2.svg';
import styled from 'styled-components';
import CustomInput from 'components/custom/CustomFormUI/CustomInput/CustomInput';
import lupeIcon from 'assets/img/icons/search-normal.svg';
import brushIcon from 'assets/img/icons/brush-2.svg';
import boxIcon from 'assets/img/icons/box.svg';
import arrowRight from 'assets/img/icons/arrow-right.svg';

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
    }
  }

  & > div:first-child {
    padding: 32px 24px;
    gap: 32px;

    & > h3 + div {
      width: 100%;
    }
  }

  & > div:last-child {
    padding: 32px;
    gap: 40px;

    & > div:first-child {
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
      }
    }
  }

  & > span {
    display: block;
    height: 100%;
    background-color: #c3c3c3;
    width: 1px;
  }

  & + footer,
  & + footer + footer {
    display: none;
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

  h4 {
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 1.19rem;
    line-height: 116%;
    color: black;
    margin: 0px;
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
  const [isActive, setIsActive] = useState('access');
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
    <SettingsModalContainer>
      <div>
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
        <div>
          <h3>Accesibilidad y pantalla</h3>
          <p>Gestiona como ves el contenido en la organización Sanchez.</p>
        </div>
        <OptionContainer>
          <h4>Tema</h4>
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
            >
              <img src={arrowIcon} alt="arrow" />
            </CustomSelect>
          </div>
        </OptionContainer>
        <OptionContainer>
          <h4>Región</h4>
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
