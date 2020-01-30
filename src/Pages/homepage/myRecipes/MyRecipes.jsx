import React from "react";
import T from "i18n-react";
import PropTypes from "prop-types";
import Zoom from '@material-ui/core/Zoom';
import AddIcon from '@material-ui/icons/Add';
import RecipeReviewCard from "Components/recipeCard/recipeCard";
import { Container, Row, Col } from 'react-grid-system';
import CardLoader from "Components/loaders/cardLoader/CardLoader";
import NoRecipes from "Components/placeholders/noRecipes/NoRecipes";
import { CenteredRow, Title, ContainerStyled, StyledFab } from "./styles";


const MyRecipes = ({ recipes }) => {
  return (
    <ContainerStyled data-testid="my-recipes">
      <Container>
        <Row>
          <Col xs={12}>
            <Title variant="h4" gutterBottom>
              {T.translate("myRecipes")}
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
      {recipes && (
        <Zoom
          in={!!recipes}
          style={{ transitionDelay: "100ms" }}
          unmountOnExit
        >
          <StyledFab color="secondary" aria-label="add">
            <AddIcon />
          </StyledFab>
        </Zoom>
      )}
    </ContainerStyled>
  );
};

export default MyRecipes;

MyRecipes.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object),
};

MyRecipes.defaultProps = {
  recipes: null,
};
