import React from "react";
import styled from "styled-components";

const StyleDiv = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  border-radius: 10px;
  transition: all 0.2s ease;
  img {
    height: 48px;
    width: 48px;
    border-radius: 10px;
    margin-right: 10px;
    cursor: pointer;
  }
  .name {
    font-size: 1.1rem;
    cursor: pointer;
  }
  .songer {
    font-size: 0.9rem;
  }
  &:hover {
    color: var(--main-Color);
    background-color: var(--main-bgColor);
  }
`;

interface IProps {
  name: string; // 歌曲名
  picUrl: string;
  arName: string; // 歌手名
}

/**
 * 每个歌曲的信息展示（应用到12个推荐歌曲汇总）
 */
const SongItem: React.FC<IProps> = (props) => {
  return (
    <StyleDiv>
      <img src={props.picUrl} alt={props.name} />
      <div>
        <div className="name">{props.name}</div>
        <div className="songer">{props.arName}</div>
      </div>
    </StyleDiv>
  );
};

export default SongItem;
