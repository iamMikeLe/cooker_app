import * as actionTypes from "Store/action-types";
import { ALL_RECIPES } from "Constants/globalConstants";

const initialState = {
  active: ALL_RECIPES,
};

const BottomNavigation = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ACTIVE_BOTTOM_NAVIGATION:
      return {
        ...state,
        active: action.value,
      };

    default:
      return state;
  }
};

export default BottomNavigation;
