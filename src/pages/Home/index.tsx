import React from "react";
import ForYouBlock from "./ForYouBlock"
import PersonalizedBlock from "./PersonalizedBlock";
import HotArtists from "./HotArtists";
import NewAlbum from "./NewAlbum";
import TopList from "./TopList";

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
