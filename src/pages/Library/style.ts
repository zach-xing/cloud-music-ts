import styled from "styled-components";

/**
 * 显示个人大致信息的样式组件
 */
export const ProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  height: 100px;
  .avatar {
    display: flex;
    align-items: center;
    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      margin-right: 20px;
    }
  }
  .info {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: bold;
    & > * {
      width: 80px;
      border-right: 1px solid grey;
      &:last-child {
        border-right: 0;
      }
    }
  }
`;

/**
 * 包括我喜欢的音乐
 */
export const SectionOne = styled.div`
  display: flex;
  height: 240px;
  margin: 50px 0;
  .liked-songs {
    flex: 3;
    color: var(--main-fontColor);
    background-color: var(--main-Color);
    border-radius: 20px;
    cursor: pointer;
    user-select: none;
    padding-left: 2%;
  }
  .songs {
    flex: 7;
    margin-left: 36px;
  }
`;

/**
 * 包括歌单信息等
 */
export const SectionTwo = styled.div`
  select {
    font-size: 18px;
    color: #e4e4e4;
    background-color: #4a4949;
    border: none;
    outline: none;
    padding: 10px 20px;
    border-radius: 10px;
    margin: 15px 0;
  }
`;
