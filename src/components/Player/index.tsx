import React, { useEffect, useState, useRef } from "react";
import { fetchLyric } from "../../api/player";
import {
  Block,
  InfoStyleBlock,
  ActionStyleBlock,
  OtherStyleBlock,
} from "./style";
import nextSvg from "../../assets/icons/next.svg";
import prevSvg from "../../assets/icons/prev.svg";
import pauseSvg from "../../assets/icons/pause.svg";
import playSvg from "../../assets/icons/play.svg";
import fullscreenSvg from "../../assets/icons/fullscreen.svg";
import FullScreen from "./components/FullScreen";
import useStores from "../../store";
import { observer } from "mobx-react-lite";

/**
 * 播放器 组件
 */
const Player = observer(() => {
  const [state, setState] = useState<API.Song>(); // 当前正在播放歌曲的信息
  const [isPlay, setIsPlay] = useState<boolean>(false); // 是否正在播放
  const [isFull, setIsFull] = useState<boolean>(false); // 是否全屏
  const [currentLyc, setCurrentLyc] = useState<number>(0); // 正在播放那行歌词
  const [lyricList, setLyricList] = useState<API.Lyric>([]); // 歌词列表
  const [height, setHeight] = useState<0 | 64>(64);
  const playerRef = useRef<HTMLAudioElement>(null);
  const { playerStore } = useStores();

  useEffect(() => {
    if (
      playerStore.curPlaySong === null ||
      playerStore.curPlaySong === undefined
    ) {
      // 表示不存在，则不显示此组件
      setHeight(0);
    } else {
      setState(playerStore.curPlaySong);
      setCurrentLyc(0);
      setHeight(64);
      handlePlayStart();
    }
  }, [playerStore.curPlaySong]);

  // 获取歌词
  useEffect(() => {
    if (state?.id) {
      (async () => {
        const { lrc } = await fetchLyric(state.id);
        const arr: API.Lyric = [];
        lrc.lyric
          .split(/[\n]/) // 截取中括号
          .forEach((item: any) => {
            let temp: Array<string> = item.split(/\[(.+?)\]/);
            arr.push({
              time: temp[1], // 时间
              lyc: temp[2], //歌词内容
            });
          });
        setLyricList(arr);
      })();
    }
  }, [state?.id]);

  // 音量改变
  const haneleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (playerRef.current?.volume || playerRef.current?.volume === 0) {
      playerRef.current.volume = parseInt(e.target.value) / 100;
    }
  };

  // 处理音乐播放
  const handlePlayStart = () => {
    setIsPlay(true);
    playerRef.current!.play();
  };

  // 处理音乐暂停
  const handlePlayEnd = () => {
    setIsPlay(false);
    playerRef.current!.pause();
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
  // 播放结束
  const endPlay = () => {
    playerStore.nextSong();
  };
  // 播放位置发生时改变触发
  const timeUpdate = () => {
    if (isFull) { // 在全屏的情况下进行
      // 获取audio当前播放时间
      let currentTime = format(playerRef.current!.currentTime); // 时间转换
      for (let i: number = currentLyc; i < lyricList.length; i++) {
        if (
          lyricList[i + 1] &&
          currentTime < lyricList[i + 1]["time"] &&
          currentTime > lyricList[i]["time"]
        ) {
          setCurrentLyc(i);
        }
      }
    }
  };

  return (
    <>
      {/* 底部播放组件 */}
      <Block height={height}>
        <InfoStyleBlock>
          <img src={state?.al?.picUrl} alt={state?.al?.picUrl} />
          <div className="songInfo">
            <div className="songName">{state?.name}</div>
            <div className="name">{state?.ar![0].name}</div>
          </div>
        </InfoStyleBlock>

        <ActionStyleBlock>
          <img
            src={prevSvg}
            alt="prev"
            style={{ transform: "scale(0.8)" }}
            onClick={() => playerStore.prevSong()}
          />
          {isPlay ? (
            <img src={pauseSvg} alt="pause" onClick={handlePlayEnd} />
          ) : (
            <img src={playSvg} alt="play" onClick={handlePlayStart} />
          )}
          <img
            src={nextSvg}
            alt="next"
            style={{ transform: "scale(0.8)" }}
            onClick={() => playerStore.nextSong()}
          />
        </ActionStyleBlock>
        
        <OtherStyleBlock>
          <div>
            音量：
            <input
              type="range"
              min="0"
              max="100"
              defaultValue="100"
              onChange={haneleVolumeChange}
            />
          </div>
          <img src={fullscreenSvg} alt="more" onClick={() => setIsFull(true)} />
        </OtherStyleBlock>
      </Block>

      {/* 音频 */}
      <audio
        autoPlay
        ref={playerRef}
        onPlayCapture={alreadyPlay}
        onEnded={endPlay}
        onTimeUpdate={timeUpdate}
        src={`https://music.163.com/song/media/outer/url?id=${state?.id}.mp3`}
      />

      {/* 全屏播放 */}
      <FullScreen
        isFull={isFull}
        curSong={state}
        currentLyc={currentLyc}
        lyricList={lyricList}
        setIsFull={setIsFull}
      />
    </>
  );
});

export default Player;
