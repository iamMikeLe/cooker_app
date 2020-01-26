import React from 'react';
import { renderWithRedux } from 'Helpers/testHelper';

import { ALL_RECIPES, MY_RECIPES, FAVORITE_RECIPES } from 'Constants/globalConstants';

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

  it("renders my recipes when addNewRecipes is active", () => {
    const component = (
      <Homepage
        active={MY_RECIPES}
        getAllRecipes={getAllRecipes}
      />
    );
    const { getByTestId } = renderWithRedux(component);
    expect(getByTestId("my-recipes"));
  });
});
