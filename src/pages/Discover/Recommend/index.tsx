import React, { useEffect, useState } from "react";
import "./style.scss";

import Slider from "../../../components/Slider";
import RecommendList from "../../../components/RecommendList";

import { fetchRecommendList } from "../../../api/recommend";

function Recommend() {
  const bannerList = [1, 2, 3, 4].map((item) => {
    return {
      imageUrl:
        "http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg",
    };
  });

  let [recommendList, setRecommendList] = useState<any[]>([]);

  useEffect(() => {
    fetchDate({ limit: 8 });
  }, []);

  const fetchDate = async (params: object) => {
    const res = await fetchRecommendList(params);
    setRecommendList(res.data.result);
  };

  return (
    <div className="recommendStyle">
      <div>
        <Slider bannerList={bannerList} />
      </div>
      <RecommendList recommendList={recommendList} />
    </div>
  );
}

export default Recommend;
