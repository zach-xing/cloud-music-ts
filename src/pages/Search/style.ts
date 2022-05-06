import styled from "styled-components";

/**
 * 歌曲布局
 */
export const SongGridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
`;

/**
 * 加载更多按钮居中
 */
export const MoreDiv = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;
