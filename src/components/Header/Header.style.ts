import { styled } from "@mui/material/styles";

export const HeaderBlock = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "64px",
  width: "100%",
  padding: "0 10vw",
  position: "fixed",
  top: "0",
  left: "0",
  right: "0",
  zIndex: "100",
  backgroundColor: "rgb(34,34,34)",
  color: "#000",
});

export const Nav = styled("nav")({
  display: "flex",
});

export const NavLink = styled("a")({
  textDecoration: "none",
  margin: "0 10px",
  fontSize: "18px",
  fontWeight: "bold",
  color: "#fff",
  padding: "10px",
  borderRadius: "10px",
  "&.active": {
    color: "#335eea",
  },
  "&:hover": {
    backgroundColor: "hsla(0,0%,100%,0.08)",
  },
});

// 搜索框
export const SearchInput = styled("input")({
  width: "200px",
  height: "32px",
  outline: "none",
  borderRadius: "10px",
  fontSize: "16px",
  padding: "0 10px",
  marginRight: "15px",
});

export const Avatar = styled("div")({
  color: "#fff",
  fontSize: "16px",
  cursor: "pointer",
});
