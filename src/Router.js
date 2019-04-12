import React from 'react';

import  {Route, Switch} from "react-router-dom";
import Home from "./Component/Home/Home";
import Page404 from "./Error/Page404";
import Profile from "./Component/Profile/Profile";
import Calendar from "./Component/Calendar/Calendar";
import EditProfile from "./Component/Profile/EditProfile";
import RegisterUser from "./Component/Register/RegisterUser";
import User from "./Component/User/User";
import RegisterVet from "./Component/Register/RegisterVet";
import AddPets from "./Component/Pets/AddPets";
import ProfileVet from "./Component/Vet/Profile/ProfileVet";
import FormFiles from "./Component/Vet/Files/FormFiles";

const Router = ( ) => (
  <Switch>
    <Route exact path = "/" component={Home} />
    <Route exact path = "/profile" component={Profile} />
    <Route exact path = "/calendar" component={Calendar} />
    <Route exact path = "/editProfile" component={EditProfile} />
    <Route exact path = "/register/user" component={RegisterUser} />
    <Route exact path = "/register/vet" component={RegisterVet} />
    <Route exact path = "/user" component={User} />
    <Route exact path = "/addPets" component={AddPets} />
    <Route exact path = "/profileVet" component={ProfileVet} />
    <Route exact path = "/formFiles" component={FormFiles} />
    
    <Route  component={Page404} />
  </Switch>
)

export default Router;