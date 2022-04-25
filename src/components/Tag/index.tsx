import styled from "styled-components";

interface IProps {
  active: boolean;
}

/**
 * 标签
 */
const Tag = styled.div<IProps>`
  min-width: 64px;
  text-align: center;
  background-color: ${(props) => (props.active ? "#bbcdff" : "#323232")};
  padding: 5px 10px;
  color: #787878;
  font-size: 18px;
  border-radius: 10px;
  cursor: pointer;
  :hover {
    color: #335eea;
    background-color: #bbcdff;
  }
`;

export default Tag;
