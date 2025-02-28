import React from 'react';
import ModalContainer from 'components/custom/ModalContainer/ModalContainer';
import {
  ReportModalContainer,
  CloseButton,
  LabelContainer,
  DetailsContainer,
} from './ReportModal.styles';
import PrimaryCustomButton from 'components/custom/CustomButtons/PrimaryCustomButton/PrimaryCustomButton';
import { useModal } from 'modalContext';
import closeIcon from 'assets/img/icons/close.svg';
import dangerIcon from 'assets/img/icons/danger.svg';
import { motion } from 'framer-motion';

function ReportModal() {
  const { modals, closeModal, openModal } = useModal();
  if (!modals.reportModal) return null;
  return (
    <ModalContainer>
      <motion.div
        initial={{ y: 1080, opacity: 1 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 1080, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.3, 0.3, 0.6, 1] }}
      >
        <ReportModalContainer onClick={e => e.stopPropagation()}>
          <CloseButton onClick={() => closeModal('reportModal')}>
            <img src={closeIcon} alt="close" />
          </CloseButton>
          <div>
            <h3>Denuncia este anuncio</h3>
            <p>
              Tu denuncia será revisada y tomada en cuenta para garantizar la
              seguridad y confianza en la plataforma.
            </p>
          </div>
          <div>
            <h4>¿Qué deseas reportar?</h4>
            <div>
              <LabelContainer>
                <input type="checkbox" id="1" />
                <label htmlFor="1">No puedo contactar con el vendedor</label>
              </LabelContainer>
              <LabelContainer>
                <input type="checkbox" id="2" />
                <label htmlFor="2">El inmueble está vendido o reservado</label>
              </LabelContainer>
              <LabelContainer>
                <input type="checkbox" id="3" />
                <label htmlFor="3">
                  La descripción del inmueble no es correcta
                </label>
              </LabelContainer>
              <LabelContainer>
                <input type="checkbox" id="4" />
                <label htmlFor="4">Información falsa o engañosa</label>
              </LabelContainer>
              <LabelContainer>
                <input type="checkbox" id="5" />
                <label htmlFor="5">Contenido ofensivo o inapropiado</label>
              </LabelContainer>
              <LabelContainer>
                <input type="checkbox" id="6" />
                <label htmlFor="6">Otros motivos</label>
              </LabelContainer>
            </div>
            <DetailsContainer>
              <h4>Cuéntanos más detalles</h4>
              <div>
                <textarea
                  name="report"
                  id="report"
                  placeholder="¿Qué sucedio?"
                />
                <div>
                  <PrimaryCustomButton onClick={() => openModal('sendModal')}>
                    <img src={dangerIcon} alt="danger" />
                    Reportar
                  </PrimaryCustomButton>
                  <span>
                    Al continuar, aceptas las <u>Condiciones de uso</u> y el{' '}
                    <u>Aviso de privacidad</u> de Organización Sanchez
                  </span>
                </div>
              </div>
            </DetailsContainer>
          </div>
        </ReportModalContainer>
      </motion.div>
    </ModalContainer>
  );
}

export default ReportModal;
