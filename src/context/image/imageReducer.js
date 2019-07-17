import {
  SET_LOADING,
  GET_IMAGES,
  OPEN_MODAL,
  CLOSE_MODAL,
  SET_MODAL_DATA
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
    default:
      return state;
  }
};
