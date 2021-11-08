import React from "react";
import { Route, Switch } from "react-router-dom";
import Users from "../pages/Users";
import Devices from "../pages/Devices";
import Posts from "../pages/Posts";
import Home from "../pages/Home";

const AppRoutes = () => {
  
  return (
    <Switch>
     
      <Route path="/users" component={Users} />
      <Route path="/devices" component={Devices} />
      <Route path="/posts" component={Posts} />
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default AppRoutes;
