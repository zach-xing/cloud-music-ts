import React from "react";
import styled from "styled-components";

const Line = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
});

/**
 * 用作将每个音乐块 弹性布局
 */
const MusicLine: React.FC = (props) => {
  return <Line>{props.children}</Line>;
};

export default MusicLine;
