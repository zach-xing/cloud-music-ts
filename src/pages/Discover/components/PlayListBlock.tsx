import { useEffect, useState } from "react";
import MusicLine from "../../../components/MusicLine";
import MusicBlock from "../../../components/MusicBlock";
import { fetchCategoryPlaylists } from "../../../api/discover";

interface IProps {
  categoryText: string;
}

/**
 * 歌单列表组件
 */
const PlayListBlock = (props: IProps) => {
  const [playLists, setPlayLists] = useState<any>();

  useEffect(() => {
    (async () => {
      const { data } = await fetchCategoryPlaylists(props.categoryText);
      setPlayLists(data.playlists);
    })();
  }, [props.categoryText]);

  return (
    <MusicLine>
      {playLists &&
        playLists.map((item: any, index: number) => (
          <MusicBlock
            id={item.id}
            key={item.coverImgUrl + `${index}`}
            name={item.name}
            picUrl={item.coverImgUrl}
          />
        ))}
    </MusicLine>
  );
};

export default PlayListBlock;
