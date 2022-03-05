import { Redirect, Route } from "react-router-dom";
import type { IRoute } from "../../routes";
import { isLogined } from "../../utils/auth";

/**
 * 路由鉴权
 */
const AuthRoute = (props: IRoute) => {
  const { meta } = props;
  console.log("路由鉴权", isLogined());

  if (meta && meta.isAuth && !isLogined()) {
    return <Redirect to="/login" />;
  }

  return <Route {...props} />;
};

export default AuthRoute;
