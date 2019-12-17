import * as actionTypes from "Store/action-types";

const initialState = {
  album: null,
};

const Albums = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ALBUM:
      return {
        ...state,
        album: action.value,
      };

    default:
      return state;
  }
};

export default Albums;
