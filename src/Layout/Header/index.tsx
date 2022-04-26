import { useLocation } from "react-router-dom";
import { StyleHeader, StyleNav, StyleNavLink, SearchInput } from "./style";

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

const Header = () => {
  const { pathname } = useLocation();

  return (
    <StyleHeader>
      <StyleNav>
        {routes.map((item) => (
          <StyleNavLink
            key={item.path}
            href={item.path}
            className={item.path === pathname ? "active" : ""}
          >
            {item.name}
          </StyleNavLink>
        ))}
      </StyleNav>
      <div style={{ display: "flex", alignItems: "center", color: "white" }}>
        <SearchInput placeholder="搜索" />
        <p>更多</p>
      </div>
    </StyleHeader>
  );
};

export default Header;
