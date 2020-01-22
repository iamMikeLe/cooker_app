import * as actionTypes from "Store/action-types";
import axios from "axios";
import cardMock from "Constants/cardDataMock";


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


export const getAllRecipes = () => {
  return (dispatch) => {
    return axios.get("https://yesno.wtf/")
      .then(() => {
        console.log("success");
        dispatch(setAllRecipes(cardMock));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
