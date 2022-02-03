import { useEffect, useState } from "react";
import { MusicLine } from "./Home.style";
import MusicBlock from "../../components/MusicBlock";
import { fetchTopList } from "../../api/home";

interface IList {
  id: number;
  name: string;
  coverImgUrl: string;
}

/**
 * 排行榜 组件
 */
const TopList = () => {
  const [topList, setTopList] = useState<IList[]>([]);

  useEffect(() => {
    fetchTopList().then((res) => {
      setTopList(res.data.list.slice(0, 5));
    });
  }, []);

  return (
    <>
      <h2>排行榜</h2>
      <MusicLine>
        {topList.map((item) => {
          return (
            <MusicBlock
              key={item.id}
              blockWidth={"18%"}
              name={item.name}
              picUrl={item.coverImgUrl}
              isRound={false}
            />
          );
        })}
      </MusicLine>
    </>
  );
};

export default TopList;
