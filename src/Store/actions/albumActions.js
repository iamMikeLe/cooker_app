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
        return axios.get("https://jsonplaceholder.typicode.com/photos")
        .then((response) => {
            const shortenedResult = response.data.slice(0, 10);

            // Because API call is really fast, loader is not displayed, for displaying purpouses
            setTimeout(() => {
                dispatch(setAlbum(shortenedResult));
            }, 3000);
            return (shortenedResult);
        })
        .catch((err) => {
            // usually I would handle errors differently but because there is no time to implement some snackbar, this will do
            console.log(err);
        });
    };
};