import React, { useState } from 'react';
import {
  AdvertiserDataContainer,
  AdvertiserOptions,
  PropertyAdvertiserContainer,
  ButtonsContainer,
  WtspButton,
  TextContainer,
  ButtonOptionsContainer,
  Option,
  ProblemContainer,
  SecondaryOption,
} from './PropertyAdvertiser.styles';
import CustomBadge from '../CustomBadge/CustomBadge';
import PrimaryCustomButton from '../CustomButtons/PrimaryCustomButton/PrimaryCustomButton';
import callIcon from '../../../assets/img/icons/call.svg';
import wtspIcon from '../../../assets/img/icons/whatsapp.svg';
import smsIcon from '../../../assets/img/icons/sms.svg';
import sendIcon from '../../../assets/img/icons/send.svg';

function PropertyAdvertiser() {
  const [selectedOption, setSelectedOption] = useState('option-2');

  const handleOptionClick = option => {
    setSelectedOption(option);
  };

  return (
    <PropertyAdvertiserContainer>
      <AdvertiserDataContainer>
        <AdvertiserOptions>
          <div>
            <img src="#" alt="advertiser" />

            <div>
              <h4>Sanchez Real State</h4>
              <CustomBadge color="turquoise">Inmobiliaria</CustomBadge>
            </div>
          </div>
          <ButtonsContainer>
            <PrimaryCustomButton>
              <img src={callIcon} alt="call" />
            </PrimaryCustomButton>
            <WtspButton>
              <img src={wtspIcon} alt="whatsapp" />
              Whatsapp
            </WtspButton>
            <PrimaryCustomButton>
              <img src={smsIcon} alt="sms" />
              Contactar
            </PrimaryCustomButton>
          </ButtonsContainer>
        </AdvertiserOptions>
        <TextContainer>
          <p>
            Sanchez Real State es una empresa inmobiliaria comprometida con
            brindar soluciones integrales en el sector de bienes raíces. Nos
            especializamos en la compra, venta y alquiler de propiedades
            residenciales y comerciales, adecuamos las ofertas inmobiliarias
            para tu mejor percepcion, realizamos estrategias de inversion
            inmobilarias.
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
          <input type="text" placeholder="Escribe aquí" />
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
