import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Home from "../pages/Home";
import Recommend from "../pages/Recommend";

const routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/recommend" component={Recommend} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default routes;
