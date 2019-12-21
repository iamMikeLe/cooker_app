import * as actionTypes from "Store/action-types";

export const setAllRecipes = (arr) => {
  console.log("test");
  return {
    type: actionTypes.SET_ALL_RECIPES,
    value: arr,
  };
};
