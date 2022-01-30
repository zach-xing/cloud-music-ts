import React from "react";
import { Block } from "./MusicBlock.style";

interface IProps {
  name: string;
  picUrl: string;
}

const MusicBlock: React.FC<IProps> = () => {
  return <Block>Hello sdf</Block>;
};

export default MusicBlock;
