import React from 'react';
import ModalContainer from 'components/custom/ModalContainer/ModalContainer';
import { ShareModalContainer, CloseButton } from './ShareModal.styles';
import { useModal } from 'modalContext';
import CustomInput from 'components/custom/CustomFormUI/CustomInput/CustomInput';

import copyIcon from 'assets/img/icons/copy.svg';
import closeIcon from 'assets/img/icons/close.svg';
import wtspIcon from 'assets/img/icons/ri_whatsapp-fill.svg';
import twitterIcon from 'assets/img/icons/devicon_twitter.svg';
import facebookIcon from 'assets/img/icons/ic_baseline-facebook.svg';
import instagramIcon from 'assets/img/icons/mdi_instagram.svg';
import { motion } from 'framer-motion';

function ShareModal() {
  const { modals, closeModal } = useModal();
  if (!modals.shareModal) return null;

  return (
    <ModalContainer>
      <motion.div
        initial={{ y: 1080, opacity: 1 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 1080, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.3, 0.3, 0.6, 1] }}
      >
        <ShareModalContainer onClick={e => e.stopPropagation()}>
          <CloseButton onClick={() => closeModal('shareModal')}>
            <img src={closeIcon} alt="close" />
          </CloseButton>
          <div>
            <h3>¡Compartir este anuncio!</h3>
            <p>Comparte este anuncio fácilmente con amigos o familiares</p>
          </div>
          <div>
            <img src={wtspIcon} alt="whatsapp" />
            <img src={twitterIcon} alt="twitter" />
            <img src={facebookIcon} alt="facebook" />
            <img src={instagramIcon} alt="instagram" />
          </div>
          <div>
            <h3>Copiar enlace</h3>
            <CustomInput
              placeholder={
                'https://organizacionsanchez.com/buscarpropiedades...'
              }
              icon={copyIcon}
            />
          </div>
        </ShareModalContainer>
      </motion.div>
    </ModalContainer>
  );
}

export default ShareModal;
