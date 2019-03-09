import React from 'react';

import  {Route, Switch} from "react-router-dom";
import Home from "./Component/Home/Home";
import Page404 from "./Error/Page404";

const Router = () => (
  <Switch>
    <Route exact path = "/" component={Home} />
    <Route  component={Page404} />
  </Switch>
)

export default Router;