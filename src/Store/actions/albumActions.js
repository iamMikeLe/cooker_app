import axios from "axios";
import * as actionTypes from "Store/action-types";


export const setAlbum = (arr) => {
    return {
        type: actionTypes.SET_ALBUM,
        value: arr,
    };
};


/**
 * Middleware for making API call (Redux thunk allows us to do this step)
 */
export const getAlbum = () => {
    return dispatch => {
        return axios.get("https://yesno.wtf/")
        .then(() => {
            console.log("success");
            dispatch(setAlbum("works"))
        })
        .catch((err) => {
            console.log(err);
        });
    };
};