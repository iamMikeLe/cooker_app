import React from 'react';
import { render } from '@testing-library/react';

import MyRecipes from '../MyRecipes';


describe("<MyRecipes />", () => {
  it("renders loader when recipe is null", () => {
    const { getAllByTestId } = render(<MyRecipes />);
    expect(getAllByTestId("loader"));
  });

  it("renders no data info component", () => {
    const { getByTestId } = render(<MyRecipes recipes={[]} />);
    expect(getByTestId("no-data-text"));
  });

  it("renders recipe Cards when recipes exists", () => {
    const recipesStub = [
      {
        itemId: 1,
        title: "stub title",
        avatarName: "stub name",
        date: "01.01.2020",
        imgUrl: "stub url",
      },
    ];
    const { getAllByTestId } = render(<MyRecipes recipes={recipesStub} />);
    expect(getAllByTestId("card-item"));
  });
});
