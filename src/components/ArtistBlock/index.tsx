import React from "react";
import { Block } from "./style";

interface IProps {
  id: number; // id
  picUrl: string; // 图片地址
  blockWidth: string; // 宽度
  name: string;
}

/**
 * 艺人 组件
 */
const ArtistBlock = (props: IProps) => {
  return (
    <Block
      width={props.blockWidth}
      // onClick={handleClick}
    >
      <img src={props.picUrl} alt={props.name} />
      <p style={{ textAlign: "center" }}>{props.name}</p>
    </Block>
  );
};

export default ArtistBlock;
