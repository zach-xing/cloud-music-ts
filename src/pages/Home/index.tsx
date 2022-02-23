import ForYouBlock from "./components/ForYouBlock"
import PersonalizedBlock from "./components/PersonalizedBlock";
import HotArtists from "./components/HotArtists";
import NewAlbum from "./components/NewAlbum";
import TopList from "./components/TopList";

const Home = () => {
  return (
    <>
      <ForYouBlock />
      <PersonalizedBlock />
      <HotArtists />
      <NewAlbum />
      <TopList />
    </>
  );
};

export default Home;
