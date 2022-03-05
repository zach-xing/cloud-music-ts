import React from "react";
import styled from "styled-components";

const Line = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  justify-content: space-between; */
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 44px 24px;
`;

/**
 * 用作将每个音乐块 弹性布局
 */
const MusicLine: React.FC = (props) => {
  return <Line>{props.children}</Line>;
};

export default MusicLine;
