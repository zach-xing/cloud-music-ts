import dayjs from "dayjs";
import { StyleVListItem } from "./style";
import type { StyleProps } from "./style";

type IProps = {
  data: API.Song;
  index: number;
} & StyleProps;

/**
 * 歌单列表项
 */
const List = (props: IProps) => {
  const { data } = props;

  const handleDoubleClick = () => {
    localStorage.setItem("player", JSON.stringify(data));
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
        <div className="name">{data.ar && data.ar[0].name}</div>
      </div>
      <div style={{ flex: 1 }}>{data.al && data.al.name}</div>
      <div>{dayjs(data.dt).format("mm:ss")}</div>
    </StyleVListItem>
  );
};

export default List;
