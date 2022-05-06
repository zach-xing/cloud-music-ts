import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchSearchSongs } from "../../api/search";
import Button from "../../components/Button";
import Song from "../../components/Song";
import { MoreDiv, SongGridLayout } from "./style";

/**
 * 搜索后的歌曲页面
 */
const SearchSongs = () => {
  const [params] = useSearchParams();
  const keywords = params.get("word") || "陈奕迅"; // 万一有人乱搞，总得给他显示点东西吧
  const [songs, setSongs] = useState<Array<API.Song>>([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    (async () => {
      const data = await fetchSearchSongs({ keywords, limit: 30, offset });
      setSongs([...songs, ...data.result.songs]);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keywords, offset]);

  return (
    <>
      <h1>搜索 歌曲 “{keywords}”</h1>

      <SongGridLayout>
        {songs.length
          ? songs.map((item) => <Song key={item.id} data={item} />)
          : null}
      </SongGridLayout>
      {songs.length >= 30 + offset ? (
        <MoreDiv>
          <Button onClick={() => setOffset(offset + 30)}>加载更多</Button>
        </MoreDiv>
      ) : null}
    </>
  );
};

export default SearchSongs;
