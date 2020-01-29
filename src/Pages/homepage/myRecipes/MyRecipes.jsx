import React from "react";
import T from "i18n-react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RecipeReviewCard from "Components/recipeCard/recipeCard";
import { Container, Row, Col } from 'react-grid-system';
import CardLoader from "Components/loaders/cardLoader/CardLoader";
import NoRecipes from "Components/placeholders/noRecipes/NoRecipes";
import { CenteredRow, Title, ContainerStyled } from "./styles";


export const StyledFab = styled(Fab)`
  &&& {
    position: fixed;
    bottom: 85px;
    right: 30px;
    cursor: pointer;
    @media only screen and (min-width: 768px) {
      position: absolute;
    }
  }
`;

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
      <StyledFab color="secondary" aria-label="add">
        <AddIcon />
      </StyledFab>
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
