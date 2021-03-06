import React from 'react';
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import T from "i18n-react";
import styled, { ThemeProvider } from "styled-components";
import thunk from "redux-thunk";
import theme from 'Theme/mainTheme';

// reducers
import BottomNavigation from 'Store/reducers/bottomNavigation';
import Recipes from 'Store/reducers/Recipes';

import MainRouter from 'Router/MainRouter';

// set translationFile
T.setTexts(require("Constants/Translations/en_EN.json"));

// combine reducers
const rootReducer = combineReducers({
  bottomNavigation: BottomNavigation,
  Recipes,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const MobileWrapper = styled.div`
    @media only screen and (min-width: 768px) {
    position: absolute;
    margin: auto;
    left: 0;
    right:0;
    bottom: 10px;
    width: 360px;
    min-height: 80vh;
    height: calc(100vh - 674px);
    margin: auto;
    border: 16px black solid;
    border-top-width: 60px;
    border-bottom-width: 60px;
    border-radius: 36px;
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
 

    &:before {
      content: '';
      display: block;
      width: 60px;
      height: 5px;
      position: absolute;
      top: -30px;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #333;
      border-radius: 10px;
    }

    &:after {
      content: '';
      display: block;
      width: 35px;
      height: 35px;
      position: absolute;
      left: 50%;
      bottom: -65px;
      transform: translate(-50%, -50%);
      background: #333;
      border-radius: 50%;
    }
  }
`;

function App() {
  return (
    <Provider store={store}>
      <MobileWrapper>
        <ThemeProvider theme={theme}>
          <MainRouter />
        </ThemeProvider>
      </MobileWrapper>
    </Provider>
  );
}

export default App;
