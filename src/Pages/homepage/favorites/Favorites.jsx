import React from "react";
import T from "i18n-react";
import PropTypes from "prop-types";
import RecipeReviewCard from "Components/recipeCard/recipeCard";
import { Container, Row, Col } from 'react-grid-system';
import { CenteredRow, Title, ContainerStyled } from "./styles";
import AllRecipesLoader from "./Loader";

const Favorites = ({ recipes }) => {
  return (
    <ContainerStyled>
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
          {recipes && recipes.length === 0 && (<p>no card to show</p>)}
          {recipes && (
            recipes.map((item) => (
              <Col xs={12} md={6} lg={4} key={item.itemId}>
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

export default Favorites;

Favorites.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object),
};

Favorites.defaultProps = {
  recipes: null,
};
