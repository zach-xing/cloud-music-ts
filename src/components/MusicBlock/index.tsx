import React from "react";
import { Block } from "./MusicBlock.style";

interface IProps {
  name?: string;
  picUrl: string; // 图片地址
  blockWidth: string; // 宽度
  isRound: boolean; // 是否圆形显示
  notes?: string; // 注释
}
/**
 * 音乐块
 */
const MusicBlock: React.FC<IProps> = (props: IProps) => {
  return (
    <Block width={props.blockWidth} isround={props.isRound}>
      <img src={props.picUrl} alt={props.name || "null"} />
      {props.name && <p style={{ textAlign: "center" }}>{props.name}</p>}
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
