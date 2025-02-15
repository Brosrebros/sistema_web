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

function ShareModal() {
  const { modals, closeModal } = useModal();
  if (!modals.shareModal) return null;

  return (
    <ModalContainer>
      <ShareModalContainer>
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
            placeholder={'https://organizacionsanchez.com/buscarpropiedades...'}
            icon={copyIcon}
          />
        </div>
      </ShareModalContainer>
    </ModalContainer>
  );
}

export default ShareModal;
