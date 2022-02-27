import React from "react";
import { toDate } from "../../utils/format";
import { Block, ItemStyleBlock } from "./style";

interface IProps {
  songs: Array<any>;
}

/**
 * 歌单列表
 */
const List = (props: IProps) => {
  return (
    <Block>
      {props.songs.map((item) => (
        <ItemStyleBlock key={item.id}>
          <img src={item.al.picUrl} alt={item.al.picUrl} />
          <div className="info">
            <div className="songName">{item.name}</div>
            <div className="name">{item.ar[0].name}</div>
          </div>
          <div style={{ flex: 1 }}>{item.al.name}</div>
          <div>{toDate(item.dt, "mm:ss")}</div>
        </ItemStyleBlock>
      ))}
    </Block>
  );
};

export default List;
