import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "../App";
import Article from "./Article";
import Header from "./Header";

const Routers = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/article/:id" component={Article} />
    </Switch>
  </Router>
);

export default Routers;
