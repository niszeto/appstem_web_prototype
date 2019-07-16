import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import axios from "axios";

import Spinner from "../components/layout/Spinner";
import GalleryList from "../components/gallery/GalleryList";

const Home = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [imagesData, setImagesData] = useState([
    {
      id: "U7N6XFvTBjU",
      alt_description: "round white floral 4-tiered fondant cake",
      urls: {
        regular:
          "https://images.unsplash.com/photo-1525257831700-183b9b8bf5c4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjgxOTEwfQ"
      }
    },
    {
      id: "fXAuCMEYGY4",
      alt_description: "4-layered fondant cake on table",
      urls: {
        regular:
          "https://images.unsplash.com/photo-1535254973040-607b474cb50d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjgxOTEwfQ"
      }
    },
    {
      id: "_B7shfNUXEA",
      alt_description:
        "close-up photography of 3-tier vanilla cake with blueberry and strawberry toppings",
      urls: {
        regular:
          "https://images.unsplash.com/photo-1535141192574-5d4897c12636?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjgxOTEwfQ"
      }
    }
  ]);
  const [openImage, setOpenImage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [Alert, setAlert] = useState(null);

  useEffect(() => {
    const searchText = "cake";
    // getImages(searchText);
    // eslint-disable-next-line
  }, []);

  const getImages = async searchText => {
    setIsLoading(true);
    const url = `https://api.unsplash.com/search/photos?query=${searchText}&client_id=57c702829b43f43fd1b82bc724b8aa9a744d7eed8c004899e93ec25d57003fd9`;

    const response = await axios.get(url);
    setImagesData(response.data.results);
    setIsLoading(false);
  };

  const changeOpenImage = url => {
    setOpenImage(url);
  };

  return (
    <div className="container">
      <Search />
      {isLoading ? (
        <Spinner />
      ) : (
        <GalleryList data={imagesData} changeOpenImage={changeOpenImage} />
      )}
    </div>
  );
};

export default Home;
