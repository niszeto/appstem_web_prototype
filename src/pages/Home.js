import React, { useContext } from "react";
import ImageContext from "../context/image/imageContext";
import ImageModal from "../components/modal/ImageModal";
import Search from "../components/search/Search";
import Spinner from "../components/layout/Spinner";
import GalleryList from "../components/gallery/GalleryList";

const Home = props => {
  const imageContext = useContext(ImageContext);
  const { isLoading } = imageContext;

  return (
    <div className="container">
      <ImageModal />
      <Search />
      {isLoading ? <Spinner /> : <GalleryList />}
    </div>
  );
};

export default Home;
