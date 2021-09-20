import { Route, Switch, Redirect } from "react-router-dom";

import Home from "../pages/Home";
import Discover from "../pages/Discover";

const routes = () => {
  return (
    <Switch>
      <Route path="/discover" component={Discover} />
      <Route path="/my" component={Home} />
      <Redirect to="/discover" />
    </Switch>
  );
};

export default routes;
