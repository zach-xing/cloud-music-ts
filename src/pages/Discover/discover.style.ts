import styled from "styled-components";

/**
 * 分类样式块
 */
export const CategoryStyleBlock = styled.div`
  width: 100%;
  background-color: #323232;
  border-radius: 20px;
  margin: 20px 0;
  .line {
    display: flex;
    h2 {
      color: #bdbdbd;
      margin: 0;
      margin-left: 20px;
      width: 5%;
      height: 64px;
      line-height: 64px;
    }
    .tagGroup {
      display: flex;
      flex-wrap: wrap;
    }
  }
`;
