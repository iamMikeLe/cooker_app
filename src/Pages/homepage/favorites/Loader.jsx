/* eslint-disable react/no-array-index-key */
import React from 'react';
import ContentLoader from 'react-content-loader';
import styled from "styled-components";
import { Col } from 'react-grid-system';

export const Card = styled.div`
  &&& {
    max-width: 345px !important;
    margin: ${({ theme }) => theme.largeGap} auto 0 !important;
  }
`;

const AllRecipesLoader = () => (
  [...Array(6)].map((item, index) => (
    <Col xs={12} key={index} data-testid="loader">
      <Card>
        <ContentLoader height={345} width={330} speed={5}>
          <circle cx="20" cy="30" r="20" />

          <rect x="55" y="13" rx="4" ry="4" width="100" height="13" />
          <rect x="60" y="37" rx="4" ry="4" width="50" height="8" />
          <rect x="0" y="60" rx="5" ry="5" width="330" height="250" />
        </ContentLoader>
      </Card>
    </Col>
  ))
);

export default AllRecipesLoader;
