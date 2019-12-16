import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// pages
import ExamplePage from "Pages/examplePage/ExamplePage";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/examplePage/" />} />
        <Route exact path="/examplePage" component={ExamplePage} />
        <Route path="*" component={() => <p>error page</p>} />
      </Switch>
  </BrowserRouter>
  );
};

export default MainRouter;

