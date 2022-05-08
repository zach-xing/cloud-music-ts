import React from "react";
import {
  FullStyleBlock,
  HiddenStyleBlock,
  LeftStyleBlock,
  RightStyleBlock,
} from "../style";
import fullscreenExitSvg from "../../../assets/icons/fullscreen-exit.svg";

interface IProps {
  curSong: any;
  currentLyc: number;
  lyricList: API.Lyric;
  setIsFull: (v: boolean) => void;
  isFull: boolean;
}

const FullBlock: React.FC<IProps> = (props) => {
  const { curSong, currentLyc, lyricList, setIsFull, isFull } = props;

  return (
    <FullStyleBlock className={isFull ? "" : "hidden"}>
      <LeftStyleBlock>
        <img src={curSong?.al.picUrl} alt={curSong?.al.picUrl} />
        <div className="songInfo">
          <div className="songName">{curSong?.name}</div>
          <div className="name">{curSong?.ar[0].name}</div>
        </div>
      </LeftStyleBlock>
      <RightStyleBlock y={currentLyc * -2}>
        <div className="scroll">
          {lyricList.map((item, index) => (
            <div key={index} className={currentLyc === index ? "curr" : ""}>
              {item.lyc}
            </div>
          ))}
        </div>
      </RightStyleBlock>

      <HiddenStyleBlock
        src={fullscreenExitSvg}
        alt="hidden"
        onClick={() => setIsFull(false)}
      />
    </FullStyleBlock>
  );
};

export default FullBlock;
