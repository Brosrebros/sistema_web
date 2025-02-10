import React, { useState } from 'react';
import {
  AdvertiserDataContainer,
  AdvertiserOptions,
  PropertyAdvertiserContainer,
  ButtonsContainer,
  TextContainer,
  ButtonOptionsContainer,
  Option,
  ProblemContainer,
  SecondaryOption,
} from './PropertyAdvertiser.styles';
import CustomBadge from '../CustomBadge/CustomBadge';
import PrimaryCustomButton from '../CustomButtons/PrimaryCustomButton/PrimaryCustomButton';
import callIcon from '../../../assets/img/icons/call.svg';
import sendIcon from '../../../assets/img/icons/send.svg';
import shareIcon from 'assets/img/icons/share.svg';
import saveIcon from 'assets/img/icons/archive-add.svg';
import saveIconBold from 'assets/img/icons/archive-tick.svg';
import SecondaryCustomButton from '../CustomButtons/SecondaryCustomButton/SecondaryCustomButton';
import CustomInput from '../CustomFormUI/CustomInput/CustomInput';

function PropertyAdvertiser() {
  const [selectedOption, setSelectedOption] = useState('');
  const [isFavourite, setIsFavourite] = useState(false);

  const handleFavourite = () => {
    setIsFavourite(prev => !prev);
  };

  const handleOptionClick = option => {
    setSelectedOption(option);
  };

  return (
    <PropertyAdvertiserContainer>
      <h4>Información del anunciante</h4>

      <AdvertiserDataContainer>
        <AdvertiserOptions>
          <div>
            <img src="#" alt="" />

            <div>
              <h3>Inmobiliaria los Robles</h3>
              <CustomBadge color="turquoise">Inmobiliaria</CustomBadge>
            </div>
          </div>
          <ButtonsContainer fav={isFavourite}>
            <SecondaryCustomButton>
              <img src={shareIcon} alt="heart" />
            </SecondaryCustomButton>

            <SecondaryCustomButton onClick={handleFavourite}>
              <img src={isFavourite ? saveIconBold : saveIcon} alt="save" />
              {isFavourite ? 'Guardado' : 'Guardar'}
            </SecondaryCustomButton>

            <PrimaryCustomButton>
              <img src={callIcon} alt="sms" />
              Contactar
            </PrimaryCustomButton>
          </ButtonsContainer>
        </AdvertiserOptions>
        <TextContainer>
          <p>
            Inmobiliaria Los Robles es una empresa inmobiliaria comprometida con
            brindar soluciones integrales en el sector de bienes raíces. Nos
            especializamos en la compra, venta y alquiler de propiedades
            residenciales y comerciales, adecuamos las ofertas inmobiliarias
            para tu mejor percepción, realizamos estrategias de inversión
            inmobiliarias.
          </p>

          <span>Código de anunciante: INM-001</span>
        </TextContainer>
      </AdvertiserDataContainer>
      <TextContainer>
        <h5>Preguntas para el enunciante</h5>
        <p>Selecciona una o más preguntas, o escribe tu consulta.</p>
      </TextContainer>

      <ButtonOptionsContainer>
        <Option
          isSelected={selectedOption === 'option-1'}
          onClick={() => handleOptionClick('option-1')}
        >
          ¿Sigue disponible?
        </Option>
        <Option
          isSelected={selectedOption === 'option-2'}
          onClick={() => handleOptionClick('option-2')}
        >
          ¿La documentación está en regla?
        </Option>
        <Option
          isSelected={selectedOption === 'option-4'}
          onClick={() => handleOptionClick('option-4')}
        >
          ¿Cuando puedo hacer una visita?
        </Option>
        <div>
          <CustomInput type="text" placeholder="Escribe aquí" />
          <PrimaryCustomButton>
            <img src={sendIcon} alt="send" />
            Enviar
          </PrimaryCustomButton>
        </div>
      </ButtonOptionsContainer>

      <ProblemContainer>
        <TextContainer>
          <h5>¿Encontraste algún problema con este anuncio?</h5>
          <ButtonOptionsContainer>
            <SecondaryOption>
              No puedo contactar con el anunciante
            </SecondaryOption>
            <SecondaryOption>
              El inmueble esta vendido o reservado
            </SecondaryOption>
            <SecondaryOption>
              La descripción del inmueble no es correcta
            </SecondaryOption>
            <SecondaryOption>Información engañosa</SecondaryOption>

            <PrimaryCustomButton>Otros motivos</PrimaryCustomButton>
          </ButtonOptionsContainer>
        </TextContainer>
      </ProblemContainer>
    </PropertyAdvertiserContainer>
  );
}

export default PropertyAdvertiser;
