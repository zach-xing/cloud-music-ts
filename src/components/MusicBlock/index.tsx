import React from "react";
import { useHistory } from "react-router-dom";
import { Block } from "./MusicBlock.style";

interface IProps {
  id: number; // id
  name: string;
  picUrl: string; // 图片地址
  blockWidth: string; // 宽度
  notes?: string; // 注释
}
/**
 * 音乐块
 */
const MusicBlock: React.FC<IProps> = (props: IProps) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/playlist/${props.id}`);
  };

  return (
    <Block width={props.blockWidth} onClick={handleClick}>
      <img src={props.picUrl} alt={props.name || "null"} />
      <p style={{ textAlign: "center" }}>{props.name}</p>
      {props.notes && (
        <div
          style={{
            textAlign: "center",
            fontSize: "10px",
            marginTop: "-10px",
            color: "#b6b6b6",
          }}
        >
          {props.notes}
        </div>
      )}
    </Block>
  );
};

export default MusicBlock;
