import {
  SET_LOADING,
  GET_IMAGES,
  OPEN_MODAL,
  CLOSE_MODAL,
  SET_MODAL_DATA,
  SET_SEARCH_TEXT,
  SET_SEARCHED
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case OPEN_MODAL:
      return {
        ...state,
        isModalOpen: true
      };
    case CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: false
      };
    case SET_MODAL_DATA:
      return {
        ...state,
        modalImageData: action.payload,
        isModalOpen: true
      };
    case GET_IMAGES:
      return {
        ...state,
        imagesData: action.payload,
        isLoading: false
      };
    case SET_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.payload
      };
    case SET_SEARCHED:
      return {
        ...state,
        hasSearched: action.payload
      };
    default:
      return state;
  }
};
