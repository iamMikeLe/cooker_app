import React from 'react';
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

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
        <MainRouter />
    </Provider>
  );
}

export default App;
