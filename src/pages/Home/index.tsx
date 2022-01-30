import React from "react";
import ForYouBlock from "./ForYouBlock"
import PersonalizedBlock from "./PersonalizedBlock";

const Home = () => {
  return (
    <>
      <ForYouBlock title="For You" />
      <PersonalizedBlock title="推荐音乐" />
    </>
  );
};

export default Home;
