import { useRoutes } from "react-router-dom";
import styled from "styled-components";
import NoFound from "../../pages/404";
import AuthRoute from "./AuthRoute";
import Home from "../../pages/Home";
import Discover from "../../pages/Discover";
import Library from "../../pages/Library";
import LikedSongs from "../../pages/Library/LikedSongs";
import Login from "../../pages/Login";
import PlayList from "../../pages/PlayList";

const Main = styled("main")`
  min-height: calc(100vh - 64px);
  margin-top: 64px;
  padding: 0 10vw;
  padding-top: 20px;
  padding-bottom: 64px;
  color: white;
  background-color: var(--main-bgColor);
`;

const Container = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/discover",
      element: <Discover />,
    },
    {
      path: "/library",
      children: [
        {
          index: true,
          element: (
            <AuthRoute>
              <Library />
            </AuthRoute>
          ),
        },
        {
          path: "liked-songs",
          element: <LikedSongs />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/playlist/:id",
      element: <PlayList />,
    },
    {
      path: "*",
      element: <NoFound />,
    },
  ]);

  return <Main>{element}</Main>;
};

export default Container;
