import { useLocation } from "react-router-dom";
import { HeaderBlock, Nav, NavLink } from "./Header.style";

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
            id={item.href}
            className={pathname === item.href ? "active" : ""}
          >
            {item.name}
          </NavLink>
        ))}
      </Nav>
      <div></div>
    </HeaderBlock>
  );
};

export default Header;
