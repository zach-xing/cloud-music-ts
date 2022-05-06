import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchSearchArtists } from "../../api/search";
import BoxSinger from "../../components/BoxSinger";
import Button from "../../components/Button";
import GridLayout from "../../components/GridLayout";
import { MoreDiv } from "./style";

/**
 * 搜索后的歌手页面
 */
const SearchArtists = () => {
  const [params] = useSearchParams();
  const keywords = params.get("word") || "陈奕迅"; // 万一有人乱搞，总得给他显示点东西吧
  const [artists, setArtists] = useState<Array<API.Artist>>([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    (async () => {
      const data = await fetchSearchArtists({ keywords, limit: 30, offset });
      setArtists([...artists, ...data.result.artists]);
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keywords, offset]);

  return (
    <>
      <h1>搜索 艺人 “{keywords}”</h1>

      <GridLayout>
        {artists.length
          ? artists.map((item) => (
              <BoxSinger
                key={item.id}
                id={item.id}
                name={item.name}
                picUrl={item.picUrl}
              />
            ))
          : null}
      </GridLayout>
      {artists.length >= 30 + offset ? (
        <MoreDiv>
          <Button onClick={() => setOffset(offset + 30)}>加载更多</Button>
        </MoreDiv>
      ) : null}
    </>
  );
};

export default SearchArtists;
