import React, { Fragment, useContext } from "react";
import ImageContext from "../../context/image/imageContext";
import Masonry from "react-masonry-component";
import GalleryItem from "./GalleryItem";
import styles from "./GalleryList.module.css";

const GalleryList = props => {
  const imageContext = useContext(ImageContext);
  const { imagesData, searchText, hasSearched } = imageContext;

  if (imagesData.length === 0) {
    return (
      <Fragment>
        {hasSearched && (
          <h1 className={styles.text}>Did you mean {`${searchText}`} ?</h1>
        )}
        <h1 className={styles.text}>Search to display photos</h1>;
      </Fragment>
    );
  }

  return (
    <Fragment>
      {hasSearched && (
        <h1 className={styles.text}>Results for {`${searchText}`}</h1>
      )}
      <Masonry className={styles.gallery}>
        {imagesData.map(item => (
          <GalleryItem key={item.id} {...item} />
        ))}
      </Masonry>
    </Fragment>
  );
};

export default GalleryList;
