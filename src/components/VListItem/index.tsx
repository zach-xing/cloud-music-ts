import { toDate } from "../../utils/format";
import { ItemStyleBlock } from "./style";

interface IProps {
  data: any;
  index: number;
  style: any;
}

/**
 * 歌单列表项
 */
const List = (props: IProps) => {
  const { data } = props;

  const handleDoubleClick = () => {
    localStorage.setItem("player", JSON.stringify(data));
  };

  return (
    <ItemStyleBlock
      key={data.id}
      style={props.style}
      onDoubleClick={() => handleDoubleClick()}
    >
      <img src={data.al.picUrl} alt={data.al.picUrl} />
      <div className="info">
        <div className="songName">{data.name}</div>
        <div className="name">{data.ar[0].name}</div>
      </div>
      <div style={{ flex: 1 }}>{data.al.name}</div>
      <div>{toDate(data.dt, "mm:ss")}</div>
    </ItemStyleBlock>
  );
};

export default List;
