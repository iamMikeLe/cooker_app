import React from 'react';
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { ThemeProvider } from "styled-components";
import T from "i18n-react";
import thunk from "redux-thunk";
import theme from 'Theme/mainTheme';

// reducers
import BottomNavigation from 'Store/reducers/bottomNavigation';
import Recipes from 'Store/reducers/Recipes';

import MainRouter from 'Router/MainRouter';
import { MobileWrapper } from 'Theme/phoneWrapperStyle';

// set translationFile
T.setTexts(require("Constants/Translations/en_EN.json"));

// combine reducers
const rootReducer = combineReducers({
  bottomNavigation: BottomNavigation,
  Recipes,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));


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
