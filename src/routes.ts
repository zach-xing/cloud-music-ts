import React from "react";

import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Library from "./pages/Library";
import Login from "./pages/Login";
// // import MyLovePlayList from "./pages/Library/MyLovePlayList";
// import PlayList from "./pages/PlayList";

interface IMeta {
  isAuth: boolean; // 表示是否需要登录状态(路由鉴权) true 表示需要登录
  isDirectory: boolean; // 是否是目录
}

export interface IRoute {
  name: string;
  path: string;
  exact: boolean;
  component: React.ComponentType<React.ReactNode>;
  meta?: Partial<IMeta>;
}

/**
 * 路由管理
 */
const routes: IRoute[] = [
  {
    name: "首页",
    path: "/",
    exact: true,
    component: Home,
    meta: {
      isDirectory: true,
    },
  },
  {
    name: "发现",
    path: "/discover",
    exact: true,
    component: Discover,
    meta: {
      isDirectory: true,
    },
  },
  // {
  //   name: "MyLovePlayList",
  //   path: "/library/lovesongs",
  //   exact: true,
  //   component: MyLovePlayList,
  // },
  {
    name: "音乐库",
    path: "/library",
    exact: true,
    component: Library,
    meta: {
      isAuth: true,
      isDirectory: true,
    },
  },
  {
    name: "Login",
    path: "/login",
    exact: true,
    component: Login,
  },
  // {
  //   name: "PlayList",
  //   path: "/playlist/:id",
  //   exact: true,
  //   component: PlayList,
  // },
];

export default routes;
