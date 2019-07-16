import React from "react";
import GalleryItem from "./GalleryItem";

const GalleryList = props => {
  const { data } = props;
  // console.log(data);
  return data.map(item => {
    return <GalleryItem key={item.id} {...item} />;
  });
};

export default GalleryList;
