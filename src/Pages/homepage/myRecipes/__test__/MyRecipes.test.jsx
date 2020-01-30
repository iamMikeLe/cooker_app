import React from 'react';
import { render, cleanup } from '@testing-library/react';

import MyRecipes from '../MyRecipes';

afterEach(cleanup);

describe("<MyRecipes />", () => {
  it("renders loader when recipe is null", () => {
    const { getAllByTestId } = render(<MyRecipes />);
    expect(getAllByTestId("loader"));
  });

  it("renders no data info component with add icon", () => {
    const { getByTestId, getByLabelText } = render(<MyRecipes recipes={[]} />);
    expect(getByTestId("no-data-text"));
    expect(getByLabelText("add"));
  });

  it("renders recipe Cards when recipes exists with add icon", () => {
    const recipesStub = [
      {
        itemId: 1,
        title: "stub title",
        avatarName: "stub name",
        date: "01.01.2020",
        imgUrl: "stub url",
      },
    ];
    const { getAllByTestId, getByLabelText } = render(<MyRecipes recipes={recipesStub} />);
    expect(getAllByTestId("card-item"));
    expect(getByLabelText("add"));
  });
});
