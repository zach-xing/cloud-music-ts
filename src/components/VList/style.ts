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
  will-change: transform;
  border-top: 1px solid var(--main-Color);
  border-bottom: 1px solid var(--main-Color);
  ::-webkit-scrollbar,
  ::-webkit-scrollbar-thumb {
    width: 16px;
    border-radius: 10px;
    background-clip: padding-box;
    border: 5px solid transparent;
  }

  ::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 0 5px;
    color: rgba(121, 121, 121, 0.5);
  }

  ::-webkit-scrollbar-track-piece {
    background-color: #2d2d2d;
  }
`;

export interface StyleProps {
  height: number;
  translateY: number;
}
/**
 * 显示一条歌曲信息的样式块
 */
export const StyleVListItem = styled.div<StyleProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 99%; // 为滚动条腾点位置
  height: ${(props) => props.height}px;
  padding: 3px 0;
  border-radius: 10px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  transform: translateY(${(props) => props.translateY}px);
  img {
    width: 48px;
    height: 48px;
    border-radius: 10px;
    margin-right: 20px;
    cursor: pointer;
  }
  .info {
    flex: 1;
    .songName {
      font-size: 18px;
      font-weight: bold;
      cursor: default;
    }
    .name {
      font-size: 14px;
      cursor: pointer;
      margin-right: 5px;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  :hover {
    background-color: rgba(34, 34, 34, 0.86);
  }
`;
