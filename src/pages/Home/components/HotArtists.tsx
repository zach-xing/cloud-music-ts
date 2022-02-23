import React, { useEffect, useState } from "react";
import { fetchHotArtists } from "../../../api/home";
import MusicBlock from "../../../components/MusicBlock";
import { MusicLine } from "../Home.style";

interface IArtists {
  name:string;
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
          <MusicBlock key={item.picUrl} name={item.name} picUrl={item.picUrl} blockWidth={"15%"} isRound />
        ))}
      </MusicLine>
    </>
  );
};

export default HotArtists;
