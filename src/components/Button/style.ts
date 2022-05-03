import styled from "styled-components";

/**
 * Button 的 样式 props
 */
export interface StyleProps {
  size?: "block" | "default";
  danger?: boolean;
}

export const StyleButton = styled.button<StyleProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  outline: 0px;
  border: 0px;
  margin: 5px 0;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  text-transform: uppercase;
  min-width: 64px;
  width: ${(props) => (props.size === "default" ? "auto" : "100%")};
  padding: 6px 16px;
  border-radius: 4px;
  color: ${(props) => (props.danger ? "red" : "var(--main-buttonColor)")};
  background-color: ${(props) =>
    props.danger ? "white" : "var(--main-Color)"};
  ${(props) => (props.danger ? "border: 1px solid red;" : "")}; // 若是 danger 则显示边框
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,
    rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(1);
  }
`;
