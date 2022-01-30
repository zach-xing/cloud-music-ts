import { useEffect, useState } from "react";
import { MusicLine } from "./Home.style";
import MusicBlock from "../../components/MusicBlock";

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
      </MusicLine>
    </>
  );
};

export default ForYouBlock;
