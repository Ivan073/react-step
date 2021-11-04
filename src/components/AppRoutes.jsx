import React from "react";
import { Route, Switch } from "react-router-dom";
import Users from "../pages/Users";
import Devices from "../pages/Devices";
import Posts from "../pages/Posts";

const AppRoutes = () => {
  
  return (
    <Switch>
      <Route path="/users" component={Users} />
      <Route path="/devices" component={Devices} />
      <Route path="/posts" component={Posts} />
    </Switch>
  );
};

export default AppRoutes;
