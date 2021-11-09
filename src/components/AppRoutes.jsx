import React, {useState, useContext} from "react";
import { Route, Switch, Redirect} from "react-router-dom";
import Users from "../pages/Users";
import Devices from "../pages/Devices";
import Posts from "../pages/Posts";
import Home from "../pages/Home";
import Login from "../pages/Login";
import AuthContext from "../context";


const AppRoutes = () => {
  const {isAuth} = useContext(AuthContext);
  
  return (
    isAuth?
    <Switch>
      <Route path="/users" component={Users} />
      <Route path="/devices" component={Devices} />
      <Route path="/posts" component={Posts} />
      <Route path="/home" component={Home} />
      <Redirect to="/home" />
    </Switch>
    :
    <Switch>
      <Route path="/login" component={Login} />     
      <Redirect to="/login" />  
    </Switch>

  );
};

export default AppRoutes;
