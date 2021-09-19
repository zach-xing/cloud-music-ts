import * as React from "react";
import Slider from "../../components/Slider";

function Recommend() {
  
  const bannerList = [1,2,3,4].map(item => {
    return {
      imageUrl:
        "http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg",
    };
  })

  return (
    <div>
      <h1>this is Recommend</h1>
      <Slider bannerList={bannerList} />
    </div>
  );
}

export default Recommend;