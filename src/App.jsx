import React from 'react';
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { ThemeProvider } from "styled-components";
import thunk from "redux-thunk";
import { theme } from 'Theme/mainTheme';

// reducers
import Album from "Store/reducers/Albums";
import MainRouter from 'Router/MainRouter';

// combine reducers
const rootReducer = combineReducers({
  album: Album,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MainRouter />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
