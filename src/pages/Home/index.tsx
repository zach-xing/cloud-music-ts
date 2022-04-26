import { useEffect, useState } from "react";
import Recommend from "./components/Recommend";
import Box from "../../components/Box";
import BoxSinger from "../../components/BoxSinger";
import GridLayout from "../../components/GridLayout";
import { fetchPersonalized } from "../../api/home";
import { fetchHotArtists } from "../../api/artists";
import { fetchNewAlbum } from "../../api/album";
import { fetchTopList } from "../../api/toplist";

const Home = () => {
  const [personalizedPlayList, setPersonalizedPlayList] =
    useState<Array<API.PersonalizedItem>>();
  const [hotArtistsData, setHotArtistsData] = useState<Array<API.Artist>>();
  const [newAlbumData, setNewAlbumData] = useState<Array<API.Album>>();
  const [topListData, setTopListData] = useState<Array<API.TopListItem>>();

  useEffect(() => {
    (async () => {
      const personalizedData = await fetchPersonalized();
      setPersonalizedPlayList(personalizedData.result);

      const hotArtistsData = await fetchHotArtists();
      setHotArtistsData(hotArtistsData.artists);

      const newAlbumData = await fetchNewAlbum();
      setNewAlbumData(newAlbumData.albums);

      const topListData = await fetchTopList();
      setTopListData(topListData.list.slice(0, 5));
    })();
  }, []);

  return (
    <>
      <Recommend />

      <h2>推荐音乐</h2>
      <GridLayout>
        {personalizedPlayList?.map((item) => (
          <Box
            id={item.id}
            key={item.id}
            name={item.name}
            picUrl={item.picUrl}
          />
        ))}
      </GridLayout>

      <h2>推荐歌手</h2>
      <GridLayout>
        {hotArtistsData?.map((item) => (
          <BoxSinger
            id={item.id}
            key={item.id}
            name={item.name}
            picUrl={item.picUrl}
          />
        ))}
      </GridLayout>

      <h2>新专速递</h2>
      <GridLayout>
        {newAlbumData?.map((item) => (
          <Box
            id={item.id}
            key={item.id}
            name={item.name}
            picUrl={item.picUrl}
            notes={item.artist.name}
          />
        ))}
      </GridLayout>

      <h2>排行榜</h2>
      <GridLayout>
        {topListData?.map((item) => (
          <Box
            id={item.id}
            key={item.id}
            name={item.name}
            picUrl={item.coverImgUrl}
            notes={item.updateFrequency}
          />
        ))}
      </GridLayout>
    </>
  );
};

export default Home;
