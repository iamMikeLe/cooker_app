import React from 'react';
import { render } from '@testing-library/react';

import RecipeReviewCard from '../recipeCard';


describe("<RecipeReviewCard />", () => {
  const title = "stub title";
  const avatarName = "stub name";
  const date = "01.01.2020";
  const imgUrl = "stub url";

  const cardDataStub = { title, avatarName, date, imgUrl };

  it("renders correctly with data", () => {
    const { getByText, asFragment } = render(<RecipeReviewCard cardData={cardDataStub} />);
    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(avatarName)).toBeInTheDocument();
    expect(getByText(date)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
