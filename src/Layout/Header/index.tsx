import { useLocation } from "react-router-dom";
import { StyleHeader, StyleNav, StyleNavLink, SearchInput } from "./style";
import routes from "../../routes";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <StyleHeader>
      <StyleNav>
        {routes.map((item) => {
          if (item.meta && item.meta.isDirectory) {
            return (
              <StyleNavLink
                key={item.path}
                href={item.path}
                className={pathname === item.path ? "active" : ""}
              >
                {item.name}
              </StyleNavLink>
            );
          } else return null;
        })}
      </StyleNav>
      <div style={{ display: "flex", alignItems: "center", color: "white" }}>
        <SearchInput placeholder="搜索" />
        <p>更多</p>
      </div>
    </StyleHeader>
  );
};

export default Header;
