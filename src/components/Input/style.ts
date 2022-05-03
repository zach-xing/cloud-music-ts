import styled from "styled-components";

export interface StyleProps {
  width?: string;
}

export const SearchInput = styled("input")<StyleProps>`
  box-sizing: border-box;
  margin: 0;
  list-style: none;
  position: relative;
  display: inline-block;
  width: ${(props) => props.width};
  min-width: 0;
  padding: 4px 11px;
  color: white;
  font-size: 16px;
  line-height: 1.5715;
  background-color: transparent;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  transition: all 0.3s;
  outline: none;
  &:hover {
    border: 1px solid;
    border-color: var(--main-fontColor);
  }
`;
