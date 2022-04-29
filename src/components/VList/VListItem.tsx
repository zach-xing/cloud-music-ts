import dayjs from "dayjs";
import { StyleVListItem } from "./style";
import type { StyleProps } from "./style";
import { useNavigate } from "react-router-dom";

type IProps = {
  data: API.Song;
  index: number;
} & StyleProps;

/**
 * 歌单列表项
 */
const List = (props: IProps) => {
  const navigate = useNavigate();
  const { data } = props;
  
  // 双击播放音乐
  const handleDoubleClick = () => {
    localStorage.setItem("player", JSON.stringify(data));
  };

  const jumpToArtist = (id: number | undefined) => {
    if (id === undefined) return;
    navigate(`/artist/${id}`);
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
        <div
          className="name"
          onClick={() => jumpToArtist(data.ar && data.ar[0].id)}
        >
          {data.ar && data.ar[0].name}
        </div>
      </div>
      <div style={{ flex: 1 }}>{data.al && data.al.name}</div>
      <div>{dayjs(data.dt).format("mm:ss")}</div>
    </StyleVListItem>
  );
};

export default List;
