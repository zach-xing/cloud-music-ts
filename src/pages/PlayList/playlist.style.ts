import styled from "styled-components";

/**
 * 歌单信息样式块
 */
export const InfoStyleBlock = styled.div`
  display: flex;
  justify-content: space-between;
  img {
    border-radius: 20px;
    width: 20%;
  }
  .details {
    width: 78%;
    h1 {
      margin-top: 0;
    }
    button {
      min-height: 36px;
      min-width: 100px;
      outline: none;
      border: none;
      border-radius: 16px;
      background-color: #bbcdff;
      transition: all 0.5s ease;
      cursor: pointer;
      :hover {
        transform: scale(1.1);
      }
      :active {
        transform: scale(1);
      }
    }
  }
`;
