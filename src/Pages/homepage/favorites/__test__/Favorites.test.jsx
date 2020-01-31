import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Favorites from '../Favorites';

afterEach(cleanup);

describe("<Favorites />", () => {
  it("renders loader when recipe is null", () => {
    const { getAllByTestId } = render(<Favorites />);
    expect(getAllByTestId("loader"));
  });

  it("renders no data info component with search icon", () => {
    const { getByTestId, getByLabelText } = render(<Favorites recipes={[]} />);
    expect(getByTestId("no-data-text"));
    expect(getByLabelText("search"));
  });

  it("renders recipe Cards when recipes exists with search icon", () => {
    const recipesStub = [
      {
        itemId: 1,
        title: "stub title",
        avatarName: "stub name",
        date: "01.01.2020",
        imgUrl: "stub url",
      },
    ];
    const { getAllByTestId, getByLabelText } = render(<Favorites recipes={recipesStub} />);
    expect(getAllByTestId("card-item"));
    expect(getByLabelText("search"));
  });
});
