import styled from "styled-components";

/**
 * 底部播放组件样式
 */
export const Block = styled.div<{ height: 64 | 0 }>`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: ${(props) => props.height}px;
  z-index: 100;
  padding: 0 10vw;
  background-color: rgba(34, 34, 34, 0.86);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  transition: all 0.5s ease;
`;

/**
 * 信息样式块
 */
export const InfoStyleBlock = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 48px;
    height: 48px;
    border-radius: 10px;
    margin-right: 20px;
  }
  .songInfo {
    color: white;
    .songName {
      font-size: 18px;
      font-weight: bold;
    }
    .name {
      font-size: 14px;
    }
  }
`;

/**
 * 操作样式块
 */
export const ActionStyleBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 34px;
    height: 34px;
    padding: 3px;
    border-radius: 5px;
    margin: 0 20px;
    cursor: pointer;
    &:hover {
      background-color: hsla(0, 0%, 100%, 0.08);
    }
  }
`;

/**
 * 其他 样式块
 */
export const OtherStyleBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: white;
  img {
    width: 36px;
    cursor: pointer;
  }
`;

/**
 * 全屏样式块
 */
export const FullStyleBlock = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 200;
  display: flex;
  background-color: rgba(0, 0, 0, 0.8);
  &.hidden {
    display: none;
  }
`;

export const LeftStyleBlock = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 48%;
    border-radius: 10px;
  }
  .songInfo {
    margin: 15px 0;
    .songName {
      font-size: 20px;
      font-weight: bold;
    }
    .name {
      font-size: 14px;
    }
  }
  .action {
    display: flex;
    width: 30%;
    justify-content: space-between;
    img {
      cursor: pointer;
      width: 36px;
      height: 36px;
    }
  }
`;

/**
 * 歌词块
 */
export const RightStyleBlock = styled.div<{ y: number }>`
  flex: 1;
  color: white;
  .scroll {
    max-width: 50%;
    transform: translateY(${(props) => props.y + 20}rem);
    transition: all 0.5s ease;
    overflow: hidden;
    div {
      font-size: 20px;
      padding: 0.5rem;
      :hover {
        background-color: hsla(0, 0%, 100%, 0.08);
      }
    }
    .curr {
      color: #bbcdff;
    }
  }
`;

/**
 * 隐藏样式块
 */
export const HiddenStyleBlock = styled.img`
  width: 36px;
  height: 36px;
  padding: 3px;
  border-radius: 3px;
  position: absolute;
  top: 50px;
  right: 50px;
  cursor: pointer;
  &:hover {
    background-color: hsla(0, 0%, 100%, 0.2);
  }
`;
