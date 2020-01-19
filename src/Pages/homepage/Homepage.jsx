import React, { useEffect } from "react";
import MainTemplate from "Template/mainTemplate/MainTemplate";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as actionCreators from "Store/index";
import { ALL_RECIPES, ADD_NEW_RECIPES, FAVORITE_RECIPES } from 'Constants/globalConstants';

import AllRecipes from "./allRecipes/AllRecipes";
import Favorites from "./favorites/Favorites";

export const Homepage = ({ active, allRecipes, favoriteRecipes, getAllRecipes }) => {
  useEffect(() => {
    getAllRecipes();
  }, [getAllRecipes]);

  return (
    <MainTemplate>
      {active === ALL_RECIPES && <AllRecipes recipes={allRecipes} />}
      {active === FAVORITE_RECIPES && <Favorites recipes={favoriteRecipes} data-testid="favorite-recipes" />}
      {active === ADD_NEW_RECIPES && (<p data-testid="add-new-recipes">add new recipe page</p>)}
    </MainTemplate>
  );
};

const mapStateToProps = (state) => ({
  active: state.bottomNavigation.active,
  allRecipes: state.Recipes.allRecipes,
  favoriteRecipes: state.Recipes.favoriteRecipes,
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
};

Homepage.defaultProps = {
  allRecipes: null,
  favoriteRecipes: null,
};
