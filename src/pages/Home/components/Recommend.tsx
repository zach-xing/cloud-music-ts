import styled, { keyframes } from "styled-components";

const move = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50%);
  }
`;

const StyleRecommend = styled.div`
  position: relative;
  height: 240px;
  overflow: hidden;
  border-radius: 15px;
  cursor: pointer;
  .title {
    position: absolute;
    top: 50%;
    left: 50px;
    transform: translateY(-50%);
    font-size: 50px;
    font-weight: bold;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    z-index: 1;
  }
  /* 显示的图片滚动动画 */
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    animation: ${move} 36s infinite;
    animation-direction: alternate;
  }
`;

const defaultCovers = [
  "https://p2.music.126.net/0-Ybpa8FrDfRgKYCTJD8Xg==/109951164796696795.jpg",
  "https://p2.music.126.net/QxJA2mr4hhb9DZyucIOIQw==/109951165422200291.jpg",
  "https://p1.music.126.net/AhYP9TET8l-VSGOpWAKZXw==/109951165134386387.jpg",
];

/**
 * 推荐板块 - 展示组件
 * @returns 推荐板块组件
 */
const Recommend = () => {
  let coverIndex: number = Math.floor(Math.random() * 3);

  return (
    <StyleRecommend>
      <div className="title">
        <span>每</span>
        <span>日</span>
        <span>推</span>
        <span>荐</span>
      </div>
      <img src={defaultCovers[coverIndex]} alt="每日推荐" />
    </StyleRecommend>
  );
};

export default Recommend;
