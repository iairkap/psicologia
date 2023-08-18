import React, { ReactNode } from "react";
import Modal from "react-modal";

interface MyModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children: ReactNode;
}

const MyModal: React.FC<MyModalProps> = ({ isOpen, closeModal, children }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel="Modal">
      {children}
      <button onClick={closeModal}>Cerrar</button>
    </Modal>
  );
};

export default MyModal;
