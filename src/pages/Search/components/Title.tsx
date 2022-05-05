import React from "react";
import styled from "styled-components";

interface IProps {
  title: string;
  onMoreClick?: React.MouseEventHandler;
}

const StyleTitle = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  span {
    font-size: 14px;
    opacity: 0.68;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

/**
 * 标题，搜索结果对应的标题
 */
const Title: React.FC<IProps> = (props) => {
  return (
    <StyleTitle>
      <h2>{props.title}</h2>
      <span onClick={props.onMoreClick}>查看更多</span>
    </StyleTitle>
  );
};

export default Title;
