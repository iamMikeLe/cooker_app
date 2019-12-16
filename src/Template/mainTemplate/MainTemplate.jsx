import React from "react";
import styled from "styled-components";
// import PropTypes from "prop-types";

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const MainTemplate = ({ children }) => {
  return (
    <AppWrapper>
      {children}
    </AppWrapper>
  );
};

export default MainTemplate;
/* 
MainTemplate.propTypes = {
  
};

MainTemplate.defaultProps = {
  
};
 */