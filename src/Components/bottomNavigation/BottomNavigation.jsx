import React, { useState } from 'react';
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

const useStyles = makeStyles({
  root: {
    width: "100%",
    bottom: "0",
    position: "absolute",
  },
});

const BottomNavigation = ({ setActiveBottomNavigation }) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const onChangeHandler = (event, newValue) => {
    setValue(newValue);
    let selectedTab;
    switch (newValue) {
      case 0:
        selectedTab = ALL_RECIPES;
        break;
      case 1:
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
      <BottomNavigationAction label="All" icon={<Fastfood />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Add new" icon={<Add />} />
    </BottomNavigationWrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setActiveBottomNavigation: (str) => dispatch(actionCreators.setActiveBottomNavigation(str)),
});


export default connect(null, mapDispatchToProps)(BottomNavigation);

BottomNavigation.propTypes = {
  setActiveBottomNavigation: PropTypes.func.isRequired,
};
