import * as actionTypes from "Store/action-types";

export const setAllRecipes = (arr) => {
  return {
    type: actionTypes.SET_ALL_RECIPES,
    value: arr,
  };
};

export const setFavoriteRecipes = (arr) => {
  return {
    type: actionTypes.SET_FAVORITE_RECIPES,
    value: arr,
  };
};

export const resetRecipes = () => {
  return {
    type: actionTypes.RESET_RECIPES,
  };
};
