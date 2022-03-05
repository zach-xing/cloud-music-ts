import styled from "styled-components";

/**
 * 个人信息块
 */
export const ProfileBlock = styled.div`
  h1 {
    margin: 0;
  }
  .song {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    .love {
      width: 30%;
      height: 200px;
      border-radius: 10px;
      color: #335eea;
      background-color: #bbcdff;
      padding-left: 20px;
      cursor: pointer;
    }
    .songs {
    }
  }
`;

/**
 * 选择样式组件
 */
export const Select = styled.select`
  font-size: 18px;
  color: #e4e4e4;
  background-color: #4a4949;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  margin: 15px 0;
`;
