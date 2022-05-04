import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

/** Box 的自定义样式组件 */
const StyleBox = styled.div`
  border-radius: 15px;
  img {
    width: 100%;
    border-radius: 15px;
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
  id: number; // id
  name: string;
  picUrl: string; // 图片地址
  notes?: string; // 注释
  basePath?: string; // 将要跳转的页面
}

/**
 * 用于音乐项、专辑项等
 * @returns 块组件
 */
const Box = (props: IProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${props.basePath ? props.basePath : "playlist"}/${props.id}`);
  };

  return (
    <StyleBox>
      <img
        src={props.picUrl}
        alt={props.name || "null"}
        onClick={handleClick}
      />
      <p style={{ textAlign: "center", marginBottom: 0 }}>{props.name}</p>
      {props.notes && (
        <div
          style={{
            textAlign: "center",
            fontSize: "10px",
            color: "#b6b6b6",
          }}
          onClick={handleClick}
        >
          {props.notes}
        </div>
      )}
    </StyleBox>
  );
};

export default Box;
