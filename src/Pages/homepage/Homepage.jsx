import React, { useEffect } from "react";
import MainTemplate from "Template/mainTemplate/MainTemplate";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as actionCreators from "Store/index";
import { ALL_RECIPES, ADD_NEW_RECIPES, FAVORITE_RECIPES } from 'Constants/globalConstants';

import AllRecipes from "./allRecipes/AllRecipes";
import cardMock from "./cardDataMock";
import Favorites from "./favorites/Favorites";

const Homepage = ({ active, recipes, setAllRecipes }) => {
  useEffect(() => {
    setTimeout(() => {
      setAllRecipes(cardMock);
    }, 3000);
  }, [setAllRecipes]);

  return (
    <MainTemplate>
      {active === ALL_RECIPES && <AllRecipes recipes={recipes} />}
      {active === FAVORITE_RECIPES && <Favorites recipes={recipes} />}
      {active === ADD_NEW_RECIPES && (<p>add new recipe page</p>)}
    </MainTemplate>
  );
};

const mapStateToProps = (state) => ({
  active: state.bottomNavigation.active,
  recipes: state.Recipes.recipes,
});

const mapDispatchToProps = (dispatch) => ({
  setAllRecipes: (arr) => dispatch(actionCreators.setAllRecipes(arr)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);

Homepage.propTypes = {
  active: PropTypes.string.isRequired,
  recipes: PropTypes.arrayOf(PropTypes.object),
  setAllRecipes: PropTypes.func.isRequired,
};

Homepage.defaultProps = {
  recipes: null,
};
