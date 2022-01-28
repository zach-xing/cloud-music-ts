import styled from "styled-components";

export const HeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  width: 100%;
  padding: 0 10vw;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;

export const Nav = styled.nav`
  display: flex;

`;

export const NavLink = styled.a`
  text-decoration: none;
  margin: 0 10px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  padding: 10px;
  border-radius: 10px;
  &.active {
    color: #335eea;
  }
  &:hover {
    background-color: hsla(0,0%,100%,0.08);
  }
`;