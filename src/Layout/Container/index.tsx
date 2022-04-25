import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import AuthRoute from "./AuthRoute";
import routes from "../../routes";

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
  return (
    <Main>
      <Switch>
        {routes.map((item) => {
          if (item.meta && item.meta.isAuth) {
            return <AuthRoute key={item.path} {...item} />;
          } else {
            return <Route key={item.path} {...item} />;
          }
        })}
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </Main>
  );
};

export default Container;
