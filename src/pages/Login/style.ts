import styled from "styled-components";

/**
 * 主要布局样式块
 */
export const StyleMain = styled.div`
  height: calc(100vh - 64px - 20px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

/**
 * 注册表单样式块
 */
export const StyleLogin = styled.div`
  text-align: center;
  margin-top: -200px;
  img {
    width: 100px;
  }
  form {
    margin: 0 20%;
    input {
      margin: 10px 0;
    }
  }
`;
