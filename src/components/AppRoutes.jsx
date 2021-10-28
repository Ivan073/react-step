import React, {useState} from "react";
import { Route, Switch } from "react-router-dom";
import Users from "../pages/Users";
import Devices from "../pages/Devices";
import Loader from "react-loader-spinner";

const AppRoutes = () => {
  const delay = 500;
  const [loading, setLoading] = useState(true);
  setTimeout(()=>{
    setLoading(false);
  },delay)
  if(loading){
    return <Loader
      className="loader"
      type="Grid"
      color="#c9424e"
      height={100}
      width={100}
    />
  }
  return (
    <Switch>
      <Route path="/users" component={Users} />
      <Route path="/devices" component={Devices} />
    </Switch>
  );
};

export default AppRoutes;
