import React from "react";
import { NavLink, Route, Switch, Redirect } from "react-router-dom";

import Recommend from "./Recommend";
import "./style.scss";

const Discover: React.FC = () => {
  return (
    <div>
      <header className="discoverHeaderStyle">
        <div className="nav">
          <span>
            <NavLink to="/discover/recommend">推荐</NavLink>
          </span>
          <span>
            <NavLink to="/discover/recommend">排行榜</NavLink>
          </span>
          <span>
            <NavLink to="/discover/recommend">歌单</NavLink>
          </span>
          <span>
            <NavLink to="/discover/recommend">每日推荐</NavLink>
          </span>
        </div>
      </header>

      <main>
        <Switch>
          <Route path="/discover/recommend" component={Recommend} />
          <Redirect to="/discover/recommend" />
        </Switch>
      </main>
    </div>
  );
};

export default Discover;
