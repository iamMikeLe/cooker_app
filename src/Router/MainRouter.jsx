import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// pages
import Homepage from "Pages/homepage/Homepage";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/homepage/" />} />
        <Route exact path="/homepage" component={Homepage} />
        <Route path="*" component={() => <p>error page</p>} />
      </Switch>
    </BrowserRouter>
  );
};

export default MainRouter;
