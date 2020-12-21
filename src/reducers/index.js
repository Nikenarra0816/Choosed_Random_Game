import {
  FILTER_ENHANCE,
  FILTER_HERO,
  GET_ALL_CARDS,
  GET_CARDS,
  START_LOADING,
  STOP_LOADING,
} from '../constant';

const INITIAL_STATE = {
  data: [],
  dataAll: [],
  isLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CARDS:
      return {
        ...state,
        data: action.payload,
      };
    case START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case STOP_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    case GET_ALL_CARDS:
      return {
        ...state,
        dataAll: action.payload,
      };
    default:
      return state;
  }
};
