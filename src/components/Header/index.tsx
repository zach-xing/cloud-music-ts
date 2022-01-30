import { useLocation } from "react-router-dom";
import { HeaderBlock, Nav, NavLink, SearchInput, Avatar } from "./Header.style";

// 路由信息
const routes = [
  {
    name: "首页",
    href: "/",
  },
  {
    name: "发现",
    href: "/discover",
  },
  {
    name: "音乐库",
    href: "/library",
  },
];

const Header = () => {
  const { pathname } = useLocation();

  return (
    <HeaderBlock>
      <Nav>
        {routes.map((item) => (
          <NavLink
            href={item.href}
            key={item.href}
            className={pathname === item.href ? "active" : ""}
          >
            {item.name}
          </NavLink>
        ))}
      </Nav>
      <div style={{display: "flex", alignItems: "center"}}>
        <SearchInput placeholder="搜索" />
        <Avatar>更多</Avatar>
      </div>
    </HeaderBlock>
  );
};

export default Header;
