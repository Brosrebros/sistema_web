import { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modals, setModals] = useState({
    loginModal: false,
    shareModal: false,
    reportModal: false,
    sendModal: false,
    successModal: false,
    settingsModal: false,
    contactModal: false,
  });

  const openModal = modalName => {
    setModals({
      loginModal: false,
      shareModal: false,
      reportModal: false,
      sendModal: false,
      successModal: false,
      settingsModal: false,
      contactModal: false,

      [modalName]: true,
    });
  };

  const closeModal = () => {
    setModals({
      loginModal: false,
      shareModal: false,
      reportModal: false,
      sendModal: false,
      successModal: false,
      settingsModal: false,
      contactModal: false,
    });
  };

  return (
    <ModalContext.Provider value={{ modals, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  return useContext(ModalContext);
};
