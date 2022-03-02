import { useEffect, useState, useRef } from "react";
import { fetchLyric } from "../../api/player";
import {
  Block,
  InfoStyleBlock,
  ActionStyleBlock,
  OtherStyleBlock,
  FullStyleBlock,
  LeftStyleBlock,
  RightStyleBlock,
  HiddenStyleBlock,
} from "./style";
import prevSvg from "../../assets/icons/prev.svg";
import nextSvg from "../../assets/icons/next.svg";
import stopSvg from "../../assets/icons/stop.svg";
import playSvg from "../../assets/icons/play.svg";
import upSvg from "../../assets/icons/up.svg";
import downSvg from "../../assets/icons/down.svg";

/**
 * 播放器 组件
 */
const Player = () => {
  const [state, setState] = useState<any>();
  const [isPlay, setIsPlay] = useState<boolean>(false); // 是否正在播放
  const [isFull, setIsFull] = useState<boolean>(false); // 是否全屏
  const [currentLyc, setCurrentLyc] = useState<number>(0); // 正在播放那个歌词
  const [lyricList, setLyricList] = useState<Array<any>>([]); // 歌词列表
  const playerRef: any = useRef();

  useEffect(() => {
    setState(JSON.parse(localStorage.getItem("player") as string));
  }, []);

  useEffect(() => {
    const handle = () => {
      const player = JSON.parse(localStorage.getItem("player") as string);
      if (player) {
        setState(player);
        setCurrentLyc(0);
      }
    };

    window.addEventListener("setItemEvent", handle);
    return () => {
      window.removeEventListener("setItemEvent", handle);
    };
  }, []);

  // 获取歌词
  useEffect(() => {
    if (state && state.id) {
      (async () => {
        const { data } = await fetchLyric(state.id);
        const tmp: any = [];
        data.lrc.lyric
          .split(/[\n]/) // 截取中括号
          .forEach((item: any) => {
            let temp: Array<string> = item.split(/\[(.+?)\]/);
            tmp.push({
              time: temp[1], // 时间
              lyc: temp[2], //歌词内容
            });
          });
        setLyricList(tmp);
      })();
    }
  }, [state, state?.id]);

  // 处理音乐播放
  const handlePlayStart = () => {
    setIsPlay(true);
    playerRef.current.play();
  };

  // 处理音乐暂停
  const handlePlayEnd = () => {
    setIsPlay(false);
    playerRef.current.pause();
  };

  // 时间转换
  const format = (value: number) => {
    if (!value) return "";
    let interval = Math.floor(value);
    let minute = Math.floor(interval / 60)
      .toString()
      .padStart(2, "0");
    let second = (interval % 60).toString().padStart(2, "0");
    return `${minute}:${second}`;
  };

  const alreadyPlay = (e: any) => {};
  const endPlay = (e: any) => {};
  // 播放位置发生时改变触发
  // TODO: 尝试能不能用 requestAnimationFrame 来优化
  const timeUpdate = (e: any) => {
    // 获取audio当前播放时间
    let currentTime = format(playerRef.current.currentTime); // 事件转换
    for (let i: number = currentLyc; i < lyricList.length; i++) {
      if (
        lyricList[i + 1] &&
        currentTime < lyricList[i + 1]["time"] &&
        currentTime > lyricList[i]["time"]
      ) {
        setCurrentLyc(i);
      }
    }
  };

  return (
    <>
      {/* 底部播放 */}
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
          {isPlay ? (
            <img src={stopSvg} alt="stop" onClick={handlePlayEnd} />
          ) : (
            <img src={playSvg} alt="play" onClick={handlePlayStart} />
          )}
          <img src={nextSvg} alt="next" />
        </ActionStyleBlock>
        <OtherStyleBlock>
          <img src={upSvg} alt="more" onClick={() => setIsFull(true)} />
        </OtherStyleBlock>
      </Block>

      {/* 音频 */}
      <audio
        ref={playerRef}
        onPlayCapture={alreadyPlay}
        onEnded={endPlay}
        onTimeUpdate={timeUpdate}
        src={`https://music.163.com/song/media/outer/url?id=${state?.id}.mp3`}
      />

      {/* 全屏播放 */}
      <FullStyleBlock className={isFull ? "" : "hidden"}>
        <LeftStyleBlock>
          <img src={state?.al.picUrl} alt={state?.al.picUrl} />
          <div className="songInfo">
            <div className="songName">{state?.name}</div>
            <div className="name">{state?.ar[0].name}</div>
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
          src={downSvg}
          alt="hidden"
          onClick={() => setIsFull(false)}
        />
      </FullStyleBlock>
    </>
  );
};

export default Player;
