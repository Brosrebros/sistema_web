import React from 'react';
import ModalContainer from 'components/custom/ModalContainer/ModalContainer';
import { useModal } from 'modalContext';
import {
  SettingsModalContainer,
  AltButton,
  CloseButton,
  OptionContainer,
} from './SettingsModal.styles';

import CustomSelect from 'components/custom/CustomSelect/CustomSelect';
import { motion } from 'framer-motion';
import arrowIcon from 'assets/img/icons/arrow-down.svg';
import settingsIcon from 'assets/img/icons/setting-2.svg';
import closeIcon from 'assets/img/icons/close.svg';

function SettingsModal() {
  const { modals, closeModal } = useModal();
  if (!modals.settingsModal) return null;

  const temaOptions = [
    { value: 'Oscuro', label: 'Oscuro' },
    { value: 'Claro', label: 'Claro' },
  ];

  const regionOptions = [
    { value: 'Perú', label: 'Perú' },
    { value: 'Argentina', label: 'Argentina' },
  ];

  return (
    <ModalContainer>
      <motion.div
        initial={{ y: 1080, opacity: 1 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 1080, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.3, 0.3, 0.6, 1] }}
      >
        <SettingsModalContainer onClick={e => e.stopPropagation()}>
          <CloseButton onClick={() => closeModal('settingsModal')}>
            <img src={closeIcon} alt="close" />
          </CloseButton>
          <h3>Configuración</h3>
          <div>
            <AltButton>
              <img src={settingsIcon} alt="settings" />
              <span>General</span>
            </AltButton>
            <div>
              <OptionContainer>
                <div>
                  <h4>Tema</h4>
                  <div style={{ width: '120px' }}>
                    <CustomSelect
                      id="tema"
                      name="tema"
                      value="Sistema"
                      placeholder="Sistema"
                      options={temaOptions}
                      background="form"
                    >
                      <img src={arrowIcon} alt="arrow" />
                    </CustomSelect>
                  </div>
                </div>
                <p>
                  Personaliza la apariencia de la página alternando entre el
                  modo claro y oscuro, diseñado para tu comodidad visual en
                  cualquier momento del día.
                </p>
              </OptionContainer>
              <OptionContainer>
                <div>
                  <h4>Región</h4>
                  <div style={{ width: '110px' }}>
                    <CustomSelect
                      id="tema"
                      name="tema"
                      value="Sistema"
                      placeholder="Perú"
                      options={regionOptions}
                      background="form"
                    >
                      <img src={arrowIcon} alt="arrow" />
                    </CustomSelect>
                  </div>
                </div>
                <p>
                  Personaliza tu experiencia configurando tu región. Esto te
                  permitirá recibir resultados más relevantes y ofertas locales
                  adaptadas a tu ubicación.
                </p>
              </OptionContainer>
            </div>
          </div>
        </SettingsModalContainer>
      </motion.div>
    </ModalContainer>
  );
}

export default SettingsModal;
