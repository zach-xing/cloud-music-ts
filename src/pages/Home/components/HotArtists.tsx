import { useEffect, useState } from "react";
import { fetchHotArtists } from "../../../api/home";
import ArtistBlock from "../../../components/ArtistBlock";
import MusicLine from "../../../components/MusicLine";

interface IArtists {
  id: number;
  name: string;
  picUrl: string;
}

/**
 * 推荐歌手（艺人）
 */
const HotArtists = () => {
  const [artists, setArtists] = useState<IArtists[]>([]);

  useEffect(() => {
    fetchHotArtists().then((res) => {
      setArtists(res.data.artists);
    });
  }, []);

  return (
    <>
      <h2>推荐歌手</h2>
      <MusicLine>
        {artists.map((item) => (
          <ArtistBlock
            id={item.id}
            key={item.picUrl}
            name={item.name}
            picUrl={item.picUrl}
          />
        ))}
      </MusicLine>
    </>
  );
};

export default HotArtists;
