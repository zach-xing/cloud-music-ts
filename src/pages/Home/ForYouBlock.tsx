import { ForYoudiv } from "./Home.style";

const defaultCovers = [
  "https://p2.music.126.net/0-Ybpa8FrDfRgKYCTJD8Xg==/109951164796696795.jpg",
  "https://p2.music.126.net/QxJA2mr4hhb9DZyucIOIQw==/109951165422200291.jpg",
  "https://p1.music.126.net/AhYP9TET8l-VSGOpWAKZXw==/109951165134386387.jpg",
];
let coverIndex: number = Math.floor(Math.random() * 3);

/** For You 板块，也就是每日推荐 */
const ForYouBlock = () => {
  return (
    <>
      <ForYoudiv>
        <div className="title">
          <span>每</span>
          <span>日</span>
          <span>推</span>
          <span>荐</span>
        </div>
        <img src={defaultCovers[coverIndex]} alt="每日推荐" />
      </ForYoudiv>
    </>
  );
};

export default ForYouBlock;
