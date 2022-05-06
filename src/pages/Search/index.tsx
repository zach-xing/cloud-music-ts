import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
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
  const keywords = params.get("word") || "陈奕迅"; // 万一有人乱搞，总得给他显示点东西吧
  const navigate = useNavigate();
  const [artists, setArtists] = useState<Array<API.Artist>>([]);
  const [albums, setAlbums] = useState<Array<API.Album>>([]);
  const [songs, setSongs] = useState<Array<API.Song>>([]);
  const [playList, setPlayList] = useState<Array<API.PlayListItem>>([]);
  const [MVs, setMVs] = useState<Array<API.MV>>([]);

  useEffect(() => {
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
    })();
  }, [keywords]);

  return (
    <>
      <Title
        title="艺人"
        onMoreClick={() => navigate(`/search/artists?word=${keywords}`)}
      />
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

      <Title
        title="专辑"
        onMoreClick={() => navigate(`/search/albums?word=${keywords}`)}
      />
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

      <Title
        title="歌曲"
        onMoreClick={() => navigate(`/search/songs?word=${keywords}`)}
      />
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

      <Title
        title="歌单"
        onMoreClick={() => navigate(`/search/playlists?word=${keywords}`)}
      />
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
