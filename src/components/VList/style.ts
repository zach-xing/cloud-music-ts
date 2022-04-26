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
  ::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
`;