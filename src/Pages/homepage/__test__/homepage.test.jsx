import React from 'react';
import { renderWithRedux } from 'Helpers/testHelper';

import { ALL_RECIPES, ADD_NEW_RECIPES, FAVORITE_RECIPES } from 'Constants/globalConstants';

import { Homepage } from '../Homepage';


const getAllRecipes = jest.fn();

describe("<Homepage />", () => {
  it("renders all recipes when allRecipes is active", () => {
    const component = (
      <Homepage
        active={ALL_RECIPES}
        getAllRecipes={getAllRecipes}
      />
    );
    const { getByTestId } = renderWithRedux(component);
    expect(getByTestId("all-recipes"));
  });

  it("renders favorite recipes when favoriteRecipes is active", () => {
    const component = (
      <Homepage
        active={FAVORITE_RECIPES}
        getAllRecipes={getAllRecipes}
      />
    );
    const { getByTestId } = renderWithRedux(component);
    expect(getByTestId("favorite-recipes"));
  });

  it("renders add new recipes when addNewRecipes is active", () => {
    const component = (
      <Homepage
        active={ADD_NEW_RECIPES}
        getAllRecipes={getAllRecipes}
      />
    );
    const { getByTestId } = renderWithRedux(component);
    expect(getByTestId("add-new-recipes"));
  });
});
