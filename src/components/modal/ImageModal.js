import React from "react";
import Modal from "react-modal";

import styles from "./ImageModal.module.css";

const ImageModal = props => {
  const { isModalOpen, closeModal, openImage } = props;

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      overlayClassName={styles.overlay}
      className={styles.modalContainer}
      ariaHideApp={false}
    >
      <img src={openImage.url} alt={openImage.alt} className={styles.image} />
    </Modal>
  );
};

export default ImageModal;
