import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchAlbum } from "../../api/album";
import { fetchArtist } from "../../api/artists";
import Box from "../../components/Box";
import Button from "../../components/Button";
import GridLayout from "../../components/GridLayout";
import Song from "../../components/Song";
import HotSongs from "./components/HotSongs";
import { ArtistInfoDiv, SongGridLayout } from "./style";

/**
 * 歌手页面
 */
const Artist = () => {
  const { id } = useParams();
  const [artist, setArtist] = useState<API.Artist>();
  const [hotSongs, setHotSongs] = useState<Array<API.Song>>();
  const [hotAlbums, setHotAlbums] = useState<Array<API.Album>>();
  console.log("%c render", "color: red;font-size: 20px");

  useEffect(() => {
    (async () => {
      const data = await fetchArtist(id!);
      const res = await fetchAlbum({ id } as { id: string });
      setHotAlbums(res.hotAlbums);
      setArtist(data.artist);
      setHotSongs(data.hotSongs);
    })();
  }, [id]);

  return (
    <>
      <ArtistInfoDiv>
        <img src={artist?.picUrl} alt={artist?.name} />
        <div className="info">
          <h1>{artist?.name}</h1>
          <div>
            {artist?.musicSize} 首歌 · {artist?.albumSize}张专辑 ·{" "}
            {artist?.mvSize}个 MV
          </div>
          <div className="desc">{artist?.briefDesc}</div>
          <Button>播放</Button>
        </div>
      </ArtistInfoDiv>

      <HotSongs hotSongs={hotSongs!} />

      {/* 专辑 */}
      <h2 style={{ marginTop: "50px" }}>专辑</h2>
      <GridLayout>
        {hotAlbums?.map((item) => (
          <Box
            key={item.id}
            id={item.id}
            name={item.name}
            picUrl={item.picUrl}
          />
        ))}
      </GridLayout>
    </>
  );
};

export default Artist;
