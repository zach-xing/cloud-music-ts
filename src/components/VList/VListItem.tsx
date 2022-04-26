import styled from "styled-components";

interface StyleProps {
  height: number;
  translateY: number;
}
/**
 * 显示一条歌曲信息的样式块
 */
export const StyleVListItem = styled.div<StyleProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: "100%",
  height: ${(props) => props.height}px
  padding: 10px 5px;
  border-radius: 10px;
  position: "absolute";
  top: 0;
  left: 0;
  right: 0;
  transform: translateY(${(props) => props.translateY}px);
  img {
    width: 48px;
    height: 48px;
    border-radius: 10px;
    margin-right: 20px;
  }
  .info {
    flex: 1;
    .songName {
      font-size: 18px;
      font-weight: bold;
    }
    .name {
      font-size: 14px;
    }
  }
  :hover {
    background-color: rgba(34, 34, 34, 0.86);
  }
`;

type IProps = {
  data: any;
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
      <img src={data.al.picUrl} alt={data.al.picUrl} />
      <div className="info">
        <div className="songName">{data.name}</div>
        <div className="name">{data.ar[0].name}</div>
      </div>
      <div style={{ flex: 1 }}>{data.al.name}</div>
      <div>{data.dt}</div>
    </StyleVListItem>
  );
};

export default List;
