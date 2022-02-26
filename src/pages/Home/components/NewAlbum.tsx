import { useEffect, useState } from "react";
import { fetchAlbum } from "../../../api/home";
import MusicBlock from "../../../components/MusicBlock";
import MusicLine from "../../../components/MusicLine";

interface IAlbums {
  name: string;
  picUrl: string;
  artist: { name: string };
}

/**
 * 推荐歌手（艺人）
 */
const NewAlbum = () => {
  const [albums, setAlbums] = useState<IAlbums[]>([]);

  useEffect(() => {
    fetchAlbum().then((res: any) => {
      setAlbums(res.data.albums);
    });
  }, []);

  return (
    <>
      <h2>新专速递</h2>
      <MusicLine>
        {albums.map((item) => (
          <MusicBlock
            key={item.picUrl}
            name={item.name}
            picUrl={item.picUrl}
            blockWidth={"18%"}
            isround="false"
            notes={item.artist.name}
          />
        ))}
      </MusicLine>
    </>
  );
};

export default NewAlbum;
