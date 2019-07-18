import React, { useReducer } from "react";
import ImageContext from "./imageContext";
import imageReducer from "./imageReducer";
import {
  SET_LOADING,
  GET_IMAGES,
  CLOSE_MODAL,
  OPEN_MODAL,
  SET_MODAL_DATA,
  SET_SEARCH_TEXT,
  SET_SEARCHED
} from "../types";
import axios from "axios";

const ImageState = props => {
  const initialState = {
    isLoading: false,
    imagesData: [],
    isModalOpen: false,
    modalImageData: {},
    searchText: "",
    hasSearched: false
  };

  const [state, dispatch] = useReducer(imageReducer, initialState);

  const getImagesData = async searchText => {
    setLoading();
    const url = `https://api.unsplash.com/search/photos?query=${searchText}&client_id=57c702829b43f43fd1b82bc724b8aa9a744d7eed8c004899e93ec25d57003fd9`;

    try {
      const response = await axios.get(url);
      dispatch({ type: GET_IMAGES, payload: response.data.results });
    } catch (error) {
      console.log(error);
    }
  };

  const openModal = () => {
    dispatch({ type: OPEN_MODAL });
  };

  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL });
  };

  const setModalData = imageDetails => {
    dispatch({ type: SET_MODAL_DATA, payload: imageDetails });
  };

  const setSearchText = searchText => {
    dispatch({ type: SET_SEARCH_TEXT, payload: searchText });
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  const setSearched = status =>
    dispatch({ type: SET_SEARCHED, payload: status });

  return (
    <ImageContext.Provider
      value={{
        isLoading: state.isLoading,
        imagesData: state.imagesData,
        isModalOpen: state.isModalOpen,
        modalImageData: state.modalImageData,
        setLoading,
        getImagesData,
        openModal,
        closeModal,
        setModalData,
        searchText: state.searchText,
        setSearchText,
        hasSearched: state.hasSearched,
        setSearched
      }}
    >
      {props.children}
    </ImageContext.Provider>
  );
};

export default ImageState;
