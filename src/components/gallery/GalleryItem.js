import React from "react";
import styles from "./GalleryItem.module.css";

const GalleryItem = props => {
  // console.log(props);
  const {
    urls: { regular },
    alt_description,
    changeOpenImage
  } = props;

  return (
    <img
      src={regular}
      alt={alt_description}
      className={styles.image}
      onClick={() => {
        changeOpenImage(regular);
      }}
    />
  );
};

export default GalleryItem;
