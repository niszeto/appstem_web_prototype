import React, { useContext } from "react";
import ImageContext from "../../context/image/imageContext";
import Masonry from "react-masonry-component";
import GalleryItem from "./GalleryItem";
import styles from "./GalleryList.module.css";

const GalleryList = props => {
  const imageContext = useContext(ImageContext);
  const { imagesData } = imageContext;

  if (imagesData.length === 0) {
    return <h1 className={styles.text}>Search to display photos</h1>;
  }

  return (
    <Masonry className={styles.gallery}>
      {imagesData.map(item => (
        <GalleryItem key={item.id} {...item} />
      ))}
    </Masonry>
  );
};

export default GalleryList;
