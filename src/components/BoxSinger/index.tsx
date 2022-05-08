import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LazyLoadImg from "../LazyLoadImg";

/** Box 的自定义样式组件 */
const StyleBox = styled.div`
  border-radius: 100%;
  img {
    width: 100%;
    clip-path: circle(45%);
    cursor: pointer;
    &:hover {
      box-shadow: 0 0 10px;
    }
  }
  p {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

interface IProps {
  id: number; // 歌手id
  name: string;
  picUrl: string; // 图片地址
}

/**
 * 用于音乐项、专辑项等
 * @returns 块组件
 */
const BoxSinger = (props: IProps) => {
  const navigate = useNavigate();

  // 跳转至歌手页面
  const jumpToArtist = () => {
    navigate(`/artist/${props.id}`);
  };

  return (
    <StyleBox>
      <LazyLoadImg
        url={`${props.picUrl}?param=500y500`}
        alt={props.name || "null"}
        onClick={jumpToArtist}
      />
      <p style={{ textAlign: "center" }} onClick={jumpToArtist}>
        {props.name}
      </p>
    </StyleBox>
  );
};

export default BoxSinger;
