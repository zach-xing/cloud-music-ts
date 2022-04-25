import { useState, useEffect } from "react";
import { fetchTopPlaylists } from "../../api/playlist";
import Box from "../../components/Box";
import GridLayout from "../../components/GridLayout";
import CategoryBox from "./components/CategoryBox";

/**
 * 发现
 */
const Discover = () => {
  const [text, setText] = useState<string>("全部");
  const [playList, setPlayList] = useState<Array<API.PlayListItem>>();

  useEffect(() => {
    (async () => {
      const arr = await fetchTopPlaylists(text);
      setPlayList(arr.playlists);
    })();
  }, [text]);

  return (
    <div>
      <h1>发现</h1>
      <CategoryBox selectedText={text} setSelectedText={setText} />
      <GridLayout>
        {playList?.map((item) => (
          <Box
            id={item.id}
            key={item.id}
            name={item.name}
            picUrl={item.coverImgUrl}
          />
        ))}
      </GridLayout>
    </div>
  );
};

export default Discover;
