import React from "react";
import { Block } from "./MusicBlock.style";

interface IProps {
  name: string;
  picUrl: string;
}

const MusicBlock: React.FC<IProps> = (props: IProps) => {
  return (
    <Block>
      <img src={props.picUrl} alt={props.name} />
      <p>{props.name}</p>
    </Block>
  );
};

export default MusicBlock;
