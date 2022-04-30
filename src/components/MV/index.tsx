import React from "react";
import { StyleMVDiv } from "./style";

/**
 * 单个 MV 展示
 */
const MV: React.FC<API.MV> = (props) => {
  return (
    <StyleMVDiv>
      <img src={`${props.imgurl}?param=464y260`} alt={props.name} />
      <div className="name">{props.name}</div>
      <div className="time">{props.publishTime}</div>
    </StyleMVDiv>
  );
};

export default MV;
