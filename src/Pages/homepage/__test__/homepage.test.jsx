import React from 'react';
import { renderWithRedux } from 'Helpers/testHelper';

import { ALL_RECIPES, ADD_NEW_RECIPES, FAVORITE_RECIPES } from 'Constants/globalConstants';

import { Homepage } from '../Homepage';



describe("<Homepage />", () => {
  it("renders all recipes when allRecipes is active", () => {
    const getAllRecipes = jest.fn();
    const component = (
      <Homepage
        active={ALL_RECIPES}
        getAllRecipes={getAllRecipes}
      />
    );
    const { getByTestId } = renderWithRedux(component);
    expect(getByTestId("all-recipes"));
  });
  
/*   it('renders title', () => {
    const { getByText } = render(component);
  
    const headerTitle = getByText(DUMMY_TITLE);
    expect(headerTitle).toBeInTheDocument();
  });
  
  it('renders button - using data-testid', () => {
    const component = <Homepage title={DUMMY_TITLE} />;
    const { queryByTestId } = render(component);
  
    expect(queryByTestId("search-button")).toBeTruthy();
  });

  it('renders input - using placeholder', () => {
    const component = <Homepage title={DUMMY_TITLE} />;
    const { queryByPlaceholderText } = render(component);
  
    expect(queryByPlaceholderText("type something")).toBeTruthy();
  });

  describe("Input value", () => {
    it("updates on change", () => {
      const { queryByPlaceholderText } = render(component);
      const searchInput = queryByPlaceholderText("type something");

      fireEvent.change(searchInput, {target: {value: "test"}});
      expect(searchInput.value).toBe("test");
    })
  });

// feature not implemented yet
  describe("Search button", () => {
    describe("with empty query", () => {
      it("does not trigger requestSearch function", () => {
        const requestSearch = jest.fn();
        const { queryByTestId } = render(<Homepage title={DUMMY_TITLE} requestSearch={requestSearch} />);
        
        fireEvent.click(queryByTestId("search-button"));
        expect(requestSearch).not.toHaveBeenCalled();
      })
    })
  });
 */
  // similar would be to simulate input something then checking if the function was called
});