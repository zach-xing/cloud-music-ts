import React from "react";
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
}

/**
 * 用于音乐项、专辑项等
 * @returns 块组件
 */
const Box = (props: IProps) => {
  return (
    <StyleBox>
      <img src={props.picUrl} alt={props.name || "null"} />
      <p style={{ textAlign: "center", marginBottom: 0 }}>{props.name}</p>
      {props.notes && (
        <div
          style={{
            textAlign: "center",
            fontSize: "10px",
            color: "#b6b6b6",
          }}
        >
          {props.notes}
        </div>
      )}
    </StyleBox>
  );
};

export default Box;
