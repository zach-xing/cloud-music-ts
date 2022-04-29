import styled from "styled-components";

export const StyleDiv = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 5px;
  border-radius: 10px;
  transition: all 0.2s ease;
  img {
    height: 38px;
    width: 38px;
    border-radius: 10px;
    margin-right: 10px;
    cursor: pointer;
  }
  .name {
    font-size: 16px;
    font-weight: bold;
    cursor: default;
  }
  .songer {
    font-size: 12px;
    opacity: 0.68;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  &:hover {
    color: var(--main-Color);
    background-color: var(--main-bgColor);
  }
`;
