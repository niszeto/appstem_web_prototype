import React from "react";
import GalleryItem from "./GalleryItem";
import Masonry from "react-masonry-component";

const GalleryList = props => {
  const { data, changeOpenImage } = props;
  // console.log(data);
  return (
    <Masonry>
      {// add on click to update open photo
      data.map(item => (
        <GalleryItem
          key={item.id}
          {...item}
          changeOpenImage={changeOpenImage}
        />
      ))}
    </Masonry>
  );
};

export default GalleryList;
