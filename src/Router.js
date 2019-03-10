import React from 'react';

import  {Route, Switch} from "react-router-dom";
import Home from "./Component/Home/Home";
import Page404 from "./Error/Page404";
import Profile from "./Component/Profile/Profile";
import Calendar from "./Component/Calendar/Calendar";

const Router = () => (
  <Switch>
    <Route exact path = "/" component={Home} />
    <Route exact path = "/profile" component={Profile} />
    <Route exact path = "/calendar" component={Calendar} />
    <Route  component={Page404} />
  </Switch>
)

export default Router;