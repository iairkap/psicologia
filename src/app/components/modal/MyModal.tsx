import React, { ReactNode } from "react";
import Modal from "react-modal";

interface MyModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children: ReactNode;
}

const MyModal: React.FC<MyModalProps> = ({ isOpen, closeModal, children }) => {
  return (
    <Modal
      className="w-3/4 h-2/4 bg-white rounded-3xl p-4 m-auto relative top-1/2 transform -translate-y-1/2 border-8 border-solid border-dark-pink"
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Modal"
    >
      {children}
      <button
        className="mt-5 cursor-pointer font-semibold hover:font-bold"
        onClick={closeModal}
      >
        Cerrar
      </button>
    </Modal>
  );
};

export default MyModal;
