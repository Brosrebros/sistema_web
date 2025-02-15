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

function ReportModal() {
  const { modals, closeModal, openModal } = useModal();
  if (!modals.reportModal) return null;
  return (
    <ModalContainer>
      <ReportModalContainer>
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
              <input type="checkbox" />
              No puedo contactar con el vendedor
            </LabelContainer>
            <LabelContainer>
              <input type="checkbox" />
              El inmueble está vendido o reservado
            </LabelContainer>
            <LabelContainer>
              <input type="checkbox" />
              La descripción del inmueble no es correcta
            </LabelContainer>
            <LabelContainer>
              <input type="checkbox" />
              Información falsa o engañosa
            </LabelContainer>
            <LabelContainer>
              <input type="checkbox" />
              Contenido ofensivo o inapropiado
            </LabelContainer>
            <LabelContainer>
              <input type="checkbox" />
              Otros motivos
            </LabelContainer>
          </div>
          <DetailsContainer>
            <h4>Cuéntanos más detalles</h4>
            <div>
              <textarea name="report" id="report" placeholder="¿Qué sucedio?" />
              <div>
                <PrimaryCustomButton onClick={() => openModal('sendModal')}>
                  <img src={dangerIcon} alt="danger" />
                  Reportar
                </PrimaryCustomButton>
                <span>
                  Al continuar, aceptas las <u>Condiciones de uso</u> y el
                  <u>Aviso de privacidad</u> de Organización Sanchez
                </span>
              </div>
            </div>
          </DetailsContainer>
        </div>
      </ReportModalContainer>
    </ModalContainer>
  );
}

export default ReportModal;
