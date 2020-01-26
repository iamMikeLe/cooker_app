import React from "react";
import styled from "styled-components";
import Typography from '@material-ui/core/Typography';
import { Col } from 'react-grid-system';
import foodBox from 'Images/chinabox.svg';


export const NoDataPlaceholder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
`;

export const SpacedCol = styled(Col)`
  &&& {
    margin-top: 10vh;
  }
`;

const NoRecipes = () => (
  <SpacedCol xs={12} data-testid="no-data-text">
    <NoDataPlaceholder>
      <img src={foodBox} alt="Logo" />
    </NoDataPlaceholder>
    <NoDataPlaceholder>
      <Typography variant="subtitle2" gutterBottom>
        No recipes to display
      </Typography>
    </NoDataPlaceholder>
  </SpacedCol>
);

export default NoRecipes;
