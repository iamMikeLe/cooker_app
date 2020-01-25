import * as actionTypes from "Store/action-types";

const initialState = {
  allRecipes: null,
  favoriteRecipes: null,
  myRecipes: null,
};

const Recipes = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ALL_RECIPES:
      return {
        ...state,
        allRecipes: action.value,
      };

    case actionTypes.SET_FAVORITE_RECIPES:
      return {
        ...state,
        favoriteRecipes: action.value,
      };

    case actionTypes.SET_MY_RECIPES:
      return {
        ...state,
        myRecipes: action.value,
      };

    case actionTypes.RESET_RECIPES:
      return {
        ...state,
        allRecipes: null,
        favoriteRecipes: null,
        myRecipes: null,
      };
    default:
      return state;
  }
};

export default Recipes;
