import { Redirect, Route } from "react-router-dom";
import type { IRoute } from "../../routes";
import useStores from "../../store";

/**
 * 路由鉴权
 */
const AuthRoute = (props: IRoute) => {
  const { path, component, meta } = props;
  const { userStore } = useStores();
  if (meta && meta.isAuth && userStore.getIsLogin()) {
    return <Redirect to="/login" />;
  }

  return <Route exact path={path} component={component} />;
};

export default AuthRoute;
