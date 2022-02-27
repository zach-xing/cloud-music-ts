import styled from "styled-components";

export const Block = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 64px;
  z-index: 100;
  padding: 0 10vw;
  background-color: rgba(34, 34, 34, 0.86);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

/**
 * 信息样式块
 */
export const InfoStyleBlock = styled.div`
  flex: 1;
  display: flex;
  img {
    width: 48px;
    height: 48px;
    border-radius: 10px;
    margin-right: 20px;
  }
  .songInfo {
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
  flex: 1;
  img {
    width: 36px;
    height: 36px;
    margin: 0 20px;
    cursor: pointer;
  }
`;

/**
 * 其他 样式块
 */
export const OtherStyleBlock = styled.div`
  /* flex: 1; */
`;