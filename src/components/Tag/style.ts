import styled from "styled-components";

interface ITagSpan {
  active: boolean;
}

export const TagSpan = styled.button<ITagSpan>`
  text-align: center;
  min-width: 64px;
  background-color: ${(props) => (props.active ? "#bbcdff" : "#323232")};
  padding: 10px 15px;
  color: #787878;
  font-size: 18px;
  border-radius: 15px;
  cursor: pointer;
  outline: none;
  border: none;
  margin: 10px;
  margin-left: 0px;
  :hover {
    color: #335eea;
    background-color: #bbcdff;
  }
`;
