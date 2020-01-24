import React, { useState } from 'react';
import T from "i18n-react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigationWrapper from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Fastfood from '@material-ui/icons/Fastfood';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Person from '@material-ui/icons/Person';
import { connect } from "react-redux";
import * as actionCreators from "Store/index";
import { ALL_RECIPES, MY_RECIPES, FAVORITE_RECIPES } from 'Constants/globalConstants';


const useStyles = makeStyles({
  root: {
    width: "100%",
    bottom: "0",
    position: "fixed",
    "@media (min-width: 768px)": {
      position: "absolute",
      bottom: "0",
      width: "100%"
    } 
  }
});

const BottomNavigation = props => {
  const { setActiveBottomNavigation, getAllRecipes, setFavoriteRecipes, resetRecipes } = props;
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const onChangeHandler = (event, newValue) => {
    setValue(newValue);
    resetRecipes();
    let selectedTab;
    switch (newValue) {
      case 0:
        getAllRecipes();
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
        selectedTab = MY_RECIPES;
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
      <BottomNavigationAction label={T.translate("myRecipes")} icon={<Person />} />
    </BottomNavigationWrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setActiveBottomNavigation: (str) => dispatch(actionCreators.setActiveBottomNavigation(str)),
  getAllRecipes: () => dispatch(actionCreators.getAllRecipes()),
  setFavoriteRecipes: (arr) => dispatch(actionCreators.setFavoriteRecipes(arr)),
  resetRecipes: () => dispatch(actionCreators.resetRecipes()),
});


export default connect(null, mapDispatchToProps)(BottomNavigation);

BottomNavigation.propTypes = {
  setActiveBottomNavigation: PropTypes.func.isRequired,
  getAllRecipes: PropTypes.func.isRequired,
  setFavoriteRecipes: PropTypes.func.isRequired,
  resetRecipes: PropTypes.func.isRequired,
};
