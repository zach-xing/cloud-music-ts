import React, { useState } from "react";
import Song from "../../../components/Song";
import { SongGridLayout } from "../style";

interface IProps {
  hotSongs: Array<API.Song>;
}

/**
 * 歌手的热门歌曲
 * @param props.hotSongs 接收歌曲信息
 * @returns 歌手的热门歌曲数据
 */
const HotSongs: React.FC<IProps> = (props) => {
  const { hotSongs } = props;
  const [count, setCount] = useState<20 | 50>(20); // 显示的数量，共 50 条，开始展示 30 条

  const handleShow = () => {
    setCount(count === 20 ? 50 : 20);
  };

  return (
    <>
      <h2>热门音乐</h2>
      <SongGridLayout>
        {hotSongs?.map((item, index) => {
          if (index + 1 > count) return null;
          return (
            <Song
              key={item.id}
              name={item.name}
              picUrl={item.al?.picUrl!}
              arName={item.ar![0].name as string}
            />
          );
        })}
      </SongGridLayout>
      <p style={{ cursor: "pointer", opacity: "0.68" }} onClick={handleShow}>
        {count === 20 ? "展开" : "收起"}
      </p>
    </>
  );
};

export default HotSongs;
