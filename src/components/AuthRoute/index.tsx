import { Redirect, Route } from "react-router-dom";
import type { IRoute } from "../../routes";

/**
 * 路由鉴权
 */
const AuthRoute = (props: IRoute) => {
  const { path, component, meta } = props;

  if (meta && meta.isAuth) {
    //TODO: 未登录状态

    return <Redirect to="/login" />;
  }

  return <Route exact path={path} component={component} />;
};

export default AuthRoute;
