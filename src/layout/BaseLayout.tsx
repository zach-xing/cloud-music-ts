import React from "react";
import { NavLink } from "react-router-dom";
import Route from "../routes";

import "./BaseLayout.scss";

const BaseLayout: React.FC = () => {
  return (
    <div>
      <header className="headerStyle">
        <div className="tabNav">
          <div style={{ color: "white" }}>这是LOGO 这是LOGO</div>
          <NavLink exact to="/" activeClassName="selected">
            <div className="tabItem">
              <span>发现音乐</span>
            </div>
          </NavLink>
          <NavLink to="/my" activeClassName="selected">
            <div className="tabItem">
              <span>我的音乐</span>
            </div>
          </NavLink>
          <NavLink to="/my" activeClassName="selected">
            <div className="tabItem">
              <span>朋友</span>
            </div>
          </NavLink>
        </div>
        <div>
          <input type="search" name="info" id="info" />
        </div>
      </header>

      <main>
        <Route />
      </main>
    </div>
  );
};

export default BaseLayout;
