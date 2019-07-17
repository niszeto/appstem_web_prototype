import React, { useContext } from "react";
import ImageContext from "../../context/image/imageContext";
import Masonry from "react-masonry-component";
import GalleryItem from "./GalleryItem";

const GalleryList = props => {
  const imageContext = useContext(ImageContext);
  const { imagesData } = imageContext;

  return (
    <Masonry>
      {imagesData.map(item => (
        <GalleryItem key={item.id} {...item} />
      ))}
    </Masonry>
  );
};

export default GalleryList;
