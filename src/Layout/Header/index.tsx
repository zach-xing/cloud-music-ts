import { observer } from "mobx-react-lite";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import useStores from "../../store";
import { isLogined } from "../../utils/auth";
import { StyleHeader, StyleNav, StyleNavLink } from "./style";

const routes: Array<{ name: string; path: string }> = [
  {
    name: "首页",
    path: "/",
  },
  {
    name: "发现",
    path: "/discover",
  },
  {
    name: "音乐库",
    path: "/library",
  },
];

const Header = observer(() => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { userStore } = useStores();

  return (
    <StyleHeader>
      <StyleNav>
        {routes.map((item) => (
          <StyleNavLink
            key={item.path}
            onClick={() => navigate(item.path)}
            className={item.path === pathname ? "active" : ""}
          >
            {item.name}
          </StyleNavLink>
        ))}
      </StyleNav>
      <div style={{ display: "flex", alignItems: "center", color: "white" }}>
        {/* <SearchInput placeholder="搜索" /> */}
        <Input
          placeholder="搜索"
          defaultValue={""}
          style={{ marginRight: "10px" }}
        />
        {isLogined() ? (
          <img
            src={userStore.profile.avatarUrl}
            alt="个人头像"
            onClick={() => navigate("/user")}
          />
        ) : (
          <Button onClick={() => navigate("/login")}>登录</Button>
        )}
      </div>
    </StyleHeader>
  );
});

export default Header;
