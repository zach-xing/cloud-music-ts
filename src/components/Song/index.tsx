import React from "react";
import { StyleDiv } from "./style";

interface IProps {
  data: API.Song;
}

/**
 * 单个歌曲的信息展示
 */
const SongItem: React.FC<IProps> = (props) => {
  const { data } = props;
  const playMusic = () => {
    localStorage.setItem("player", JSON.stringify(data));
  };

  return (
    <StyleDiv>
      <img src={data.al?.picUrl} alt={data.name} onDoubleClick={playMusic} />
      <div>
        <div className="name" onDoubleClick={playMusic}>
          {data.name}
        </div>
        <div className="songer">{data.ar![0].name}</div>
      </div>
    </StyleDiv>
  );
};

export default SongItem;
