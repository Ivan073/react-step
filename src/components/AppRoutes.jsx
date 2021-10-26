import React from "react";
import { Route, Switch } from "react-router-dom";
import Users from "../pages/Users";
import Devices from "../pages/Devices";

const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/users" component={Users} />
      <Route path="/devices" component={Devices} />
    </Switch>
  );
};

export default AppRoutes;
