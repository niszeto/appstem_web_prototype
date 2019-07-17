import React, { useContext } from "react";
import ImageContext from "../../context/image/imageContext";
import styles from "./GalleryItem.module.css";

const GalleryItem = props => {
  const imageContext = useContext(ImageContext);
  const { setModalData } = imageContext;

  const {
    urls: { regular },
    alt_description
  } = props;

  return (
    <img
      src={regular}
      alt={alt_description}
      className={styles.image}
      onClick={() => {
        setModalData({ url: regular, alt: alt_description });
      }}
    />
  );
};

export default GalleryItem;
