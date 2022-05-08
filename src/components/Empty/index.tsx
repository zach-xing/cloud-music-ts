import React from "react";
import styled from "styled-components";
import EmptySvg from "../../assets/icons/empty.svg";

const StyleEmpty = styled("div")`
  width: 100%;
  text-align: center;
`;

/**
 * 表示“空”组件
 */
const Empty = () => {
  return (
    <StyleEmpty>
      <img src={EmptySvg} alt="null" />
    </StyleEmpty>
  );
};

export default Empty;
