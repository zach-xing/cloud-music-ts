import styled from "styled-components";

export const SongGridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
`;

/**
 * 歌手信息样式组件
 */
export const ArtistInfoDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
  img {
    width: 20%;
    clip-path: circle(45%);
  }
  .info {
    h1 {
      margin-top: 0px;
    }
    .desc {
      cursor: pointer;
      opacity: 0.68;
      margin: 20px 0;
      user-select: none;
      white-space: pre-line;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      &:hover {
        opacity: 1;
      }
    }
  }
`;
