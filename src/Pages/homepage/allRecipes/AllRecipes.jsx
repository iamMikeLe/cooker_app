import React from "react";
import T from "i18n-react";
import PropTypes from "prop-types";
import RecipeReviewCard from "Components/recipeCard/recipeCard";
import { Container, Row, Col } from 'react-grid-system';
import CardLoader from "Components/loaders/cardLoader/CardLoader";
import NoRecipes from "Components/placeholders/noRecipes/NoRecipes";

import { CenteredRow, Title, ContainerStyled } from "./styles";

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
          {!recipes && (<CardLoader />)}
          {recipes && recipes.length === 0 && <NoRecipes />}
          {recipes && (
            recipes.map((item) => (
              <Col xs={12} key={item.itemId}>
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
