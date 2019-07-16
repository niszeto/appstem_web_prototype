import React from "react";

const GalleryItem = props => {
  console.log(props);
  const {
    urls: { regular },
    alt_description
  } = props;

  return <img src={regular} alt={alt_description} />;
};

export default GalleryItem;
