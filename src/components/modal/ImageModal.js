import React, { useContext } from "react";
import Modal from "react-modal";
import ImageContext from "../../context/image/imageContext";
import styles from "./ImageModal.module.css";

const ImageModal = props => {
  const imageContext = useContext(ImageContext);
  const { isModalOpen, closeModal, modalImageData } = imageContext;

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      overlayClassName={styles.overlay}
      className={styles.modalContainer}
      ariaHideApp={false}
    >
      <img
        src={modalImageData.url}
        alt={modalImageData.alt}
        className={styles.image}
      />
    </Modal>
  );
};

export default ImageModal;
