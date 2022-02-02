import React from "react";
import ForYouBlock from "./ForYouBlock"
import PersonalizedBlock from "./PersonalizedBlock";
import HotArtists from "./HotArtists";
import NewAlbum from "./NewAlbum";

const Home = () => {
  return (
    <>
      {/* <ForYouBlock title="For You" /> */}
      <PersonalizedBlock />
      <HotArtists />
      <NewAlbum />
    </>
  );
};

export default Home;
