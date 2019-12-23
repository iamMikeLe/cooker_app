import React, { useState } from 'react';
import T from "i18n-react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigationWrapper from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Fastfood from '@material-ui/icons/Fastfood';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Add from '@material-ui/icons/Add';
import { connect } from "react-redux";
import * as actionCreators from "Store/index";
import { ALL_RECIPES, ADD_NEW_RECIPES, FAVORITE_RECIPES } from 'Constants/globalConstants';
import cardMock from 'Pages/homepage/cardDataMock';

const useStyles = makeStyles({
  root: {
    width: "100%",
    bottom: "0",
    position: "absolute",
  },
});

const BottomNavigation = (props) => {
  const { setActiveBottomNavigation, setAllRecipes, setFavoriteRecipes, resetRecipes } = props;
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const onChangeHandler = (event, newValue) => {
    setValue(newValue);
    resetRecipes();
    let selectedTab;
    switch (newValue) {
      case 0:
        // get all data
        setTimeout(() => {
          setAllRecipes(cardMock);
        }, 3000);
        selectedTab = ALL_RECIPES;
        break;
      case 1:
        // get favorite data
        setTimeout(() => {
          setFavoriteRecipes([]);
        }, 3000);
        selectedTab = FAVORITE_RECIPES;
        break;
      case 2:
        selectedTab = ADD_NEW_RECIPES;
        break;
      default:
    }
    setActiveBottomNavigation(selectedTab);
  };

  return (
    <BottomNavigationWrapper
      value={value}
      onChange={onChangeHandler}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label={T.translate("all")} icon={<Fastfood />} />
      <BottomNavigationAction label={T.translate("Favorites")} icon={<FavoriteIcon />} />
      <BottomNavigationAction label={T.translate("addNew")} icon={<Add />} />
    </BottomNavigationWrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setActiveBottomNavigation: (str) => dispatch(actionCreators.setActiveBottomNavigation(str)),
  setAllRecipes: (arr) => dispatch(actionCreators.setAllRecipes(arr)),
  setFavoriteRecipes: (arr) => dispatch(actionCreators.setFavoriteRecipes(arr)),
  resetRecipes: () => dispatch(actionCreators.resetRecipes()),
});


export default connect(null, mapDispatchToProps)(BottomNavigation);

BottomNavigation.propTypes = {
  setActiveBottomNavigation: PropTypes.func.isRequired,
  setAllRecipes: PropTypes.func.isRequired,
  setFavoriteRecipes: PropTypes.func.isRequired,
  resetRecipes: PropTypes.func.isRequired,
};
