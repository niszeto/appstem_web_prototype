import React, { useState } from "react";
import Search from "../components/search/Search";
import axios from "axios";

import Spinner from "../components/layout/Spinner";
import GalleryList from "../components/gallery/GalleryList";
import ImageModal from "../components/modal/ImageModal";

const Home = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [imagesData, setImagesData] = useState([]);
  const [openImage, setOpenImage] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getImages = async searchText => {
    setIsLoading(true);
    const url = `https://api.unsplash.com/search/photos?query=${searchText}&client_id=57c702829b43f43fd1b82bc724b8aa9a744d7eed8c004899e93ec25d57003fd9`;

    const response = await axios.get(url);
    setImagesData(response.data.results);
    setIsLoading(false);
  };

  const changeOpenImage = imageDetails => {
    setOpenImage(imageDetails);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="container">
      <Search getImages={getImages} />
      {isLoading ? (
        <Spinner />
      ) : (
        <GalleryList
          data={imagesData}
          changeOpenImage={changeOpenImage}
          openModal={openModal}
        />
      )}
      <ImageModal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        openImage={openImage}
      />
    </div>
  );
};

export default Home;
