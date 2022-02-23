import { useLocation } from "react-router-dom";
import { HeaderBlock, Nav, NavLink, SearchInput, Avatar } from "./Header.style";
import routes from "../../routes";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <HeaderBlock>
      <Nav>
        {routes.map((item) => {
          if (item.meta && item.meta.isDirectory) {
            return (
              <NavLink
                href={item.path}
                key={item.path}
                className={pathname === item.path ? "active" : ""}
              >
                {item.name}
              </NavLink>
            );
          } else return null;
        })}
      </Nav>
      <div style={{ display: "flex", alignItems: "center" }}>
        <SearchInput placeholder="搜索" />
        <Avatar>更多</Avatar>
      </div>
    </HeaderBlock>
  );
};

export default Header;
