import React from "react";

import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Library from "./pages/Library";
import Login from "./pages/Login";

interface IMeta {
  isAuth: boolean; // 表示是否需要登录状态(路由鉴权) true 表示需要登录
  isDirectory: boolean; // 是否是目录
}

export interface IRoute {
  name: string;
  path: string;
  component: React.ComponentType<React.ReactNode>;
  childrens?: IRoute[];
  meta?: Partial<IMeta>;
}

/**
 * 路由管理
 */
const routes: IRoute[] = [
  {
    name: "Home",
    path: "/",
    component: Home,
    meta: {
      isDirectory: true,
    },
  },
  {
    name: "Login",
    path: "/login",
    component: Login,
  },
  {
    name: "Discover",
    path: "/discover",
    component: Discover,
    meta: {
      isDirectory: true,
    },
  },
  {
    name: "Library",
    path: "/library",
    component: Library,
    meta: {
      isAuth: true,
      isDirectory: true,
    },
  },
];

export default routes;
