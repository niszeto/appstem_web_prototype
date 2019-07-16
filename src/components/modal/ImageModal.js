import React from "react";
import Modal from "react-modal";

import styles from "./ImageModal.module.css";

const ImageModal = props => {
  const { isModalOpen, closeModal, openImage } = props;
  console.log(openImage);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)"
    }
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      style={customStyles}
      // className={styles.modalContainer}
      // overlayClassName={styles.overlay}
      ariaHideApp={false}
    >
      <img src={openImage.url} alt={openImage.alt} style={{ height: "80vh" }} />
    </Modal>
  );
};

export default ImageModal;
