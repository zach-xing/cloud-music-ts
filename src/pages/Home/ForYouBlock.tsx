import MusicBlock from "../../components/MusicBlock";
import { MusicLine } from "./Home.style";

/** ForYouBlock 的 props 类型 */
interface IProps {
  title: string;
}

const defaultCovers = [
  "https://p2.music.126.net/0-Ybpa8FrDfRgKYCTJD8Xg==/109951164796696795.jpg",
  "https://p2.music.126.net/QxJA2mr4hhb9DZyucIOIQw==/109951165422200291.jpg",
  "https://p1.music.126.net/AhYP9TET8l-VSGOpWAKZXw==/109951165134386387.jpg",
];

/** For You 板块 */
const ForYouBlock = (props: IProps) => {
  return (
    <>
      <h2>{props.title}</h2>
      <MusicLine>
        <MusicBlock
          picUrl={
            "https://p2.music.126.net/0-Ybpa8FrDfRgKYCTJD8Xg==/109951164796696795.jpg"
          }
          blockWidth={"47%"}
        />
        <MusicBlock
          picUrl={
            "https://p2.music.126.net/QxJA2mr4hhb9DZyucIOIQw==/109951165422200291.jpg"
          }
          blockWidth={"47%"}
        />
      </MusicLine>
    </>
  );
};

export default ForYouBlock;
