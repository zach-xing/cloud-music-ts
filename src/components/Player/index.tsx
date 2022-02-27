import { useEffect, useState } from "react";
import {
  Block,
  InfoStyleBlock,
  ActionStyleBlock,
  OtherStyleBlock,
} from "./style";
import prevSvg from "../../assets/icons/prev.svg";
import nextSvg from "../../assets/icons/next.svg";
import stopSvg from "../../assets/icons/stop.svg";
import playSvg from "../../assets/icons/play.svg";

/**
 * 播放器
 */
const Player = () => {
  const [state, setState] = useState<any>();

  useEffect(() => {
    setState(JSON.parse(localStorage.getItem("player") as string));
  }, []);

  useEffect(() => {
    const handle = () => {
      const player = JSON.parse(localStorage.getItem("player") as string);
      if (player) {
        setState(player);
      }
    };

    window.addEventListener("setItemEvent", handle);
    return () => {
      window.removeEventListener("setItemEvent", handle);
    };
  }, []);

  if (state === null) return null;

  return (
    <Block>
      <InfoStyleBlock>
        <img src={state?.al.picUrl} alt={state?.al.picUrl} />
        <div className="songInfo">
          <div className="songName">{state?.name}</div>
          <div className="name">{state?.ar[0].name}</div>
        </div>
      </InfoStyleBlock>
      <ActionStyleBlock>
        <img src={prevSvg} alt="prev" />
        <img src={playSvg} alt="play" />
        <img src={nextSvg} alt="next" />
      </ActionStyleBlock>
      <OtherStyleBlock>^</OtherStyleBlock>
    </Block>
  );
};

export default Player;
