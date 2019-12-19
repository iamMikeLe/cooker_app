import * as actionTypes from "Store/action-types";

const initialState = {
  recipes: null,
};

const AllRecipes = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ALL_RECIPES:
      return {
        ...state,
        active: action.value,
      };

    default:
      return state;
  }
};

export default AllRecipes;
