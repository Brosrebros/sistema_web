import React from 'react';
import ModalContainer from 'components/custom/ModalContainer/ModalContainer';
import {
  ContactModalContainer,
  CloseButton,
  DataContainer,
  ButtonsContainer,
  SideDataContainer,
  CustomButton,
  MotionContainer,
  Handler,
} from './ContactModal.styles';
import { useModal } from 'modalContext';
import closeIcon from 'assets/img/icons/close.svg';
import { motion } from 'framer-motion';
import placeholderIcon from 'assets/img/Main-Icon.jpg';
import CustomBadge from 'components/custom/CustomBadge/CustomBadge';
import checkIcon from 'assets/img/icons/ph_seal-check-fill.svg';
import clockIcon from 'assets/img/icons/clock.svg';
import likeIcon from 'assets/img/icons/like.svg';
import userIcon from 'assets/img/icons/user.svg';
import whatsappIcon from 'assets/img/icons/whatsapp-gray.svg';
import callIcon from 'assets/img/icons/call-gray.png';
import smsIcon from 'assets/img/icons/sms-gray.svg';
import SecondaryCustomButton from 'components/custom/CustomButtons/SecondaryCustomButton/SecondaryCustomButton';
import PrimaryCustomButton from 'components/custom/CustomButtons/PrimaryCustomButton/PrimaryCustomButton';
import { rootPaths } from 'routes/paths';
import { useNavigate } from 'react-router-dom';

function ContactModal() {
  const { modals, closeModal, openModal } = useModal();
  if (!modals.contactModal) return null;

  const navigate = useNavigate();

  const handleCopy = text => {
    navigator.clipboard.writeText(text);
  };

  return (
    <ModalContainer>
      <motion.div
        initial={{ y: 1080, opacity: 1 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 1080, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.3, 0.3, 0.6, 1] }}
      >
        <Handler id="mobile">
          <div></div>
        </Handler>
        <ContactModalContainer onClick={e => e.stopPropagation()}>
          <CloseButton onClick={() => closeModal('contactModal')} id="desktop">
            <img src={closeIcon} alt="close" />
          </CloseButton>
          <img src={placeholderIcon} alt="icon" />
          <div>
            <h3>
              Sanchez Real Estate <img src={checkIcon} alt="check" />
            </h3>
            <DataContainer>
              <span>
                <h5>
                  <b>12</b> anuncios activos
                </h5>
              </span>

              <span>
                <h5>
                  Anuncia <b>desde 2024</b>
                </h5>
                <img src={clockIcon} alt="clock" id="desktop" />
              </span>
            </DataContainer>
            <CustomBadge color="turquoise">Inmobiliaria</CustomBadge>
            <ButtonsContainer id="desktop">
              <SecondaryCustomButton onClick={() => openModal('loginModal')}>
                <img src={likeIcon} alt="clock" />
                Recomendar
              </SecondaryCustomButton>
              <PrimaryCustomButton
                onClick={() => {
                  {
                    navigate(`/${rootPaths.sellerProfileRoot}`);
                    closeModal('contactModal');
                  }
                }}
              >
                <img src={userIcon} alt="clock" />
                Ver perfil
              </PrimaryCustomButton>
            </ButtonsContainer>
          </div>
          <ButtonsContainer id="mobile">
            <SecondaryCustomButton onClick={() => openModal('loginModal')}>
              <img src={likeIcon} alt="clock" />
              Recomendar
            </SecondaryCustomButton>
            <PrimaryCustomButton
              onClick={() => {
                {
                  navigate(`/${rootPaths.sellerProfileRoot}`);
                  closeModal('contactModal');
                }
              }}
            >
              <img src={userIcon} alt="clock" />
              Ver perfil
            </PrimaryCustomButton>
          </ButtonsContainer>
          <SideDataContainer>
            <div>
              <h4>Teléfono</h4>
              <div>
                <CustomButton onClick={() => handleCopy('+51 972 107 644')}>
                  <img src={whatsappIcon} alt="wtsp" />
                  <span>+51 972 107 644</span>
                </CustomButton>
                <CustomButton onClick={() => handleCopy('+51 061 634162')}>
                  <img src={callIcon} alt="wtsp" />
                  +51 061 634162
                </CustomButton>
              </div>
            </div>
            <div>
              <h4>Correo electrónico</h4>
              <CustomButton
                onClick={() =>
                  handleCopy('sanchezrealestate@organizacionsanchez.com')
                }
                id="row"
              >
                <img src={smsIcon} alt="wtsp" />
                <span>sanchezrealestate@organizacionsanchez.com</span>
              </CustomButton>
            </div>
          </SideDataContainer>
        </ContactModalContainer>
      </motion.div>
    </ModalContainer>
  );
}

export default ContactModal;
