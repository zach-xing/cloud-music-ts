import React from "react";
import { Block } from "./MusicBlock.style";

interface IProps {
  name?: string;
  picUrl: string;
  blockWidth: string;
}
/**
 * 音乐块
 */
const MusicBlock: React.FC<IProps> = (props: IProps) => {
  return (
    <Block width={props.blockWidth}>
      <img src={props.picUrl} alt={props.name || "null"} />
      {props.name && <p>{props.name}</p>}
    </Block>
  );
};

export default MusicBlock;
