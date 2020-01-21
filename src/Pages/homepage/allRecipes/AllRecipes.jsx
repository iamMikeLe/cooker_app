import React from "react";
import T from "i18n-react";
import PropTypes from "prop-types";
import RecipeReviewCard from "Components/recipeCard/recipeCard";
import { Container, Row, Col } from 'react-grid-system';
import { CenteredRow, Title, ContainerStyled } from "./styles";
import AllRecipesLoader from "./Loader";

const AllRecipes = ({ recipes }) => {
  return (
    <ContainerStyled data-testid="all-recipes">
      <Container>
        <Row>
          <Col xs={12}>
            <Title variant="h4" gutterBottom>
              {T.translate("allRecipes")}
            </Title>
          </Col>
        </Row>
        <CenteredRow>
          {!recipes && (<AllRecipesLoader />)}
          {recipes && recipes.length === 0 && (<p data-testid="no-data-text">no card to show</p>)}
          {recipes && (
            recipes.map((item) => (
              <Col xs={12} key={item.itemId} data-testid="card-item">
                <RecipeReviewCard
                  cardData={item}
                />
              </Col>
            ))
          )}
        </CenteredRow>
      </Container>
    </ContainerStyled>
  );
};

export default AllRecipes;

AllRecipes.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object),
};

AllRecipes.defaultProps = {
  recipes: null,
};
