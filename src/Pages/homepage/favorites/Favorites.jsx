import React from "react";
import T from "i18n-react";
import PropTypes from "prop-types";
import RecipeReviewCard from "Components/recipeCard/recipeCard";
import { Container, Row, Col } from 'react-grid-system';
import CardLoader from "Components/loaders/cardLoader/CardLoader";
import { CenteredRow, Title, ContainerStyled } from "./styles";


const Favorites = ({ recipes }) => {
  return (
    <ContainerStyled data-testid="favorite-recipes">
      <Container>
        <Row>
          <Col xs={12}>
            <Title variant="h4" gutterBottom>
              {T.translate("favorites")}
            </Title>
          </Col>
        </Row>
        <CenteredRow>
          {!recipes && (<CardLoader />)}
          {recipes && recipes.length === 0 && (<p data-testid="no-data-text">no card to show</p>)}
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

export default Favorites;

Favorites.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object),
};

Favorites.defaultProps = {
  recipes: null,
};
