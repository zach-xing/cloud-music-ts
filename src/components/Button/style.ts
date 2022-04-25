import styled from "styled-components";

/**
 * Button 的 样式 props
 */
export interface StyleProps {
  size?: "block" | "default";
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
  color: var(--main-buttonColor);
  background-color: var(--main-Color);
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,
    rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1);
  }
`;