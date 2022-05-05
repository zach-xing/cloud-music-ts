import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  fetchSearchAlbums,
  fetchSearchArtists,
  fetchSearchMV,
  fetchSearchPlayList,
  fetchSearchSongs,
} from "../../api/search";
import Box from "../../components/Box";
import BoxSinger from "../../components/BoxSinger";
import GridLayout from "../../components/GridLayout";
import MVComp from "../../components/MVComp";
import Song from "../../components/Song";
import Title from "./components/Title";
import { SongGridLayout } from "./style";

/**
 * 搜索页面
 */
const Search = () => {
  const [params] = useSearchParams();
  const [artists, setArtists] = useState<Array<API.Artist>>([]);
  const [albums, setAlbums] = useState<Array<API.Album>>([]);
  const [songs, setSongs] = useState<Array<API.Song>>([]);
  const [playList, setPlayList] = useState<Array<API.PlayListItem>>([]);
  const [MVs, setMVs] = useState<Array<API.MV>>([]);

  console.log(params.get("word"));
  useEffect(() => {
    const keywords = params.get("word") || "陈奕迅"; // 万一有人乱搞，总得给他显示点东西吧
    (async () => {
      const data = await Promise.all([
        fetchSearchArtists({ keywords, limit: 5 }),
        fetchSearchAlbums({ keywords, limit: 5 }),
        fetchSearchSongs({ keywords, limit: 16 }),
        fetchSearchPlayList({ keywords, limit: 10 }),
        fetchSearchMV({ keywords, limit: 5 }),
      ]);
      setArtists(data[0].result.artists);
      setAlbums(data[1].result.albums);
      setSongs(data[2].result.songs);
      setPlayList(data[3].result.playlists);
      setMVs(data[4].result.mvs);
      console.log(data[4].result.mvs);
    })();
  }, [params]);

  return (
    <>
      <Title title="艺人" />
      <GridLayout>
        {artists.length !== 0
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

      <Title title="专辑" />
      <GridLayout>
        {albums.length !== 0
          ? albums.map((item) => (
              <Box
                key={item.id}
                id={item.id}
                name={item.name}
                picUrl={item.picUrl}
              />
            ))
          : null}
      </GridLayout>

      <Title title="歌曲" />
      <SongGridLayout>
        {songs.length !== 0
          ? songs.map((item) => <Song key={item.id} data={item} />)
          : null}
      </SongGridLayout>

      <Title title="MVs" />
      <GridLayout>
        {MVs.length !== 0
          ? MVs.map((item) => (
              <MVComp
                key={item.id}
                id={item.id}
                name={item.name}
                artistName={item.artistName}
                imgurl={item?.cover!}
                publishTime={item.publishTime}
              />
            ))
          : null}
      </GridLayout>

      <Title title="歌单" />
      <GridLayout>
        {playList.length !== 0
          ? playList.map((item) => (
              <Box
                key={item.id}
                id={item.id}
                name={item.name}
                picUrl={item.coverImgUrl}
              />
            ))
          : null}
      </GridLayout>
    </>
  );
};

export default Search;
