import dayjs from "dayjs";
import { StyleVListItem } from "./style";
import type { StyleProps } from "./style";
import { useNavigate } from "react-router-dom";
import useStores from "../../store";

type IProps = {
  data: API.Song;
  index: number;
} & StyleProps;

/**
 * 歌单列表项
 */
const List = (props: IProps) => {
  const navigate = useNavigate();
  const { playerStore } = useStores();
  const { data } = props;

  // 双击播放音乐
  const handleDoubleClick = () => {
    playerStore.playCurSong(data);
  };

  const jumpToArtist = (id: number | undefined) => {
    if (id === undefined) return;
    navigate(`/artist/${id}`);
  };

  const jumpToAlbum = (data: { id: number }) => {
    navigate(`/album/${data.id}`);
  };

  return (
    <StyleVListItem
      key={data.id}
      height={props.height}
      translateY={props.translateY}
      onDoubleClick={() => handleDoubleClick()}
    >
      <img src={data.al && data.al.picUrl} alt={data.name} />
      <div className="info">
        <div className="songName">{data.name}</div>
        <div>
          {data.ar &&
            data.ar.map((item) => (
              <span
                key={item.id}
                className="name"
                onClick={() => jumpToArtist(data.ar && data.ar[0].id)}
              >
                {item.name}
              </span>
            ))}
        </div>
      </div>
      <div
        style={{ flex: 1, cursor: "pointer" }}
        onClick={() => jumpToAlbum(data.al!)}
      >
        {data.al && data.al.name}
      </div>
      <div>{dayjs(data.dt).format("mm:ss")}</div>
    </StyleVListItem>
  );
};

export default List;
