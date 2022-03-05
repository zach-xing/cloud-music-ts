import { useEffect, useState } from "react";
import MusicLine from "../../../components/MusicLine";
import MusicBlock from "../../../components/MusicBlock";
import { fetchTopList } from "../../../api/home";

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
    fetchTopList().then((res: any) => {
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
              id={item.id}
              key={item.id}
              name={item.name}
              picUrl={item.coverImgUrl}
            />
          );
        })}
      </MusicLine>
    </>
  );
};

export default TopList;
