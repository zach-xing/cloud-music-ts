import styled from "styled-components";

export const Block = styled.div``;

/**
 * 显示一条歌曲信息的样式块
 */
export const ItemStyleBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5px;
  border-radius: 10px;
  img {
    width: 48px;
    height: 48px;
    border-radius: 10px;
    margin-right: 20px;
  }
  .info {
    flex: 1;
    .songName {
      font-size: 18px;
      font-weight: bold;
    }
    .name {
      font-size: 14px;
    }
  }
  :hover {
    background-color: rgba(34, 34, 34, 0.86);
  }
`;
