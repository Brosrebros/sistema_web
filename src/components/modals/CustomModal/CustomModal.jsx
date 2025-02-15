import React from 'react';
import { CustomModalContainer } from './CustomModal.styles';
import { useModal } from 'modalContext';
import ModalContainer from 'components/custom/ModalContainer/ModalContainer';

function SuccessModal() {
  const { modals } = useModal();
  if (!modals.successModal) return null;

  return (
    <ModalContainer>
      <CustomModalContainer>
        <div>
          <h3>¡Suscripción exitosa!</h3>
          <p>
            Ahora recibirás las últimas novedades, ofertas y actualizaciones
            directamente en tu correo electrónico.
          </p>
        </div>
      </CustomModalContainer>
    </ModalContainer>
  );
}

function SendModal() {
  const { modals } = useModal();
  if (!modals.sendModal) return null;

  return (
    <ModalContainer>
      <CustomModalContainer>
        <div>
          <h3>Reporte enviado con éxito</h3>
          <p>
            Nuestro equipo revisará tu reporte y tomará las medidas necesarias.
            Gracias por ayudarnos a mantener un espacio seguro y confiable.
          </p>
        </div>
      </CustomModalContainer>
    </ModalContainer>
  );
}

export { SuccessModal, SendModal };
