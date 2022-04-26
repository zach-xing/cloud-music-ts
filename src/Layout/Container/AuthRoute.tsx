import { Navigate } from "react-router-dom";
import { isLogined } from "../../utils/auth";

/**
 * 路由鉴权
 */
const AuthRoute: React.FC<{ children: React.ReactNode }> = (props) => {
  console.log("路由鉴权", isLogined());

  if (!isLogined()) {
    return <Navigate to="/login" replace={true} />;
  }

  return <>{props.children}</>;
};

export default AuthRoute;
