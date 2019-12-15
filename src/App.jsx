import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// pages
import ExamplePage from "Pages/examplePage/ExamplePage";

// reducers
import Album from "Store/reducers/Albums";

// combine reducers
const rootReducer = combineReducers({
  album: Album,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/examplePage/" />} />
          <Route exact path="/examplePage" component={ExamplePage} />
          <Route path="*" component={() => <p>error page</p>} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
