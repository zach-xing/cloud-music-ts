import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchSearchPlayList } from "../../api/search";
import Box from "../../components/Box";
import Button from "../../components/Button";
import GridLayout from "../../components/GridLayout";
import { MoreDiv } from "./style";

/**
 * 搜索后的专辑页面
 */
const SearchPlaylists = () => {
  const [params] = useSearchParams();
  const keywords = params.get("word") || "陈奕迅"; // 万一有人乱搞，总得给他显示点东西吧
  const [playlists, setPlaylists] = useState<Array<API.PlayListItem>>([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    (async () => {
      const data = await fetchSearchPlayList({ keywords, limit: 30, offset });
      setPlaylists([...playlists, ...data.result.playlists]);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keywords, offset]);

  return (
    <>
      <h1>搜索 专辑 “{keywords}”</h1>
      <GridLayout>
        {playlists.length
          ? playlists.map((item) => (
              <Box
                key={item.id}
                id={item.id}
                name={item.name}
                picUrl={item.coverImgUrl}
              />
            ))
          : null}
      </GridLayout>
      {playlists.length >= 30 + offset ? (
        <MoreDiv>
          <Button onClick={() => setOffset(offset + 30)}>加载更多</Button>
        </MoreDiv>
      ) : null}
    </>
  );
};

export default SearchPlaylists;
