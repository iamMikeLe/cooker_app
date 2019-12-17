// import axios from "axios";
import * as actionTypes from "Store/action-types";


export const setActiveBottomNavigation = (str) => {
  return {
    type: actionTypes.SET_ACTIVE_BOTTOM_NAVIGATION,
    value: str,
  };
};


/* export const get = () => {
    return dispatch => {
        return axios.get("https://yesno.wtf/")
        .then((response) => {
          console.log("success");
          dispatch(setActiveBottomNavigation("works"))
        })
        .catch((err) => {
          console.log(err);
        });
    };
}; */
