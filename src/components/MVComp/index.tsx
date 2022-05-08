import React from "react";
import { useNavigate } from "react-router-dom";
import LazyLoadImg from "../LazyLoadImg";
import { StyleMVDiv } from "./style";

/**
 * 单个 MV 展示
 */
const MVComp: React.FC<API.MV> = (props) => {
  const navigate = useNavigate();

  const jumpToMV = (id: number| string) => {
    navigate(`/mv/${id}`);
  };

  return (
    <StyleMVDiv>
      <LazyLoadImg
        url={`${props.imgurl}?param=464y260`}
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
