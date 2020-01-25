import React, { useEffect } from "react";
import MainTemplate from "Template/mainTemplate/MainTemplate";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as actionCreators from "Store/index";
import { ALL_RECIPES, MY_RECIPES, FAVORITE_RECIPES } from 'Constants/globalConstants';

import AllRecipes from "./allRecipes/AllRecipes";
import Favorites from "./favorites/Favorites";
import MyRecipes from "./myRecipes/MyRecipes";

export const Homepage = ({ active, allRecipes, favoriteRecipes, getAllRecipes, myRecipes }) => {
  useEffect(() => {
    getAllRecipes();
  }, [getAllRecipes]);

  return (
    <MainTemplate>
      {active === ALL_RECIPES && <AllRecipes recipes={allRecipes} />}
      {active === FAVORITE_RECIPES && <Favorites recipes={favoriteRecipes} />}
      {active === MY_RECIPES && <MyRecipes recipes={myRecipes} />}
    </MainTemplate>
  );
};

const mapStateToProps = (state) => ({
  active: state.bottomNavigation.active,
  allRecipes: state.Recipes.allRecipes,
  favoriteRecipes: state.Recipes.favoriteRecipes,
  myRecipes: state.Recipes.myRecipes,
});

const mapDispatchToProps = (dispatch) => ({
  getAllRecipes: () => dispatch(actionCreators.getAllRecipes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);

Homepage.propTypes = {
  active: PropTypes.string.isRequired,
  allRecipes: PropTypes.arrayOf(PropTypes.object),
  favoriteRecipes: PropTypes.arrayOf(PropTypes.object),
  getAllRecipes: PropTypes.func.isRequired,
  myRecipes: PropTypes.arrayOf(PropTypes.object),
};

Homepage.defaultProps = {
  allRecipes: null,
  favoriteRecipes: null,
  myRecipes: null,
};
