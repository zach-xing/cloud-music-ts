import styled from "styled-components";

interface IContainer {
  height: number;
}
/**
 * 包含块
 */
export const Container = styled.div<IContainer>`
  overflow-y: auto;
  overflow-x: hidden;
  height: ${(props) => props.height}px;
  border-radius: 10px;
  ::-webkit-scrollbar,
  ::-webkit-scrollbar-thumb {
    width: 16px;
    border-radius: 10px;
    background-clip: padding-box;
    border: 3px solid transparent;
  }

  ::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 0 5px;
    color: rgba(121, 121, 121, 0.5);
  }

  ::-webkit-scrollbar-track-piece {
    background-color: #2d2d2d;
  }
`;
