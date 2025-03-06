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
import callIcon from 'assets/img/icons/call.svg';
import sendIcon from 'assets/img/icons/send.svg';
import shareIcon from 'assets/img/icons/share.svg';
import saveIcon from 'assets/img/icons/archive-add.svg';
import saveIconBold from 'assets/img/icons/archive-tick.svg';
import SecondaryCustomButton from '../CustomButtons/SecondaryCustomButton/SecondaryCustomButton';
import CustomInput from '../CustomFormUI/CustomInput/CustomInput';
import { useModal } from 'modalContext';
import placeholderIcon from 'assets/img/Main-Icon.jpg';
import premiumIcon from 'assets/img/icons/ph_seal-check-fill.svg';
import { rootPaths } from 'routes/paths';
import { useNavigate } from 'react-router-dom';

function PropertyAdvertiser() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');
  const { openModal, closeModal } = useModal();
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
          <div
            onClick={() => navigate(`/${rootPaths.sellerProfileRoot}`)}
            style={{ cursor: 'pointer' }}
          >
            <img src={placeholderIcon} alt="Sanchez Real Estate" />
            <div>
              <h3>
                Sanchez Real Estate <img src={premiumIcon} alt="#" />
              </h3>
              <CustomBadge color="turquoise">Inmobiliaria</CustomBadge>
            </div>
          </div>
          <ButtonsContainer fav={isFavourite}>
            <SecondaryCustomButton onClick={() => openModal('shareModal')}>
              <img src={shareIcon} alt="heart" />
            </SecondaryCustomButton>

            <SecondaryCustomButton onClick={() => openModal('loginModal')}>
              <img src={saveIcon} alt="save" />
              Guardar
            </SecondaryCustomButton>

            <PrimaryCustomButton onClick={() => openModal('contactModal')}>
              <img
                src={callIcon}
                alt="sms"
              />
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
        <div>
          <CustomInput type="text" placeholder="Escribe aquí" />
          <PrimaryCustomButton>
            <img src={sendIcon} alt="send" />
            Enviar
          </PrimaryCustomButton>
        </div>
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
      </ButtonOptionsContainer>

      <ProblemContainer>
        <TextContainer>
          <h5>¿Encontraste algún problema con este anuncio?</h5>
          <ButtonOptionsContainer>
            <SecondaryOption onClick={() => openModal('reportModal')}>
              No puedo contactar con el anunciante
            </SecondaryOption>
            <SecondaryOption onClick={() => openModal('reportModal')}>
              El inmueble esta vendido o reservado
            </SecondaryOption>
            <SecondaryOption onClick={() => openModal('reportModal')}>
              La descripción del inmueble no es correcta
            </SecondaryOption>
            <SecondaryOption onClick={() => openModal('reportModal')}>
              Información engañosa
            </SecondaryOption>

            <PrimaryCustomButton onClick={() => openModal('reportModal')}>
              Otros motivos
            </PrimaryCustomButton>
          </ButtonOptionsContainer>
        </TextContainer>
      </ProblemContainer>
    </PropertyAdvertiserContainer>
  );
}

export default PropertyAdvertiser;
