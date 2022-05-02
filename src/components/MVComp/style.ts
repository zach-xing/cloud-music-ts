import styled from "styled-components";

export const StyleMVDiv = styled.div`
  /* background-color: black; */
  img {
    width: 100%;
    cursor: pointer;
    &:hover {
      box-shadow: 0 0 5px white;
    }
  }
  .name:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  .time {
    font-size: 12px;
    opacity: 0.68;
  }
`;
