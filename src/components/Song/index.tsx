import React from "react";
import { StyleDiv } from "./style";

interface IProps {
  name: string; // 歌曲名
  picUrl: string;
  arName: string; // 歌手名
}

/**
 * 单个歌曲的信息展示
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
