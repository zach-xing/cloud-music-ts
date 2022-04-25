import React from "react";
import styled from "styled-components";

const LayoutBox = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 36px 24px;
`;

/**
 * 网格布局
 */
const GridLayout: React.FC<{ children: React.ReactNode }> = (props) => {
  return <LayoutBox>{props.children || null}</LayoutBox>;
};

export default GridLayout;
