import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchAlbum } from "../../api/album";
import {
  fetchArtist,
  fetchArtistMVs,
  fetchSimilarArtists,
} from "../../api/artists";
import Box from "../../components/Box";
import BoxSinger from "../../components/BoxSinger";
import Button from "../../components/Button";
import Empty from "../../components/Empty";
import GridLayout from "../../components/GridLayout";
import MV from "../../components/MVComp";
import useStores from "../../store";
import HotSongs from "./components/HotSongs";
import { ArtistInfoDiv } from "./style";

/**
 * 歌手页面
 */
const Artist = () => {
  const { id } = useParams();
  const { playerStore } = useStores();
  const [artist, setArtist] = useState<API.Artist>(); // 歌手信息
  const [hotSongs, setHotSongs] = useState<Array<API.Song>>([]); // 热门歌曲列表
  const [hotAlbums, setHotAlbums] = useState<Array<API.Album>>([]); // 专辑列表
  const [mvs, setMvs] = useState<Array<API.MV>>([]); // MV 列表
  const [simiArtists, setSimiArtists] = useState<Array<API.Artist>>([]);

  useEffect(() => {
    (async () => {
      const data = await fetchArtist(id!);
      const res = await fetchAlbum({ id } as { id: string });
      const { mvs } = await fetchArtistMVs({ id } as { id: string });
      const { artists } = await fetchSimilarArtists(id!);

      setHotAlbums(res.hotAlbums);
      setArtist(data.artist);
      setHotSongs(data.hotSongs);
      setMvs(mvs);
      setSimiArtists(artists);
      window.scrollTo(0, 0);
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
          <Button onClick={() => playerStore.setplayQueue(hotSongs || [])}>
            播放
          </Button>
        </div>
      </ArtistInfoDiv>

      <HotSongs hotSongs={hotSongs!} />

      {/* 专辑 */}
      <h2 style={{ marginTop: "50px" }}>专辑</h2>
      {hotAlbums.length > 0 ? (
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
      ) : (
        <Empty />
      )}

      {/* MV */}
      <h2 style={{ marginTop: "50px" }}>MVs</h2>
      {mvs.length > 0 ? (
        <GridLayout>
          {mvs?.map((item) => (
            <MV
              key={item.id}
              id={item.id}
              name={item.name}
              artistName={item.artistName}
              imgurl={item.imgurl}
              publishTime={item.publishTime}
            />
          ))}
        </GridLayout>
      ) : (
        <Empty />
      )}

      {/* 相似歌手 */}
      <h2 style={{ marginTop: "50px" }}>相似歌手</h2>
      {simiArtists.length > 0 ? (
        <GridLayout>
          {simiArtists?.map((item) => (
            <BoxSinger
              key={item.id}
              id={item.id}
              name={item.name}
              picUrl={item.picUrl}
            />
          ))}
        </GridLayout>
      ) : (
        <Empty />
      )}
    </>
  );
};

export default Artist;
