import React from "react";
import MainTemplate from "Template/mainTemplate/MainTemplate";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { ALL_RECIPES, ADD_NEW_RECIPES, FAVORITE_RECIPES } from 'Constants/globalConstants';

const Homepage = ({ active }) => {
  return (
    <MainTemplate>
      {active === ALL_RECIPES && (<p>all recipe page</p>)}
      {active === FAVORITE_RECIPES && (<p>favorite recipe page</p>)}
      {active === ADD_NEW_RECIPES && (<p>add new recipe page</p>)}
    </MainTemplate>
  );
};

const mapStateToProps = (state) => ({
  active: state.bottomNavigation.active,
});

export default connect(mapStateToProps)(Homepage);

Homepage.propTypes = {
  active: PropTypes.string.isRequired,
};
