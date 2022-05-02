import React from "react";
import { useNavigate } from "react-router-dom";
import { StyleMVDiv } from "./style";

/**
 * 单个 MV 展示
 */
const MVComp: React.FC<API.MV> = (props) => {
  const navigate = useNavigate();

  const jumpToMV = (id: number) => {
    navigate(`/mv/${id}`);
  };

  return (
    <StyleMVDiv>
      <img
        src={`${props.imgurl}?param=464y260`}
        onClick={() => jumpToMV(props.id)}
        alt={props.name}
      />
      <div className="name" onClick={() => jumpToMV(props.id)}>
        {props.name}
      </div>
      <div className="time">{props.publishTime}</div>
    </StyleMVDiv>
  );
};

export default MVComp;