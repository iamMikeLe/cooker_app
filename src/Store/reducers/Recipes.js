import * as actionTypes from "Store/action-types";

const initialState = {
  recipes: null,
};

const Recipes = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ALL_RECIPES:
      return {
        ...state,
        recipes: action.value,
      };

    default:
      return state;
  }
};

export default Recipes;
