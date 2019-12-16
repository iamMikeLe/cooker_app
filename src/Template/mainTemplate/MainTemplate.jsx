import React from "react";
import styled from "styled-components";

import BottomNavigation from "Components/bottomNavigation/BottomNavigation";
import AppBar from "Components/appBar/AppBar";

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fafafa;
`;

const MainTemplate = ({ children }) => {
  return (
    <AppWrapper>
      <AppBar/>
      {children}
      <BottomNavigation />
    </AppWrapper>
  );
};

export default MainTemplate;
