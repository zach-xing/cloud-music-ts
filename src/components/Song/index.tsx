import React from "react";
import useStores from "../../store";
import { StyleDiv } from "./style";

interface IProps {
  data: API.Song;
}

/**
 * 单个歌曲的信息展示
 */
const SongItem: React.FC<IProps> = (props) => {
  const { playerStore } = useStores();
  const { data } = props;
  const playMusic = () => {
    playerStore.playCurSong(data);
  };

  return (
    <StyleDiv>
      <img
        src={data.al ? data.al?.picUrl : data.album?.picUrl}
        alt={data.name}
        onDoubleClick={playMusic}
      />
      <div>
        <div className="name" onDoubleClick={playMusic}>
          {data.name}
        </div>
        <div className="songer">
          {data.ar ? data.ar[0].name : data.artists![0].name}
        </div>
      </div>
    </StyleDiv>
  );
};

export default SongItem;
