import React from "react";
import T from "i18n-react";
import RecipeReviewCard from "Components/recipeCard/recipeCard";
import { Container, Row, Col } from 'react-grid-system';
import cardMock from "./cardDataMock";
import { CenteredRow, Title, ContainerStyled } from "./styles";

const AllRecipes = () => {
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
          {cardMock.map((item) => (
            <Col xs={12} md={6} lg={4} key={item.itemId}>
              <RecipeReviewCard
                cardData={item}
              />
            </Col>
          ))}
        </CenteredRow>
      </Container>
    </ContainerStyled>
  );
};

export default AllRecipes;
